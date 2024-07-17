import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ArticlesList from './index.js';

describe('ArticlesList', () => {
  const articles = [
    { id: 1, title: 'Article 1', abstract: 'Article 1 abstract', media: [] },
    { id: 2, title: 'Article 2', abstract: 'Article 2 abstract', media: [] },
  ];

  const selectedArticle = articles[0];

  test('renders articles correctly', () => {
    render(
      <ArticlesList
        articles={articles}
        selectedArticle={selectedArticle}
        handleArticleClick={() => {}}
      />
    );

    const articleElements = screen.getAllByTestId('article');
    expect(articleElements.length).toBe(2);

    articles.forEach((article, index) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
      expect(screen.getByText(article.abstract)).toBeInTheDocument();
    });
  });

  test('passes correct props to each Article component', () => {
    const mockHandleClick = jest.fn();

    render(
      <ArticlesList
        articles={articles}
        selectedArticle={selectedArticle}
        handleArticleClick={mockHandleClick}
      />
    );

    const articleElements = screen.getAllByTestId('article');
    expect(articleElements.length).toBe(2);

    articleElements.forEach((articleElement, index) => {
      const articleProps = articleElement.props.article;
      expect(articleProps).toEqual(articles[index]);
      expect(articleElement.props.selectedArticle).toEqual(selectedArticle);
      expect(articleElement.props.handleArticleClick).toEqual(mockHandleClick);
    });
  });
});

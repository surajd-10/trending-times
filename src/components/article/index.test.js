import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Article from './index.js';

describe('Article', () => {
  const article = {
    id: "article",
    title: 'Sample Article',
    abstract: 'Sample abstract',
    media: [
      {
        'media-metadata': [
          {
            url: 'https://example.com/image.jpg',
            height: 200,
            width: 300,
          },
        ],
        caption: 'Sample Caption',
      },
    ],
  };

  const selectedArticle = article;

  test('renders article correctly', () => {
    render(
      <Article
        article={article}
        selectedArticle={selectedArticle}
        handleArticleClick={() => {}}
      />
    );

    const titleElement = screen.getByText(article.title);
    const abstractElement = screen.getByText(article.abstract);
    const imageElement = screen.getByAltText(article.media[0].caption);

    expect(titleElement).toBeInTheDocument();
    expect(abstractElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', article.media[0]['media-metadata'][0].url);
    expect(imageElement).toHaveAttribute('height', `${article.media[0]['media-metadata'][0].height}`);
    expect(imageElement).toHaveAttribute('width', `${article.media[0]['media-metadata'][0].width}`);
  });

  test('adds selected class when article is selected', () => {
    render(
      <Article
        article={article}
        selectedArticle={selectedArticle}
        handleArticleClick={() => {}}
      />
    );

    const articleElement = screen.getByTestId("article");
    expect(articleElement).toHaveClass('selected');
  });

  test('calls handleArticleClick on article click', () => {
    const mockHandleClick = jest.fn();

    render(
      <Article
        article={article}
        selectedArticle={selectedArticle}
        handleArticleClick={mockHandleClick}
      />
    );

    const articleElement = screen.getByTestId("article");
    fireEvent.click(articleElement);

    expect(mockHandleClick).toHaveBeenCalledWith(article);
  });
});

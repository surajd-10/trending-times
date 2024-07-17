import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ArticleDetails from './index.js';

describe('ArticleDetails', () => {
  const article = {
    id: 1,
    title: 'Sample Article',
    abstract: 'Sample abstract',
    published_date: '2024-07-17',
    byline: 'John Doe',
    url: 'https://example.com/article',
  };

  test('renders article details correctly when article is provided', () => {
    render(<ArticleDetails article={article} />);

    const titleElement = screen.getByText(article.title);
    const abstractElement = screen.getByText(article.abstract);
    const publishedDateElement = screen.getByText(`Published Date: ${article.published_date}`);
    const bylineElement = screen.getByText(`By: ${article.byline}`);
    const readMoreLinkElement = screen.getByRole('link', { name: /Read More/i });

    expect(titleElement).toBeInTheDocument();
    expect(abstractElement).toBeInTheDocument();
    expect(publishedDateElement).toBeInTheDocument();
    expect(bylineElement).toBeInTheDocument();
    expect(readMoreLinkElement).toHaveAttribute('href', article.url);
  });

  test('renders "No Data To Display" when no article is provided', () => {
    render(<ArticleDetails article={null} />);

    const noDataElement = screen.getByText('No Data To Display');
    expect(noDataElement).toBeInTheDocument();
  });
});

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
    url: 'https://example.com/article',
  };

  it('renders iframe with article URL when article is provided', () => {
    render(<ArticleDetails article={article} />);
    const iframeElement = screen.getByTestId('article-iframe');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', article.url);
  });

  test('renders "No Data To Display" when no article is provided', () => {
    render(<ArticleDetails article={null} />);

    const noDataElement = screen.getByText('No Data To Display');
    expect(noDataElement).toBeInTheDocument();
  });
});

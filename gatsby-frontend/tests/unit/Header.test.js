import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header';

// Mock Gatsby components
jest.mock('gatsby', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('Header Component', () => {
  test('renders header with logo and navigation', () => {
    render(<Header />);
    
    // Check for logo
    expect(screen.getByText('WordPress Devs')).toBeInTheDocument();
    
    // Check for navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Developers')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('has proper navigation structure', () => {
    render(<Header />);
    
    const nav = screen.getAllByRole('navigation')[0];
    expect(nav).toBeInTheDocument();
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });
});

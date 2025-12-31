import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer';

// Mock Gatsby components
jest.mock('gatsby', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('Footer Component', () => {
  test('renders footer with brand and links', () => {
    render(<Footer />);
    
    // Check for brand name
    expect(screen.getByText('WordPress Devs')).toBeInTheDocument();
    
    // Check for footer links
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  test('has proper footer structure', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    
    const privacyLink = screen.getByRole('link', { name: /privacy policy/i });
    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });
});

import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('should render header', () => {
  test('should render trips link in header navbar', () => {
    render(<Header />);
    const navTrips = screen.getByTestId('nav-trips');
    expect(navTrips).toBeInTheDocument();
    expect(navTrips).toMatchSnapshot();
  });
});

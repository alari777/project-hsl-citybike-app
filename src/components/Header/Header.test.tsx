import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('should render header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('should render trips link in header navbar', () => {
    const navTrips = screen.getByTestId('nav-trips');
    expect(navTrips).toBeInTheDocument();
    expect(navTrips).toMatchSnapshot();
  });

  test('should render stations link in header navbar', () => {
    const navStations = screen.getByTestId('nav-stations');
    expect(navStations).toBeInTheDocument();
    expect(navStations).toMatchSnapshot();
  });

  test('should render manage link in header navbar', () => {
    const navManage = screen.getByTestId('nav-manage');
    expect(navManage).toBeInTheDocument();
    expect(navManage).toMatchSnapshot();
  });
});

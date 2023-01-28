import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('should render footer', () => {
  render(<Footer />);
  const footer = screen.getByText(
    /Helsinki city bike. Created at NextJS. 2023/i
  );
  expect(footer).toBeInTheDocument();
  expect(footer).toMatchSnapshot();
});

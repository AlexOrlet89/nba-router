import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('Renders the characters from the first page of the R&M Api', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const loading = screen.getByText('Loading...');
  screen.debug();
  expect(loading).toBeInTheDocument(); //found loading... now lets await and see if we can't find rick
});

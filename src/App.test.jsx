import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
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
  expect(loading).toBeInTheDocument(); //found loading... now lets await and see if we can't find rick
  const rick = await screen.findByText('Rick Sanchez');
  expect(rick).toBeInTheDocument();
  //   screen.debug();
});

test('Will go to Rick Sanchezs detail page, which includes his status as a living human', async () => {
  render(
    <MemoryRouter initialEntries={['/character/6', '/']} initialIndex={1}>
      <App />
    </MemoryRouter>
  );
  // lets bring back our rick this time and we'll click on him lol.
  const rick = await screen.findByText('Rick Sanchez');
  fireEvent.click(rick);
  const status = await screen.findByText('Alive Human');
  expect(status).toBeInTheDocument();
  //   screen.debug();
});

test('clicking back button will return to list page', async () => {
  render(
    // init index loads page on character 6, test to ensure she loads
    <MemoryRouter initialEntries={['/', '/character/6']} initialIndex={1}>
      <App />
    </MemoryRouter>
  );
  const princess = await screen.findByText('Abadango Cluster Princess');
  expect(princess).toBeInTheDocument();
  //find back button
  const button = await screen.findByText('Back');
  fireEvent.click(button);
  const li = await screen.findAllByRole('listitem');
  screen.debug();
  expect(li.length).toBe(20);
  //   const status = await screen.findByText('Alive Human');
  //   expect(status).toBeInTheDocument();
  //   expect();
});

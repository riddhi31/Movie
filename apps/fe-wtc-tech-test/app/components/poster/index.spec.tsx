
import React from 'react';
import {
  screen,
  render,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import PosterImage from '.';

describe('Check the Src is not null', () => {
    const Poster = 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg';
    const Title = 'Blade Runner'
    it('displays a source value not to be null', async () => {
      render(<PosterImage {...{Poster, Title}} data-testid="movie-poster"/>)
        const image = screen.getByRole('img');
        await waitFor(() => expect(image.getAttribute('src') !== '').toBeTruthy());})
  });
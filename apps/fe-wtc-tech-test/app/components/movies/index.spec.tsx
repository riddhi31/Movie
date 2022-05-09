import React from 'react';
import { render,act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { unmountComponentAtNode } from 'react-dom';
import {movieMock} from './mocks';
import { ThemeProvider } from '@material-ui/core';
import MovieList from '.';
import {Theme} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('<Movie />', () => {
  it('Should display movie count', async () => {
    const { getByTestId } = render(
    <ThemeProvider theme={Theme} >
      <MovieList movies={movieMock} />
    </ThemeProvider>
    , container);
    act(() => {
      expect(getByTestId('movieCount')).toHaveTextContent('Movies(22)');
    });
  });
});


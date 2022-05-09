import React from 'react';
import {
  screen,
  render,
  act,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieControls from './';
import { unmountComponentAtNode } from 'react-dom';
import {Theme} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';
import { ThemeProvider } from '@material-ui/core';
describe('<MovieControl />', () => {
  let container = null;
  let watched = true;
  let saved = true;
  let dispatch = jest.fn();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it ('should trigger the onChange event', async() => { 
    act(() => {
      render(<ThemeProvider theme={Theme}><MovieControls watched={watched} saved={saved} dispatch={dispatch} imdbID={'tt0083658'} /></ThemeProvider>,container)
    })
    
    const unWatchedButton =  screen.getByTestId('movie_watched');
    const notSavedButton =  screen.getByTestId('movie_saved');
    
    act(() => {
        fireEvent.click(unWatchedButton);
        fireEvent.click(notSavedButton);
    });
    
    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
    })
  });
});
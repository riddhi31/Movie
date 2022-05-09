import React from 'react';
import { act, render } from '@testing-library/react';
import Home from '.';
import { movieMock } from '../app/components/movies/mocks';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';

describe('/', () => {
  it('should render the homepage', () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Home movies={movieMock} />
      </ThemeProvider>
    );
    act(() => {
      expect(container).toMatchInlineSnapshot(`
        <div>
          <main>
            <div
              class="MuiGrid-root makeStyles-root-2 MuiGrid-container"
            >
              <h4
                class="MuiTypography-root makeStyles-pageTitle-8 MuiTypography-h4 MuiTypography-alignCenter"
                data-testid="movieCount"
              >
                Movies
                <p
                  class="MuiTypography-root MuiTypography-body1"
                  style="display: inline-block; font-weight: bold;"
                >
                  (
                  22
                  )
                </p>
              </h4>
              <div
                class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4"
              >
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0083658"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Blade Runner"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4
                      )
                    </p>
                    <div
                      class="makeStyles-star-214"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatched-6 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0172495"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Gladiator"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      3.82
                      )
                    </p>
                    <div
                      class="makeStyles-star-215"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatched-6 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0047478"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Seven Samurai"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMjI1ZjhmMzktMDZhMy00MDhjLTk3YjAtMTNlZTA5MDI3NzQ3XkEyXkFqcGdeQXVyODkxNzAwMDI@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4.73
                      )
                    </p>
                    <div
                      class="makeStyles-star-216"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieSaved-5 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0346278"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="downloaded"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Get Serious: Seven Deadly Sins"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BM2U1ZjQ0ZmItNGE3Mi00MmIyLTk3YWQtNmZlMTQwNTVlZTViXkEyXkFqcGdeQXVyMTkwNDA0OA@@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      2.75
                      )
                    </p>
                    <div
                      class="makeStyles-star-217"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatchNSave-7 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0110912"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="downloaded"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Pulp Fiction"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4.58
                      )
                    </p>
                    <div
                      class="makeStyles-star-218"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatched-6 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0266697"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Kill Bill: Vol. 1"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      3.92
                      )
                    </p>
                    <div
                      class="makeStyles-star-219"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatched-6 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0378194"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Kill Bill: Vol. 2"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4
                      )
                    </p>
                    <div
                      class="makeStyles-star-220"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0102926"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="The Silence of the Lambs"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4
                      )
                    </p>
                    <div
                      class="makeStyles-star-221"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0119978"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="The Rainmaker"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMjdlMjI2ZjgtN2ViOS00ZmI0LWE0ZTMtZjg1ZjczYWYzOGZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      3.78
                      )
                    </p>
                    <div
                      class="makeStyles-star-222"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatchNSave-7 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0068646"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="downloaded"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="The Godfather"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4.83
                      )
                    </p>
                    <div
                      class="makeStyles-star-223"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatched-6 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt1189073"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="The Skin I Live In"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BYmFmNjY5NDYtZjlhNi00YjQ5LTgzNzctNWRiNWUzNmIyNjc4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      3.78
                      )
                    </p>
                    <div
                      class="makeStyles-star-224"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatchNSave-7 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0441909"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="downloaded"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Volver"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMjA0NTUxMjY1OV5BMl5BanBnXkFtZTcwNjI2OTMzMQ@@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4
                      )
                    </p>
                    <div
                      class="makeStyles-star-225"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieSaved-5 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0031381"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="downloaded"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Gone with the Wind"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4
                      )
                    </p>
                    <div
                      class="makeStyles-star-226"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0053291"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Some Like It Hot"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4.58
                      )
                    </p>
                    <div
                      class="makeStyles-star-227"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0097576"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Indiana Jones and the Last Crusade"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      3.92
                      )
                    </p>
                    <div
                      class="makeStyles-star-228"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt1856101"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Blade Runner 2049"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4
                      )
                    </p>
                    <div
                      class="makeStyles-star-229"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatchNSave-7 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0343660"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="downloaded"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="50 First Dates"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      2.68
                      )
                    </p>
                    <div
                      class="makeStyles-star-230"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt1564367"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Just Go with It"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMTM3MzM3NDE5MV5BMl5BanBnXkFtZTcwNDE5MTUxNA@@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      1.93
                      )
                    </p>
                    <div
                      class="makeStyles-star-231"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt2243389"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="I'm So Excited!"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMTYxODgwNDQyOF5BMl5BanBnXkFtZTcwMzM2NjkwOQ@@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      2.67
                      )
                    </p>
                    <div
                      class="makeStyles-star-232"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0093412"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Law of Desire"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMDdjZDhlOWUtOWQ4YS00ZjdhLWJkOTktMTVlYTY2Y2IwMTMxXkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4
                      )
                    </p>
                    <div
                      class="makeStyles-star-233"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-cardBg-4 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0095675"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 unwatched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="unwatched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Women on the Verge of a Nervous Breakdown"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BYWM1NWFjMDItODg5OS00MWUwLWFjNWUtOGZkZWM3NmRiMWNjXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      4
                      )
                    </p>
                    <div
                      class="makeStyles-star-234"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3"
                >
                  <div
                    class="MuiPaper-root makeStyles-paper-1 makeStyles-movieWatched-6 MuiPaper-elevation1 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root makeStyles-movieControl-3 MuiGrid-container"
                      data-key="tt0101026"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9 watched"
                        data-testid="movie_watched"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="watched"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-unstyleButton-9"
                        data-testid="movie_saved"
                        tabindex="0"
                        type="button"
                      >
                        <span
                          class="MuiButton-label"
                        >
                          <svg
                            aria-hidden="true"
                            aria-label="not download"
                            class="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        </span>
                        <span
                          class="MuiTouchRipple-root"
                        />
                      </button>
                    </div>
                    <div
                      class="makeStyles-imgWrapper-213"
                    >
                      <img
                        alt="Tie Me Up! Tie Me Down!"
                        class="makeStyles-imgResponsive-212"
                        src="https://m.media-amazon.com/images/M/MV5BMjExMDM0OTItY2E1YS00N2Y4LWFlNGMtOTgyNmFlMjIyOTgxXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg"
                      />
                    </div>
                    <p
                      class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter"
                      style="font-weight: bold;"
                    >
                      (
                      3
                      )
                    </p>
                    <div
                      class="makeStyles-star-235"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      `);
    });
  });
});

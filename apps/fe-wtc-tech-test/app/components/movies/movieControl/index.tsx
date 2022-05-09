import React from 'react';
import {
  VisibilityIcon,
  VisibilityOffIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
  Grid,
  Button,
} from '@mono-nx-test-with-nextjs/ui';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    movieControl: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    unstyleButton: {
      minWidth: 'auto',
    },
  })
);
export interface IMovieControls {
  imdbID: string;
  watchedState: boolean;
  savedState: boolean;
  handleWatched: (imgdbID: string) => () => void;
  handleSaved: (imgdbID: string) => () => void;
}
export const MovieControls = ({
  imdbID,
  watchedState,
  savedState,
  handleWatched,
  handleSaved,
}) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.movieControl}
      container
      direction="row"
      data-key={imdbID}
    >
      <Button
        className={classes.unstyleButton}
        variant="text"
        data-testid={'movie_watched'}
        onClick={handleWatched(imdbID)}
      >
        {watchedState ? (
          <VisibilityIcon aria-label="watched" />
        ) : (
          <VisibilityOffIcon aria-label="unwatched" />
        )}
      </Button>
      <Button
        className={classes.unstyleButton}
        variant="text"
        data-testid={'movie_saved'}
        onClick={handleSaved(imdbID)}
      >
        {savedState ? (
          <FavoriteIcon aria-label="downloaded" />
        ) : (
          <FavoriteBorderIcon aria-label="not download" />
        )}
      </Button>
    </Grid>
  );
};

export default MovieControls;

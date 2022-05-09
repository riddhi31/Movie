import React, { useEffect, useState } from 'react';
import { Grid, Typography, Paper } from '@mono-nx-test-with-nextjs/ui';
import PosterImage from '../../poster';
import { rateAverage } from '@mono-nx-test-with-nextjs/utils';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MovieControls from '../movieControl';
import StarRating from '../rating';
import updateMovieStatus from '../../helper/services';
import { type } from 'os';

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      borderRadius: '20px',
      backgroundColor: theme.palette.common.white,
      padding: '10px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    cardBg: {
      backgroundColor: theme.palette.common.white,
    },
    movieSaved: {
      backgroundColor: theme.cards.orange,
    },
    movieWatched: {
      backgroundColor: theme.cards.yellow,
    },
    movieWatchNSave: {
      backgroundColor: theme.cards.green,
    },
    pageTitle: {
      fontWeight: 700,
      fontSize: '22px',
      paddingTop: '15px',
      paddingBottom: '15px',
      display: 'inline-block',
    },
  })
);
interface CardProps {
  imdbID: string;
  title: string;
  watched: string;
  saved: string;
  poster: string;
  ratings?: Array<{
    Source: string;
    Value: string;
  }>;
}

type IupdateMovieStatus = {
  imdbID: string;
  watchedState: boolean;
  savedState: boolean;
};

export const MovieCard = ({
  imdbID,
  title,
  watched,
  saved,
  poster,
  ratings,
}: CardProps) => {
  const classes = useStyles();
  const ratObjectLength = ratings.length;
  const { voteAverage, displayRating } = rateAverage({
    ratings,
    ratObjectLength,
  });
  const watchedStatus = watched === 'True' ? true : false;
  const savedStatus = saved === 'True' ? true : false;

  const [watchedState, setWatchedState] = useState<boolean>(watchedStatus);
  const [savedState, setSavedState] = useState<boolean>(savedStatus);

  useEffect(() => {
    if (imdbID) {
      updateMovieStatus({ imdbID, watchedState, savedState });
    }
  }, [watchedState, savedState, imdbID]);

  const cardClass =
    watchedState && !savedState
      ? `${classes.movieWatched}`
      : !watchedState && savedState
      ? `${classes.movieSaved}`
      : watchedState && savedState
      ? `${classes.movieWatchNSave}`
      : `${classes.cardBg}`;

  const handleWatched = (imdbID: string) => () => {
    setWatchedState(!watchedState);
    updateMovieStatus({ imdbID, watchedState, savedState });
  };

  const handleSaved = (imdbID: string) => () => {
    setSavedState(!savedState);
    updateMovieStatus({ imdbID, watchedState, savedState });
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={imdbID}>
      <Paper className={`${classes.paper} ${cardClass}`}>
        <MovieControls
          {...{
            watchedState,
            savedState,
            handleWatched,
            handleSaved,
            imdbID,
          }}
        />
        <PosterImage data-testid="movie-poster" {...{ poster, title }} />
        <Typography
          align="center"
          variant="body2"
          style={{ fontWeight: 'bold' }}
        >
          ({displayRating})
        </Typography>
        <StarRating
          aria-label={`This ${title} rating is ${displayRating}`}
          selectedStars={displayRating}
        />
      </Paper>
    </Grid>
  );
};

export default MovieCard;

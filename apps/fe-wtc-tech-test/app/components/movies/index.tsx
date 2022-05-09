import React from 'react';
import { Grid, Typography } from '@mono-nx-test-with-nextjs/ui';
import MovieCard from './movieCard';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10%',
    },
    pageTitle: {
      fontWeight: 'bold',
      fontSize: '22px',
      paddingTop: '15px',
      paddingBottom: '15px',
      display: 'inline-block',
    },
    pageSubTitle: {
      display: 'inline-block',
    },
  })
);

export const MovieList = ({ movies }) => {
  const classes = useStyles();
  const totalMovies = movies.length;
  const movieText = totalMovies > 1 ? `Movies` : `Movie`;

  return (
    <>
      <Grid container classes={{ root: classes.root }}>
        <Typography
          data-testid="movieCount"
          className={classes.pageTitle}
          align="center"
          variant="h4"
        >
          {movieText}
          <Typography variant="body1" className={classes.pageSubTitle}>
            ({totalMovies})
          </Typography>
        </Typography>
        <Grid container spacing={5}>
          {movies.map(
            ({ imdbID, title, watched, saved, poster, ratings }, index) => (
              <MovieCard
                key={index}
                {...{ imdbID, title, watched, saved, poster, ratings }}
              ></MovieCard>
            )
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default MovieList;

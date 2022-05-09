import React from 'react';
import MovieList from '../app/components/movies';

const Home = ({ movies }) => {
  const movieList = movies.map(
    ({
      Ratings: ratings,
      Watched: watched,
      Saved: saved,
      Title: title,
      Poster: poster,
      imdbID,
    }) => ({ ratings, watched, saved, title, poster, imdbID })
  );
  return (
    <main>
      <MovieList movies={movieList} />
    </main>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_END_PATH}api/movies`
    );
    const movies = await res.json();

    return {
      props: {
        movies,
      },
    };
  } catch (error) {
    return { props: {} };
  }
}

export default Home;

const hostName = process.env.NEXT_PUBLIC_API_END_PATH;

export const updateMovieStatus = async ({
  imdbID,
  watchedState,
  savedState,
}) => {
  const formData = new URLSearchParams({
    watched: watchedState.toString(),
    saved: savedState.toString(),
  });
  const requestOptions = {
    method: 'PUT',
    body: formData,
  };
  fetch(`${hostName}api/movies/id/${imdbID}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export default updateMovieStatus;

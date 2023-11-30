import { fetchMovieById } from 'api';
import SelectedMovieDetails from 'components/SelectedMovieDetails/SelectedMovieDetails';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function getMovie() {
      try {
        setLoading(true);
        const fetchedMovie = await fetchMovieById(movieId);
        setSelectedMovie(fetchedMovie);
      } catch (error) {
        window.alert(
          'Oops! Something went wrong! Please try reloading this page!'
        );
      } finally {
        setLoading(false);
      }
    }
    if (typeof movieId !== 'undefined') {
      getMovie();
    }
  }, [movieId]);

  return (
    // <div>
    //   <SelectedMovieDetails movie={selectedMovie} />;
    // </div>
    <div>
      {loading && <h2>Loading...</h2>}

      {/* <Link to={backLinkRef.current.state?.from ?? '/'}>
        <b>◄ Go back ◄</b>
      </Link> */}
      {selectedMovie && <SelectedMovieDetails movie={selectedMovie} />}

      {/* <AddInfo>Additional infomation</AddInfo> */}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

import { fetchMovieCast } from 'api';
import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();

  const [castMovie, setCastMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function getCast() {
      try {
        setLoading(true);
        const fetchedCast = await fetchMovieCast(movieId);
        setCastMovie(fetchedCast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getCast();
  }, [movieId]);

  const defaultImage =
    'https://via.placeholder.com/250x375.png?text=Image+Not+Found';

  return (
    <div>
      {loading && <Loader />}

      <ul className={css.cast_list}>
        {castMovie.length > 0 ? (
          castMovie.map(({ profile_path, name, character, id }) => (
            <li key={id} className={css.cast_item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImage
                }
                alt={name}
                width={250}
                height={375}
              />
              <p>{name}</p>
              <p>{`Character: ${character}`}</p>
            </li>
          ))
        ) : (
          <p>We don't have any information about the actors.</p>
        )}
      </ul>
    </div>
  );
};

export default Cast;

import { fetchMovieCast } from 'api';
import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';

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
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {loading && <h1>Loading...</h1>}

      <ul>
        {castMovie.length > 0 ? (
          castMovie.map(({ profile_path, name, character, id }) => (
            <li key={id}>
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

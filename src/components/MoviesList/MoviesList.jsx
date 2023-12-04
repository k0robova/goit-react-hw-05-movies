import React from 'react';
import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const defaultImage =
    'https://via.placeholder.com/250x375.png?text=Image+Not+Found';
  const location = useLocation();

  return (
    <ul className={css.movies_list}>
      {items.map(({ poster_path, name, title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {
              <div className={css.movies_list_container}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImage
                  }
                  alt={name || title}
                  width={250}
                  height={375}
                />
                <p className={css.trending_movie_title}>{name || title}</p>
              </div>
            }
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

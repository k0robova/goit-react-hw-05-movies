import React from 'react';
import css from './MovieList.module.css';
import { Link } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul className={css.movies_list}>
      {items.map(({ poster_path, name, title, id }) => (
        <Link key={id} className={css.movies_list_item} to={`/movies/${id}`}>
          <div className={css.movies_list_container}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              alt={name || title}
              width={250}
              height={375}
            />
            <p className={css.trending_movie_title}>{title || name}</p>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;

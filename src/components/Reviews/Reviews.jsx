import React from 'react';

import { fetchMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviewsMovie, setReviewMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function getCast() {
      try {
        setLoading(true);
        const fetchedCast = await fetchMovieReviews(movieId);
        setReviewMovie(fetchedCast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      {reviewsMovie.length > 0 ? (
        reviewsMovie.map(({ author, content, id }) => (
          <ul>
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          </ul>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;

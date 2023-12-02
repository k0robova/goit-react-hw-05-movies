import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
      {/* ту має бути <Navigate to ="/"/>*/}
    </Routes>
  );
};

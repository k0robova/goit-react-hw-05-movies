import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';

import Layout from './Layout/Layout';
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Loader />}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="movies/:movieId"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  );
};

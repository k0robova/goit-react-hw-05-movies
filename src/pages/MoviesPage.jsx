import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMoviesBySearch } from 'api';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const MoviesPage = () => {
  const [nameMovie, setNameMovie] = useState('');

  const [loading, setLoading] = useState(false);
  const [movieItems, setMovieItems] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const value = searchParams.get('search');
    if (value) {
      setNameMovie(value);
    }
  }, [searchParams]);

  const handleSearchFormSubmit = query => {
    if (nameMovie === query) {
      return;
    }
    setNameMovie(query);
  };

  useEffect(() => {
    async function getSearchMovies() {
      try {
        setLoading(true);
        const searchMovies = await fetchMoviesBySearch(nameMovie);
        setMovieItems(searchMovies);
      } catch (error) {
        window.alert(
          'Oops! Something went wrong! Please try reloading this page!'
        );
      } finally {
        setLoading(false);
      }
    }

    getSearchMovies();
  }, [nameMovie]);

  return (
    <>
      <SearchForm onSubmit={handleSearchFormSubmit} />
      {loading && <Loader />}
      {nameMovie && <MoviesList items={movieItems} />}
    </>
  );
};

export default MoviesPage;

// !2
// const MoviesPage = () => {
//   const [nameMovie, setNameMovie] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [movieItems, setMovieItems] = useState([]);

//   const handleSearchFormSubmit = query => {
//     if (nameMovie === query) {
//       return;
//     }
//     setNameMovie(query);
//   };

//   useEffect(() => {
//     async function getSearchMovies() {
//       try {
//         setLoading(true);
//         const searchMovies = await fetchMoviesBySearch(nameMovie);
//         setMovieItems(searchMovies);
//       } catch (error) {
//         window.alert(
//           'Oops! Something went wrong! Please try reloading this page! 🥹'
//         );
//       } finally {
//         setLoading(false);
//       }
//     }

//     getSearchMovies();
//   }, [nameMovie]);

//   return (
//     <>
//       <SearchForm onHandleSearchFormSubmit={handleSearchFormSubmit} />
//       {loading && <h1>Loading...</h1>}
//       {nameMovie && <MoviesList items={movieItems} />}
//     </>
//   );
// };

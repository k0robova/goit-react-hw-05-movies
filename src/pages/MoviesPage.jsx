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

  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    const value = searchParams.get('search');
    if (value) {
      setNameMovie(value);
    }
  }, [searchParams]);

  const handleSearchFormSubmit = ({ query }) => {
    if (nameMovie === query) {
      return;
    }
    setNameMovie(query);
  };

  useEffect(() => {
    // if (!nameMovie) {
    //   window.alert('введіть щось в поле пошуку ');
    //   return;
    // }

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
      {loading && <Loader />}

      <SearchForm onSubmit={handleSearchFormSubmit} />

      {nameMovie && <MoviesList items={movieItems} />}
    </>
  );
};

export default MoviesPage;

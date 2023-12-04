import { useState } from 'react';
import css from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = evt => {
    if (!evt.target.value) {
      setSearchParams({});
    }
    setQuery(evt.target.value.toLowerCase());
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();

    // if (query.trim() === '') {
    //   window.alert('Type something in the search field !');
    //   return;
    // }
    if (!query) return setSearchParams({});

    setSearchParams({ search: query });
    // onSubmit({ query: searchParams.get('search') } ?? '');
    onSubmit({ query: searchParams.get('search') });
    // setQuery('');
  };
  // !щоб очищувалися паремтри в урлі - але перенсла в handleChange
  // useEffect(() => {
  //   if (!query) {
  //     setSearchParams({});
  //   }
  // }, [query, setSearchParams]);

  // ! щоб залишалося в пошуку то. що ми вводимо. і показувалося, коли повертаємося із вибраного фільма на сторінку

  // useEffect(() => {
  //   const value = searchParams.get('search');
  //   if (value) {
  //     setQuery(value);
  //   }
  // }, [searchParams]);

  return (
    <form className={css.form} onSubmit={handleSubmitForm}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        // value={searchParams.get('search')}
        value={query}
      />
      <button type="submit" className={css.button_search}>
        <span className="button-label">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

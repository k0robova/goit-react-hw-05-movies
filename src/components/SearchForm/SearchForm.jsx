import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    if (!evt.target.value) {
    }
    setQuery(evt.target.value.toLowerCase());
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    onSubmit(query);
    // setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmitForm}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        value={query}
      />
      <button type="submit" className={css.button_search}>
        <span className="button-label">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

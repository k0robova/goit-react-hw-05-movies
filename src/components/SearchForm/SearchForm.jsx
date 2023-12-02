// import { useState } from 'react';
import css from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  //   const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = evt => {
    setSearchParams({ search: evt.currentTarget.value.toLowerCase() });
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();

    // if (searchParams.trim() === '') {
    //   window.alert('Type something in the search field !');
    //   return;
    // }

    onSubmit({ query: searchParams.get('search') });
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
        value={searchParams.get('search')}
      />
      <button type="submit" className={css.button_search}>
        <span className="button-label">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

// !
// const SearchForm = ({ onHandleSearchFormSubmit }) => {
//   const [query, setQuery] = useState('');

//   const handleSearchName = evt => {
//     setQuery(evt.currentTarget.value.toLowerCase());
//   };

//   const handleSubmitForm = evt => {
//     evt.preventDefault();

//     if (query.trim() === '') {
//       window.alert('Type something in the search field !');
//       return;
//     }

//     onHandleSearchFormSubmit(query);
//     setQuery('');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmitForm}>
//       <input
//         className={css.input}
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search movies"
//         onChange={handleSearchName}
//         value={query}
//       />
//       <button type="submit" className={css.button_search}>
//         <span className="button-label">Search</span>
//       </button>
//     </form>
//   );
// };

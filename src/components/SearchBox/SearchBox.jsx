import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;

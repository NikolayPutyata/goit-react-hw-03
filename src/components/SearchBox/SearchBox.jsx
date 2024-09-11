const SearchBox = ({ value, onUserText }) => {
  return (
    <>
      <p>Finds contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onUserText(e.target.value)}
      />
    </>
  );
};

export default SearchBox;

export const Filter = ({ filterName, filter }) => {
  const handleInputChange = evt => {
    const value = evt.target.value;

    filterName(value);
  };

  return (
    <>
      <p>Find contacts by neme</p>
      <input
        name="filter"
        value={filter}
        type="text"
        onChange={handleInputChange}
      />
    </>
  );
};

export const ContactList = ({ onDelete, data }) => {
  return (
    <div>
      <ul>
        {data.map(con => (
          <li key={con.id}>
            {con.name}: {con.number}
            <button onClick={evt => onDelete(con.id)} type="button">
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

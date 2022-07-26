const Flexboxtwo = () => {
  const NamesList = () => (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}> {name} </li>
        ))}
      </ul>
    </div>
  );
  return <div className="bg-blue-100">My Flexbooxtwo.{NamesList}</div>;
};
export default Flexboxtwo;

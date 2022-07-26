import { useEmployedc } from "../hooks/useData";
const Flexboxone = () => {
  const { employeds, setEmployeds } = useEmployedc();
  console.log("initialEmployeds: ", employeds);

  const columns = ["Name", "specialty", "email", "address", "postalCode"];

  return (
    <div className="flex grid grid-cols-5 gap-3 p-3 justify-center m-4 md:bg-yellow-200 lg:bg-blue-200 sm:bg-green-200 xl:bg-orange-200">
      {columns.map((column, idx) => (
        <div key={idx} className="flex justify-center bg-red-600">
          {column}
        </div>
      ))}
      <div className="bg-blue-600 p-1">
        {employeds.map((employ, idx) => (
          <div
            key={idx}
            className="flex justify-center border border-indigo-600 m-1"
          >
            <div className="m-1">{employ.name}</div>
          </div>
        ))}
      </div>
      <div className="bg-green-600 p-1">B</div>
      <div className="bg-purple-600 p-1">C</div>
      <div className="bg-yellow-600 p-1">D</div>
      <div className="bg-red-300 p-1">E</div>
    </div>
  );
};
export default Flexboxone;

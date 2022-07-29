import { useEmployedc } from "../hooks/useData";
const Flexboxone = () => {
  const { employeds, setEmployeds } = useEmployedc();
  console.log("initialEmployeds: ", employeds);

  const getPropertyFromObjects = (property) => {
    return employeds.map((employ, idx) => (
      <div
        key={idx}
        className="flex justify-center border border-indigo-600 m-1"
      >
        <div className="m-1">{employ[property]}</div>
      </div>
    ));
  };

  return (
    <div className="md:bg-yellow-200 lg:bg-blue-200 sm:bg-green-200 xl:bg-orange-200">
      {columns.map((column, idx) => (
        <div key={idx} className="bg-red-600">
          {column}
        </div>
      ))}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <div className="p-1">{getPropertyFromObjects("avatar")}</div>
        <div className="p-1">{getPropertyFromObjects("name")}</div>
        <div className="p-1">{getPropertyFromObjects("email")}</div>
        <div className="p-1">{getPropertyFromObjects("address")}</div>
        <div className="p-1">{getPropertyFromObjects("postalCode")}</div>
        <div className=" p-1">{getPropertyFromObjects("specialty")}</div>
        <div className=" p-1">{getPropertyFromObjects("id")}</div>
      </div>
    </div>
  );
};
export default Flexboxone;

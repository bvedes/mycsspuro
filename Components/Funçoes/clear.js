// é uma função abstrata.
/*const Flexboxone = () => {
  // quero fazer componentes pequenos com funcionalidades.
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
      <div className="flex grid grid-cols-6 gap-3 md:bg-yellow-200 lg:bg-blue-200 sm:bg-green-200 xl:bg-orange-200 justify-center items-center">
        {(data[0]?.personalData ?? []).map(
          console.log(pers),
          (
            pers,
            idx // quando o estado inicial é assim: [ { [],[] } ]
          ) => (
            <div key={idx} className="bg-red-600">
              {pers}
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Flexboxone;
*/

/*import { useData } from "../hooks/useData";
const Flexboxon = () => {
  const [data, setData] = useData();
  console.log("data.personalData: ", data.personalData);
  console.log("data.profiles: ", data.profiles);

  return (
    <div className="md:bg-yellow-200 lg:bg-blue-200 sm:bg-green-200 xl:bg-orange-200 justify-center">
      <div className="flex bg-red-600 justify-center">
        {data?.personalData.map((pers, idx) => (
          <div key={idx} className="p-2">
            {pers}
          </div>
        ))}
      </div>

      {data?.profiles.map(
        ({ avatar, name, email, specialty, address, postalCode }, index) => (
          <div
            key={index}
            className="flex bg-green-400 justify-center space-x-4"
          >
            <div>{name}</div>
            <div>{email}</div>
          </div>
        )
      )}
    </div>
  );
};
export default Flexboxon;
*/
/*import { useData } from "../hooks/useData";
const Flexboxone = () => {
  const [data, setData] = useData();
  console.log("data.personalData: ", data.personalData);
  console.log("data.profiles: ", data.profiles);

  return (
    <div className="flex grid grid-cols-6 gap-2 md:bg-yellow-200 lg:bg-blue-200 sm:bg-green-200 xl:bg-orange-200 justify-center">
      {data?.personalData.map((pers, idx) => (
        <div key={idx} className="flex bg-red-600 justify-center">
          {pers}
        </div>
      ))}
      <div>
      {data?.profiles.map((profile, index) => {
        const { avatar, name, email, specialty, address,  postalCode } = profile
        <div key={index} className="flex bg-green-400 justify-center">
          {avatar}
        </div>
      })}
      </div>
    </div>
  );
};
export default Flexboxone;
*/

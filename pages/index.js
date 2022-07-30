import { useData } from "../hooks/useData";
const Flexboxone = () => {
  const [data, setData] = useData();
  console.log("data.personalData: ", data.personalData);
  console.log("data.profiles: ", data.profiles);

  return (
    <div className="md:bg-yellow-200 lg:bg-blue-200 sm:bg-green-200 xl:bg-orange-200 justify-center">
      <div className="flex bg-red-600 justify-between p-1">
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
            className="flex bg-green-400 justify-between space-x-4 p-1"
          >
            <div>{avatar}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{specialty}</div>
            <div>{address}</div>
            <div>{postalCode}</div>
          </div>
        )
      )}
    </div>
  );
};
export default Flexboxone;

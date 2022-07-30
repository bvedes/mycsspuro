import { useData } from "../hooks/useData";
const Flexboxone = () => {
  const [data, setData] = useData();

  return (
    <div className="flex grid grid-cols-6 gap-3 md:bg-yellow-200 lg:bg-blue-200 sm:bg-green-200 xl:bg-orange-200 justify-center items-center">
      {(data[0]?.personalData ?? []).map((pers, idx) => (
        <div key={idx} className="bg-red-600">
          {pers}
        </div>
      ))}
    </div>
  );
};
export default Flexboxone;

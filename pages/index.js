import { useData } from "../hooks/useData";
import Image from "next/image";
const Flexboxone = () => {
  const [data, setData] = useData();
  console.log("data.personalData: ", data.personalData);
  console.log("data.profiles: ", data.profiles);

  return (
    <div className="table w-full">
      <div className="table-header-group">
        <div className="table-row">
          {data?.personalData.map((pers, idx) => (
            <div key={idx} className="table-cell text-left p-2">
              {pers}
            </div>
          ))}
        </div>
      </div>
      <div className="table-row-group">
        {data?.profiles.map(
          ({ avatar, name, email, specialty, address, postalCode }, index) => (
            <div key={index} className="table-row">
              <Image
                className=""
                src={avatar}
                alt="Picture"
                width={50}
                height={50}
              />

              <div className="table-cell">{name}</div>
              <div className="table-cell">{specialty}</div>
              <div className="table-cell">{email}</div>

              <div className="table-cell">{address}</div>
              <div className="table-cell">{postalCode}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Flexboxone;

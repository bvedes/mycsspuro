import { useData } from "../hooks/useData";
import { ImPencil, ImBin } from "react-icons/im";

import Image from "next/image";
const Flexboxone = () => {
  const [data, setData] = useData();
  console.log("data.personalData: ", data.personalData);
  console.log("data.profiles: ", data.profiles);

  return (
    <>
      <div className="bg-gray-200 p-4 h-screen">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              {data?.personalData.map((pers, idx) => (
                <th
                  key={idx}
                  className="font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
                >
                  {pers}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.profiles.map(
              (
                { avatar, name, email, specialty, address, postalCode },
                index
              ) => (
                <tr
                  key={index}
                  className="bg-white lg:hover:bg-gray-200 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-4 lg:mb-0"
                >
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b lg:table-cell relative">
                    <div className="flex items-center">
                      <Image
                        className="rounded-full"
                        src={avatar}
                        alt="Picture"
                        width={30}
                        height={30}
                      />
                      <span className="ml-4 font-medium text-slate-900">
                        {name}
                      </span>
                    </div>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b  lg:table-cell relative">
                    <div className="flex items-center">{specialty}</div>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b  lg:table-cell relative">
                    <div className="flex items-center">{email}</div>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b lg:table-cell relative">
                    <div className="flex items-center">{address}</div>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b lg:table-cell relative">
                    <div className="flex items-center">{postalCode}</div>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b lg:table-cell relative">
                    <div className="flex items-center justify-between">
                      <ImPencil />
                      <ImBin />
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Flexboxone;

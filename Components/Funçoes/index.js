/*
import { useEffect, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Redirect, Title } from "../components";
import { useUser } from "../hooks/useUser";
import { Datatable } from "../components";

function Users() {
  const [users, setUsers] = useState([]);
  const { token } = useUser();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/v1/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const users = await res.json();
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };

    if (token.length > 1) {
      getUsers();
    }
  }, [token]);

  return (
    <main>
      <Title>Users Table</Title>
      <Datatable
        data={users}
        columns={[
          { propName: "avatar", type: "image" },
          { propName: "name", type: "string" },
          { propName: "email", type: "string" },
          { propName: "address", type: "string" },
        ]}
      />
    </main>
  );
}

interface User {
  _id: string;
  name: string;
  email: string;
  specialty: string;
  address: string;
  postalCode: string;
  avatar: string;
}

export default withAuthenticationRequired(Users, {
  onRedirecting: () => <Redirect />,
});
=================================================================
import * as React from "react";
import Image from "next/image";

const Cell = ({ value, type }: { value: string | boolean; type: string }) => {
  if (type === "image") {
    return <Image src={value as string} alt="profile" width={60} height={60} />;
  }
  return <td className="p-2">{value}</td>;
};

const TableHeader = ({ value }: { value: keyof User }) => {
  return <th className="border-b border-yellow-500">{value}</th>;
};

const Datatable = ({ data, columns }: { data: User[]; columns: Columns }) => {
  return (
    <div>
      <table className="table-auto w-full text-left border border-yellow-600 border-spacing-4 text-sm">
        <thead>
          {columns.map((column) => {
            return (
              <TableHeader
                key={column.propName}
                value={column.propName as keyof User}
              />
            );
          })}
        </thead>
        <tbody>
          {data.map((user: User) => {
            const keys = columns.filter((column) =>
              Object.keys(user).includes(column.propName)
            );

            return (
              <tr key={user._id}>
                {keys.map((key) => {
                  return (
                    <Cell
                      key={key.propName}
                      value={user[key.propName as keyof User]}
                      type={key.type}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

type Columns = { propName: string; type: string }[];

interface User {
  _id: string;
  name: string;
  email: string;
  specialty: string;
  address: string;
  postalCode: string;
  avatar: string;
  isAdmin: boolean;
  isContractor: boolean;
}

export default Datatable;
*/

//==============================================================================================
/*
.main {
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(./background.jpg);
  height: 100vh;
  width: 100vw;
}

.wrapper {
  padding: 25px;
  border: 0.1px solid rgb(96, 96, 96);
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  background: rgba(181, 39, 39, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.app__image {
  margin: 24px;
  max-height: 500px;
  width: auto;
  border-radius: 10px;
}
.location_searcher {
  padding: 8px;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
}
.location_input {
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #333;
  border-radius: 5px;
}

.temp {
  margin: 5px;
  font-family: Poppins;
  color: #2e2e2e;
}

*/

/*
/////////////////////////////////////////////////////////////////////
export const initialData = {
  personalData: [
    "Avatar",
    "Name",
    "Specialty",
    "email",
    "Address",
    "PostalCode",
  ],

  profiles: [
    {
      id: 1,
      name: "Emilia do Carmo",
      specialty: "Contabilista",
      email: "emilia.docarmo@gmail.com",
      address: "casa monte 900A",
      postalCode: "8150-026",
      isAdmin: false,
      isContractor: true,
      avatar:
        "https://i.pinimg.com/736x/1c/a7/2d/1ca72d14778519786ab6066b369af4bd.jpg",
    },
    {
      id: 2,
      name: "Ndimbulukeny Ngueve",
      specialty: "Enfermeira",
      email: "ndimbulukeny.ngueve@gmail.com",
      address: "casa monte 900B",
      postalCode: "8150-027",
      isAdmin: false,
      isContractor: true,
      avatar:
        "https://blog.petiko.com.br/wp-content/uploads/2015/04/gatinho-recem-nascido-cover.jpeg",
    },
    {
      id: 3,
      name: " Afonso Aurelio",
      specialty: "Pedreiro",
      email: "afonso.aurelio@gmail.com",
      address: "casa monte 900C",
      postalCode: "8150-028",
      isAdmin: false,
      isContractor: true,
      avatar:
        "https://i.pinimg.com/236x/46/3d/23/463d236dd4f22ec949ec79c0f12dd51c.jpg",
    },
    {
      id: 4,
      name: " Domingala Muenho",
      specialty: "Estilista",
      email: "domingala.muenho@gmail.com",
      address: "casa monte 900D",
      postalCode: "8150-029",
      isAdmin: false,
      isContractor: true,
      avatar:
        "https://cdn.los-animales.org/fotos/43919534_1228137-munsckin-filhotes-amaveis.jpg",
    },
    {
      id: 5,
      name: " Augusto Camaty",
      specialty: "Carpinteiro",
      email: "augusto.camaty@gmail.com",
      address: "casa monte 900E",
      postalCode: "8150-030",
      isAdmin: false,
      isContractor: true,
      avatar:
        "https://casaeconstrucao.org/wp-content/uploads/2021/08/17-filhote-de-gato-Munchkin.jpg",
    },
    {
      id: 6,
      name: " Rosa Cambembe",
      specialty: "Terapeuta",
      email: "rosa.cambembe@gmail.com",
      address: "casa monte 900F",
      postalCode: "8150-031",
      isAdmin: false,
      isContractor: true,
      avatar:
        "https://i.pinimg.com/236x/cb/44/f9/cb44f97292e5b62c2eba9d6e1dbd5c8f.jpg",
    },
  ],
};
*/ /////////////////////////////////////////////////////////////////////////////////

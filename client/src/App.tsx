import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST_WITH_BELONGINGS_QUERY } from "./queries/queries";
import logo from "./logo.svg";
import "./App.css";

type TUserListWithBelongings = {
  id: string;
  name: string;
  belongings: [
    {
      id: string;
      name: string;
    }
  ];
};

type TUserListWithBelongingsData = {
  users: TUserListWithBelongings[];
};

const App = () => {
  const { loading, data } = useQuery<TUserListWithBelongingsData>(GET_USER_LIST_WITH_BELONGINGS_QUERY, {});

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>users</p>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ul>
            {data &&
              data.users.map((user, i) => (
                <Fragment key={user.id}>
                  <li>{user.name}</li>
                  <ul>{user && user.belongings.map((belonging, i) => <li key={belonging.id}>{belonging.name}</li>)}</ul>
                </Fragment>
              ))}
          </ul>
        )}
      </header>
    </div>
  );
};

export default App;

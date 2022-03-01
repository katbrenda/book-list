import axios from "axios";
import React, { useState } from "react";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [users, setUsers] = useState([{ id: 1, name: "jondoe" }]);
  const [error, setError] = useState(null);
  const [demoState, setDemoState] = useState(
    "hi I am demoState from the data provider "
  );

  // async await is cleaner than .then.catch
  // es8 feature
  const getUsers = async () => {
    // this function will pause here and wait
    try {
      let res = await axios.get("https://reqres.in/api/users?delay=1");
      setUsers(res.data.data);
    } catch (err) {
      setError("error occured");
    }
  };

  //   const getUsersOld = () => {
  //     axios
  //       .get("https://reqres.in/ap/users?delay=1")
  //       .then((res) => {
  //         setUsers(res.data.data);
  //       })
  //       .catch((err) => {
  //         setError("Error occurred");
  //       });
  //   };

  // add
  const addUser = (newUserFromForm) => {
    let newUsers = [...users, newUserFromForm];
    setUsers(newUsers);
  };

  //update
  const updateUser = (updateUserFromForm) => {
    let updateUsers = users.map((u) =>
      u.id === updateUserFromForm.id ? updateUserFromForm : u
    );
    setUsers(updateUsers);
  };
  // delete
  const deleteUser = (idOfUserClicked) => {
    let filteredUsers = users.filter((user) => user.id !== idOfUserClicked);
    setUsers(filteredUsers);
  };

  // create an object that will be 'global state'
  const dataProviderThing = {
    users,
    demoState,
    x: 1,
    setDemoState,
    addUser,
    updateUser,
    deleteUser,
    getUsers,
    error,
  };
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
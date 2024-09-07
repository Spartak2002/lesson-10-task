import './App.css'
import { useState } from 'react'
import { AddUser } from './components/add-user'
import { UserList } from './components/userlist'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [users, setUsers] = useState([

    {
      id: 101,
      FirstName: "John",
      LastName: "Doe",
      logIn: "johndoe@mail.ru",
      Age: 25
    },

    {
      id: 102,
      FirstName: "Jane",
      LastName: "Doe",
      logIn: "janedoe@mail.ru",
      Age: 30
    },

    {
      id: 103,
      FirstName: "Bob",
      LastName: "Smith",
      logIn: "bobsmith@mail.ru",
      Age: 40
    },

  ])

  const notify = () => toast("User added");




  const handleAdd = user => {
    setUsers([...users,{...user,id:Date.now()}])
    notify();

  }

  return <>
    <AddUser
      onAdd={handleAdd}
    />

    <UserList
      users={users}
    />

  </>

}
import React, { useState } from 'react';
import Header from './components/Header';
import CDetails from './components/CDetails';
import AddUserForm from './components/AddUserForm';

const App = () => {

  const [showAddData, setShowAddData] = useState(false)

  const [datas, setDatas] = useState([

    {
      id: 1,
      sName: 'Bio 102',
      cTime: 'Monday 1-2',
      exams: 'Tuesday 7-8',
      hWork: 'Monday 3:00 pm',
      reminder: true,
    },
    {
      id: 2,
      sName: 'Math 101',
      cTime: 'Monday 3-4 pm',
      exams: 'alternative Tuesday time TBD',
      hWork: 'Wednesday 11:59pm',
      reminder: true,
    }
  ])

  //Add Task
  const addUserForm = (data) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newData = { id, ...data }
    setDatas([...datas, newData])
  }

    //Delete class
    const deleteClass = (id) => {
      setDatas(datas.filter((data) => data.id !== id))
    }

    //Toggle reminder
    const toggleReminder = (id) => {
      setDatas(datas.map((data) => data.id === id ? { ...data, reminder: !data.reminder } : data))
    }

    return (
      <div className="container">
        <Header title="Subject Calendar" onAdd={() => setShowAddData(!showAddData)} showAdd={showAddData} />
        <div className="flex-row">
          <div className="flex-large">
            {datas.length > 0 ? <CDetails datas={datas} onDelete={deleteClass} onToggle={toggleReminder} /> : 'No Subject'}
          </div>
        </div>
        {showAddData && <AddUserForm onAdd={addUserForm} />}
      </div>
    );
  }


  export default App;

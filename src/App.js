import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CDetails from './components/CDetails';
import AddUserForm from './components/AddUserForm';

const App = () => {

  const [showAddData, setShowAddData] = useState(false)

  const [datas, setDatas] = useState([])
  useEffect(() => {
    const getDatas = async () => {
      const datasFromServer = await fetchDatas()
      setDatas(datasFromServer)
    }
    getDatas()
  }, [])

  //Fetch Datas
    const fetchDatas = async () => {
    const res = await fetch('http://localhost:5000/datas')
    const data = await res.json()
    return data
  }

   //Fetch Data
   const fetchData = async (id) => {
    const res = await fetch(`http://localhost:5000/datas/${id}`)
    const data = await res.json()
    return data
  }

  //Add Task
  const addUserForm = async (data) => {
    //const id = Math.floor(Math.random() * 10000) + 1
    //const newData = { id, ...data }
    //setDatas([...datas, newData])
    const res = await fetch("http://localhost:5000/datas", 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const dataNew = await res.json()
    setDatas([...datas, dataNew])
  }

  //Delete class
  const deleteClass = async (id) => {
    await fetch(`http://localhost:5000/datas/${id}`,
     { method: 'DELETE', }
     )

    setDatas(datas.filter((data) => data.id !== id))
  }

  //Toggle reminder
  const toggleReminder = async(id) => {
    const dataToToggle = await fetchData(id)
    const updData = {...dataToToggle, reminder: !dataToToggle.reminder}

    const res = await fetch(`http://localhost:5000/datas/${id}`, 
    { 
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(updData)
    })
    const dataR=await res.json()

    setDatas(datas.map((data) => data.id === id ? { ...data, reminder: dataR.reminder } : data))
  }

  return (
    <div className="container">
      <Header title="Subject Calender" onAdd={() => setShowAddData(!showAddData)} showAdd={showAddData} />
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

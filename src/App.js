import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [nameCreate, setNameCreate] = useState('')
  const [ageCreate, setAgeCreate] = useState()

  // untuk trigger useEffect getData
  // const [dataGenerated, setDataGenerated] = useState(0)

  const getData = async () => {
    await axios({
      method: 'get',
      url: 'http://localhost:7777/employee',
    })
      .then(function (response) {
        console.log(response.data.data)
        setData(response.data.data)
      })
      .catch(function (error) {
        alert(error.message)
      });
  }

  const handleGenerateData = () => {
    console.log("clicked")
    axios({
      method: 'post',
      url: 'http://localhost:7777/product',
      data: {
        name: nameCreate,
        age: ageCreate
      }
    })
      .then(function (response) {
        setAgeCreate()
        setNameCreate('')
        getData()

        // untuk mereload halaman 
        // window.location.reload()
      });
  }

  const handleEdit = (id) => {
    console.log('edit id: ' + id)
    axios({
      method: 'put',
      url: 'http://localhost:7777/employee/' + id,
      data: {
        name: 'Bagas (edit)',
        age: 1
      }
    })
      .then(function () {
        getData()
      });
  }

  const handleDelete = (id) => {
    console.log('delete id: ' + id)
    if (window.confirm("Sure delete id: " + id + " ????????")) {
      axios({
        method: 'post',
        url: 'http://localhost:7777/employee/delete/' + id,
      })
        .then(function () {
          getData()
        });
    }
  }

  useEffect(() => {
    getData()

    // taroh dataGenerated di dalam array di bawah sini
  }, [])

  return (
    <>
      <input value={nameCreate} onChange={(e) => setNameCreate(e.target.value)} type="text" />
      <input value={ageCreate} onChange={(e) => setAgeCreate(e.target.value)} type="number" />
      <br />
      <button onClick={handleGenerateData}>Generate Data | now: {data.length}</button>
      {data.map((item, index) => {
        return <ul key={index}>
          <p>{item.id}</p>
          <li>
            {item.name}
          </li>
          <li>
            {item.age}
          </li>
          {/* 
            (event) => handleDelete(event) 
            handleDelete
            */}
          <button onClick={() => handleEdit(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete ID: {item.id}</button>
        </ul>
      })}
    </>
  );
}

export default App;

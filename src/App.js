import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("")

  useEffect(()=>{
    try {
      axios({
        method: "get",
        url: "http://localhost:3000/datas",
      }).then((response)=>{
        setData(response.data)
      })
    } catch (error) {
      console.log(error);
    }
  },[])

  console.log(data);

  return (
    <div className="App">
      { data && data.map((item, index)=>{
        return(
            <div key={index}>
              <h1>{item.title}</h1>
              <img src={item.image} alt="" />
            </div>
        )
      }) }
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export default function App() {

const[nomes,setNomes] = useState([])

 

  useEffect(() => {
  
axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
  console.log(res.data)
  setNomes(res.data);
})

  });

  return (
    <div className="tempo">
      {
  nomes.map(function(data){
return(
  <div> 
  <h2>{data.name} | {data.email}</h2>
  </div>
)
  })
      }
    </div>
  );
}

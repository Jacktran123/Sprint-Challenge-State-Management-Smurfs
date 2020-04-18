import React,{useState,useEffect} from "react";
import axios from 'axios';
import {SmurfContext} from '../context/SmurfContext';
import SmurfDisplay from './SmurfDisplay';
import SmurfForm from './SmurfForm';

import "./App.css";




  const App=()=> {
    
    const [smurfData,setSmurfData]=useState([]);
   
    useEffect(()=>{
      axios
      .get('http://localhost:3333/smurfs')
      .then(res=> 
        {
        setSmurfData(res.data);
        })
      .catch(error=> console.error(error))
    },[smurfData])

    return (
      <SmurfContext.Provider value={{smurfData}}>
      <div className="App">
        <h1 style={{color: 'lightblue', fontSize: '3rem', fontFamily:'Lobster, cursive'}}>Welcome to the village</h1>
        <div className='Wrapper'>
            <SmurfForm />
            <SmurfDisplay />
            
        </div>
      </div>
      </SmurfContext.Provider>
    );
  
}

export default App;

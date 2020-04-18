import React,{useContext} from 'react';
import {SmurfContext} from '../context/SmurfContext';

const SmurfDisplay=()=>{
    const {smurfData} = useContext(SmurfContext);
    
    return(
        
        <div className='smurfContainer'>
        {smurfData.map(each=>
            <div key={each.id} className='smurfCard'>
                <h1>Name: {each.name}</h1>
                <p> Height: {each.height}</p>
                <p> Age: {each.age}</p>
                <img src='https://www.syfy.com/sites/syfy/files/styles/1200x680_hero/public/2020/04/brainy-smurf.jpg' width='200px' height='100px' alt=''/>
            </div>
        
            
            )}
        </div>
            
        
    );
}

export default SmurfDisplay;
import React, {useState} from 'react';
import axios from 'axios';

const SmurfForm=()=>{
    
    const [smurfInfo,setSmurfInfo]=useState({name:'', height:'',age:'', id: Date.now()});
    console.log(smurfInfo);

    const submitForm=(e)=>{
        e.preventDefault();
        axios
        .post('http://localhost:3333/smurfs', smurfInfo)
        .then(res=> alert(res))
        .catch(error=>alert(error))
    }
    return(
        <div className='smurf-form'>
            <h1> Add your favorite smurf </h1>
            <form >
                <label > Name</label>
                <input type='textarea' onChange={(e)=> setSmurfInfo({...smurfInfo,name: e.target.value})}/>
                <label> Height</label>
                <input type='textarea'  onChange={(e)=> setSmurfInfo({...smurfInfo,height: e.target.value})} />
                <label> Age</label>
                <input type='textarea'  onChange={(e)=> setSmurfInfo({...smurfInfo,age: e.target.value})} />
                <button className='create' type='submit' onClick={e=>submitForm(e)} > Create </button>

            </form>
        </div>
    );
}

export default SmurfForm;
import { HomeNav } from "../HomeNav/HomeNav";
import {useState} from 'react';
import './home.css'
import axios from "axios";
export const Home=()=>{
  
    const [info,getInfo]=useState({
      location:"",
      date:"",
      people:""
    })
    // console.log("Info is ",info);


    const handledata=(e)=>{
      // console.log(e.target.value,e.target.id);
      const {id,value}=e.target;
      // console.log(e);
      console.log(id,value);
      getInfo({...info,[id]:value});

    }
    const submitData=(e)=>{
      e.preventDefault();
      axios.post(' http://localhost:8080/hotel',info);
      getInfo({
        location:"",
        date:"",
        people:""
      })

    }
    return(
     <>
     <HomeNav></HomeNav>
     <form action="" id="form" onSubmit={submitData}>
       <input type="text" id="location" value={info.location} required placeholder="Where you want to go" onChange={handledata}/>
       <input type="date" id="date" value={info.date} onChange={handledata} />
       <input type="number" id="people" value={info.people} placeholder="select number of people" onChange={handledata}/>
      <button onClick={()=>{
        alert("redirect to you in search")
      }}>Search</button>
     </form>
    
     </>
      
    )
}
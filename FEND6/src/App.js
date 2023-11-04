import { useState,useEffect } from "react";
import axios from "axios";

export const App = () => {
  const [data,setData]=useState([]);

  const getData=async()=>{
    try
    {
      const response=await axios.get("https://65313b1c4d4c2e3f333caeca.mockapi.io/api/v1/emp")
      if(response) setData(response.data);
      else setData("No Records Found");
    }catch(error)
    {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    getData();
  },[])
 
  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th >
              ENAME
            </th>
            <th >
              EMAIL
            </th>
            <th >
              EMOBILE
            </th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((eachData,index)=>{
            return(             
                <tr key={index}>
                  <td>{eachData.ename}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.emobile}</td>
                </tr>             
            );
          })
        }
        </tbody>
      </table>
    </div>
  )
}
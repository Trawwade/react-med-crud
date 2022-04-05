
import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";
import { Link } from 'react-router-dom'
const Mainpage = ({data}) => {
  
 console.log(data)
 
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>cardnumber</th>
            <th>phone</th>
            <th>actions</th>
          </tr>
        </thead>

         <tbody>
          
           {data.map((patient) => {
            const id = patient.key
          console.log(patient.key)
          
            
            return (
              
              <tr key={patient.key}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.cardNumber}</td>
                <td>{patient.phone}</td>
                <td>
                    <Link  to={`./edit/${id}`} ><button>edit</button></Link>  
                    <Link  to={`/view/${patient.key}`} ><button  >view</button></Link>  
                  </td>  
                </tr>  
              
              );  
                         })}  
          </tbody>   
      </table>
    </>
  );
};

export default Mainpage;

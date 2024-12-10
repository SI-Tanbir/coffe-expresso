
import React, { useEffect, useState } from 'react'
const Users = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://coffie-api.vercel.app/list")
        .then((res) => res.json())
        .then((d) => setData(d))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    const handleDelete = (id) => {
      fetch(`https://coffie-api.vercel.app/delete/${id}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then(() => {
          
         
          setData((prevdata) => prevdata.filter((item) => item._id !== id));
        })
        .catch((error) => console.error("Error deleting item:", error));
    };
    

    
  return (
    <div>

<p className='text-5xl'>list of user:{data?.length}</p>


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>password</th>
        <th>Action</th>
      </tr>
    </thead>
   
      <tbody>
      {/* row 1 */}
     {data.map(d=>   
         <tr key={d._id} className="bg-base-200">
        <th>1</th>
        <td>{d.email}</td>
        <td>{d.password}</td>
        <td><button onClick={()=>handleDelete(d._id)} className='btn bg-red-600'>X</button></td>
      </tr>)}
        </tbody>
  </table>
</div>



    </div>
  )
}

export default Users
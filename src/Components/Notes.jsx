import React, { useState } from 'react'

const Notes = () => {
    const[notes,setNotes] = useState(
        JSON.parse(window.localStorage.getItem("notes",)));
    const handleChange =(e)=>{
        setNotes(e.target.value)
         window.localStorage.setItem("notes",JSON.stringify(e.target.value));
    }
  return (
    <div className='Notes' style={{ gridArea:'c3' }} >
        <h2>All Notes</h2>
        <div>
            
        <textarea value={notes} onChange={handleChange} name="" id="" cols="30" rows="10"  ></textarea>
        </div>

    </div>
  )
}

export default Notes
import React from 'react'

export default function About2() {
  let arr=["html","css","js"]
  return (
    <div>
      <label>Name</label>
     <input onChange={(w)=>console.log(w.target.value)}></input>
     <button >submit</button>
     <p>{arr}</p>
     
    </div>
  )
}

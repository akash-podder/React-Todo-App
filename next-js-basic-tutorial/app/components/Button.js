import React from 'react'

export default function Button() {
  return (
    <div>
        <button
            className="bg-green-500 rounded-sm px-4 py-1"
            onClick={()=>console.log("Click to get Mission")}>
          Click Here
        </button>
    </div>
  )
}

import React, { useState } from 'react'
import { CiTrash } from "react-icons/ci";

function TodoCard({title,id,deleteTodo}) {
  

  function deletefunc() {
    deleteTodo(id)
  }

  return (
    <div className=' mt-3 rounded-xl box-border p-4 border-t-2 border-green-500 flex items-center justify-between shadow-xl'>
        <h2 className="text-neutral-600">{title}</h2>
        <button onClick={deletefunc} className='text-neutral-600 text-2xl font-black hover:text-red-700'><CiTrash /></button>
    </div>
  )
}

export default TodoCard

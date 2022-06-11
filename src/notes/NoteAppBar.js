import React from 'react'

export const NoteAppBar = () => {
  return (
    <div className='notes__appbar'>
        <span>24 de mayo 2022</span>
        <div>
            <button className='btn btn-primary'>
                picture
            </button>
            <button className='btn btn-primary'>
                save
            </button>
        </div>
    </div>
  )
}

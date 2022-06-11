import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NoteAppBar/>
        <div className='notes_content'>
            <input
              type='text'
              placeholder='some awesone title'
              className='notes__title-input'
              autoComplete='off'
              />
            <textarea
            placeholder='what happened today'
            autoComplete='off'
            className='notes__textarea'
            ></textarea>

            <div className='notes__image'>
              <img 
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"  
                alt="img"
                />
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Character } from '../pages/Character';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            
            <Route path="character" element={<Character /> }/>
                  

        </Routes>
    </>
  )
}

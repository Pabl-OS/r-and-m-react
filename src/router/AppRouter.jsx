import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Character } from '../pages/Character';
import { Espisodies } from '../pages/Espisodies';
import { Locations } from '../pages/Locations';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            
            <Route exact  path="/character" element={<Character /> }/>
            <Route exact  path="/episodies" element={<Espisodies /> }/>
            <Route exact  path="/locations" element={<Locations /> }/>
            




            {/* Default route navigate => CHARACTER */}
            <Route path="*" element={<Navigate to="/character"  />}
    />

        </Routes>
    </>
  )
}

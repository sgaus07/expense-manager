import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Components/Header/Header';
import Registration from '../Components/Registration/Registration';



export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/registration' element = {<Registration/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import UserList from './component/UserLIst'
import UserProfile from './component/UserProfile';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() { 
  return (
    <>    
    <Routes>
      <Route path="/" element={<UserList/>} />
      <Route path="/user/:username" element={<UserProfile />} />
    </Routes>  
    <GlobalStyle />
   </>
  );
}

export default App;

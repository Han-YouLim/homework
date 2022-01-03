import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Users from './Users';
// import UserListTemplate from './component/UserListTemplate'
// import UserList from './component/UserLIst'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() { 
  return (
    <>
    <GlobalStyle />
    <Users />
    </>
  );
}

export default App;

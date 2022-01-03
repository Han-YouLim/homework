import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import UserList from './component/UserLIst'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const UserListTemplateBlock= styled.div`
width: 1024px;
height: 1000px;
position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
background: white;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

function App() { 
  return (
    <>
    <GlobalStyle />
    <UserListTemplateBlock>
     <UserList />  
    </UserListTemplateBlock>
   </>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import styled,  { css,createGlobalStyle } from 'styled-components';
import { AiOutlineBulb } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';
import SearchedUser from './component/SearchedUser';
import UserList from './component/UserLIst'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const CircleButton = styled.button`
background: #38d9a9;
&:hover {
  background: #63e6be;
}
&:active {
  background: #30c997;
}
z-index: 5;
cursor: pointer;
width: 40px;
height: 40px;
display: block;
align-items: center;
justify-content: center;
font-size: 60px;
position: absolute;
left: 50%;
bottom: 0px;
transform: translate(-50%, 50%);
color: white;
border-radius: 50%;
border: none;
outline: none;
display: flex;
align-items: center;
margin-bottom: 8px;
transition: 0.125s all ease-in;
${props =>
  css`
    &:hover {
      background: #ff8787;
    }
  `}
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

const UserListSearchBlock= styled.div`
width: 800px;
height: 60px;
position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
background: white;
border-radius: 12px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 20px;
margin-bottom: 10px;
display: flex;
flex-direction: column;
padding: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function App() { 
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);

  return (
    <>    
    <Routes>
      <Route path="/" exact={true} componemt={<UserList />} />
      <Route path="/user" componemt={<SearchedUser />} />
    </Routes>

    <GlobalStyle />
    <UserListTemplateBlock>    
      <UserListSearchBlock>
      <Input autoFocus 
        placeholder="검색할 유저명을 입력 후, Enter 를 누르세요:)" 
        onChange={onChange}
        value={value}/>
        <Link to="/user"><CircleButton ><AiOutlineBulb /></CircleButton></Link>
    </UserListSearchBlock>
     <UserList />  
    </UserListTemplateBlock>
   
   </>
  );
}

export default App;

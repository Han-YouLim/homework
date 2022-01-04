import React, { useReducer, createContext, useState, useEffect, useContext, useRef }from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserListBlock = styled.div`
  flex: 1; /*자신이 차지 할 수 있는 영역을 꽉 채우도록*/
  padding: 4px;
  padding-bottom: 40px;
  overflow-y: auto; /*내용이 넘칠때만 가로 스크롤바 표시*/
  /*background: gray; 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

const UserItemBlock = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  border: 2px solid #ced4da;
  padding-top: 8px;
  padding-bottom: 8px;
  &:hover {
    background: #38d9a9;
  }
`;
function SearchedUser ({props}){
    return (
      <div>
        <h1>SearchedUser</h1>
        <p>SearchedUser페이지입니다.</p>
      </div>
    );
}
  
export default SearchedUser;
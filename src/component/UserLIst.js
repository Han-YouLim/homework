import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserItem from './UserItem';

const UserListBlock = styled.div`
  flex: 1; /*자신이 차지 할 수 있는 영역을 꽉 채우도록*/
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; /*내용이 넘칠때만 가로 스크롤바 표시*/
  /*background: gray; 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function UserList() {
  return( 
  <UserListBlock>
    <UserItem text="프로젝트 생성하기" />

  </UserListBlock>
  );
}

export default UserList;
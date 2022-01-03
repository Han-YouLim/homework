import React, { useReducer, createContext, useState, useEffect, useContext, useRef }from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UserListBlock = styled.div`
  flex: 1; /*자신이 차지 할 수 있는 영역을 꽉 채우도록*/
  padding: 4px;
  padding-bottom: 48px;
  overflow-y: auto; /*내용이 넘칠때만 가로 스크롤바 표시*/
  /*background: gray; 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

const UserItemBlock = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  border: 2px solid #ced4da;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    background: #38d9a9;
  }
`;

//item
//width:(1024-24)//2=500
//height:(1000-20)//5=176

function UserList() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //github api에서 users GET
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://api.github.com/users?per_page=10'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
}, []);
if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;
if (!users) return null;
return (
  <UserListBlock>
      {users.map(user => (
        <UserItemBlock>
          <h1>
            {user.id}.
          </h1>
          &nbsp;&nbsp;&nbsp;
          <h2>
            {user.login}
          </h2>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>
            ({user.url})
          </p>
        </UserItemBlock> 
      ))}
  </UserListBlock>
  );
}

export default UserList;
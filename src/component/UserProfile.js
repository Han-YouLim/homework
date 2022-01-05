import React, { useState, useEffect}from 'react';
import styled,{ createGlobalStyle  } from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserListTemplateBlock= styled.div`
width: 1024px;
height: 1300px;
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

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const UserItemBlock = styled.div`
  height: 200px;
  margin: 8px;
  display: flex;
  align-items: center;
  border: 2px solid #ced4da;
  border-radius: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  &:hover {
    background: #38d9a9;
  }
`;

function UserProfile(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const params = useParams();
    const username = params.username;
    console.log(username);

    useEffect(() => {
        //github api에서 userProfile GET
        const fetchUserProfile= async () => {
          try {
            setError(null);
            setUser(null);
            setLoading(true);
            const response = await axios.get(
              `https://api.github.com/users/${username}`
            );
            setUser(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
        fetchUserProfile();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!user) return null;
    return(
        <>
        <GlobalStyle />
        <UserListTemplateBlock>
            <UserItemBlock >
                <h1>
                    유저아이디: &nbsp; {user.id}
                </h1>
                <br />
                <h2>
                    유저명: &nbsp; {user.login}
                </h2>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p>
                    ({user.url})
                </p>
                &nbsp;&nbsp;&nbsp;
            </UserItemBlock>
        </UserListTemplateBlock>
    </>
    )
} 

export default UserProfile;


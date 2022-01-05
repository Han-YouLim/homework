import React, { useState, useEffect}from 'react';
import styled,{ createGlobalStyle  } from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

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

const MoreButton = styled.button`
  background: #38d9a9;
  border: none;
  cursor: pointer;
  z-index: 5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

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
  border-radius: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  &:hover {
    background: #e9ecef;
  }
`;


export default  function SearchUser(){
    const [searchedUser, setSearchedUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const params = useParams();
    const targetname = params.username;     //찾고자 하는 유저
    const q=`q=${targetname}&per_page=10&page=1`

    useEffect(() => {
        //github api에서 userProfile GET
        const fetchSearchedUsers= async () => {
          try {
            setError(null);
            setSearchedUser(null);
            setLoading(true);
            const response = await axios.get(
              `https://api.github.com/search/users?${q}`
            );
            setSearchedUser(response.data); // 데이터는 response.data 안에 들어있습니다.
            console.log(response.data);
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
        fetchSearchedUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!searchedUser) return <div>불러오는 과정을 실패했습니다</div>;

    return(
        <>
        <GlobalStyle />
        <UserListTemplateBlock>
            <UserListBlock>
            {searchedUser.items.map(user => (
                    <Link to={"/user/"+user.login}>  
                        <UserItemBlock key={user.id} >
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
                            &nbsp;&nbsp;&nbsp;
                            <Link to={"/user/"+user.login}><MoreButton><MdAdd /></MoreButton></Link>
                        </UserItemBlock>
                    </Link>
                ))}
            </UserListBlock>
        </UserListTemplateBlock>
        </>
    );
}
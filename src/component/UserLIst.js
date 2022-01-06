import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import axios from "axios"
import { AiOutlineBulb } from "react-icons/ai"
import { Link } from "react-router-dom"
import { MdAdd } from "react-icons/md"
import {useRecoilState} from "recoil";
import {recoilSeaerchWord, recoilUsers} from "../Recoils/RecoilAtoms";
//메인 페이지

const UserListTemplateBlock = styled.div`
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
`

const UserListBlock = styled.div`
    flex: 1; /*자신이 차지 할 수 있는 영역을 꽉 채우도록*/
    padding: 4px;
    padding-bottom: 40px;
    overflow-y: auto; /*내용이 넘칠때만 가로 스크롤바 표시*/
    /*background: gray; 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`

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
`

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
    ${(props) =>
        css`
            &:hover {
                background: #ff8787;
            }
        `}
`

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`

const UserListSearchBlock = styled.div`
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
`

const MoreButton = styled.button`
    background: #38d9a9;
    border: none;
    cursor: pointer;
    z-index: 5;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    align-items: center;
`


function UserList() {
    const [users, setUsers] = useRecoilState(recoilUsers)
    const [value, setValue] = useRecoilState(recoilSeaerchWord)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const fetchUsers = () => {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setUsers([])
        const q = `search/users?q=${value}&per_page=10&page=1`
        const listq = "users?per_page=10"
        var real = "https://api.github.com/"
        var UserLi = null

        //api에 요청
        if (value == "") {
            real = real + listq
        } else {
            real = real + q
        }
        axios
            .get(real)
            .then((res) => {
                if (value == "") {
                    UserLi = res.data
                } else {
                    UserLi = res.data.items
                }
                console.log("가져온 값" + JSON.stringify(UserLi))
                setUsers(UserLi)
            }).catch()}

    return (
        <UserListTemplateBlock>
            <UserListSearchBlock>
                <Input
                    placeholder="검색할 유저명을 입력 후, 버튼을 누르세요:)"
                    onChange={onChange}
                    value={value}
                />
                <div onClick={(e) => fetchUsers()}>
                    <CircleButton>
                        <AiOutlineBulb />
                    </CircleButton>
                </div>
            </UserListSearchBlock>
            <UserListBlock>
                {users &&
                    users.map((user) => (
                        <Link
                            id={"/user/" + user.login}
                            to={"/user/" + user.login}>
                            <UserItemBlock key={user.id}>
                                <h1>{user.id}.</h1>
                                &nbsp;&nbsp;&nbsp;
                                <h2>{user.login}</h2>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <p>({user.url})</p>
                                &nbsp;&nbsp;&nbsp;
                                <Link to={"/user/"+user.login}><MoreButton><MdAdd /></MoreButton></Link>
                            </UserItemBlock>
                        </Link>
                    ))}
            </UserListBlock>
        </UserListTemplateBlock>
    )
}

export default UserList

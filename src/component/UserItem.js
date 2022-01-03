import React, { useState, useEffect }from 'react';
import styled, { css } from 'styled-components';
import { MdDone } from 'react-icons/md';


const UserItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    background: #339af0;
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 2px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  color: #38d9a9;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;

function UserItem({ text }) {
  return (
    <UserItemBlock>
      <CheckCircle ><MdDone /></CheckCircle>
      <Text >{text}</Text>
    </UserItemBlock>
  );
}

export default UserItem;
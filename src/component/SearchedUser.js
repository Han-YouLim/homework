import React, { useReducer, createContext, useState, useEffect, useContext, useRef }from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SearchedUser= () => {
    return (
      <div>
        <h1>SearchedUser</h1>
        <p>SearchedUser페이지입니다.</p>
      </div>
    );
  };
  
export default SearchedUser;
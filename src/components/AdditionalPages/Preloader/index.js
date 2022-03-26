import { useSelector } from 'react-redux';
import { loadingSelector } from '../../context/ducks/posts/selectors';
import { connect } from 'react-redux';
import './style.css';
import { useState } from 'react';
import React, {Component} from 'react';
import Spiner from './pictures/spiner.gif'
const Preloader = (props) => {
  const isPostsLoading = useSelector(loadingSelector);
  const loading = isPostsLoading;
    return (
        <div className='loading'>
          <img src={Spiner} alt="loading img"/>
          <h3>Loading...</h3>
          </div>
    )
};
/*
const Preloader = () => {
  const isPostsLoading = useSelector(isLoadingSelector);
  const isLoading = isPostsLoading;

    if(!isLoading) return null;
    return (
        <div className='loading'> Loading...</div>
    )
};*/

export default Preloader;

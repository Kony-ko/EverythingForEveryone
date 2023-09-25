import React from 'react';
import Portada from '../../images/inicio.jpg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home'>
        <Link to='/'><h1>Home</h1></Link>
        <Link to='/products'><h1>Products</h1></Link>
        <img src={Portada} alt='home'/>
    </div>
  )
}

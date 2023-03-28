import React from 'react';
import { Link } from 'react-router-dom';
import pawPrint from '../assets/pawPrint.svg';

function PageHeader () {
  return (
    <Link to='/' className='logo'>
      <h1 className='page-header'><span><img src={pawPrint}/></span> Pawesome Ratings</h1>
    </Link>
  )
}

export default PageHeader;
import React from 'react';
import pawPrint from '../assets/pawPrint.svg';

function PageHeader () {
  return (
    <h1 className='page-header'><span><img src={pawPrint}/></span> Pawesome Ratings</h1>
  )
}

export default PageHeader;
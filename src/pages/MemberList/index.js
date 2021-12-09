import React, { Fragment } from 'react';
import { Footer, Member, Navbar } from '../../components';
import list from '../../assets/list.svg';

const MemberList = () => {
  return (
    <Fragment>
      <Navbar/>
      <main className="flex-grow-1 container my-4">
        <div className="d-flex align-items-center">
          <img src={list} alt="List" width={40} />
          <h1 className="mx-3 fw-bold">List of Member</h1>
        </div>
        <Member/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default MemberList;
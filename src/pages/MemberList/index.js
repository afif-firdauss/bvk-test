import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Footer, Member, Navbar } from '../../components';
import list from '../../assets/list.svg';

const MemberList = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Navbar/>
      <main className="flex-grow-1 container my-4">
        <div className="d-flex align-items-center">
          <img src={list} alt="List" width={40} />
          <h1 className="mx-3 fw-bold">List of Member</h1>
        </div>
        <Member/>
        <Button className="btn button-primary mt-5" title="Add New Member" onClick={() => navigate('/add-member')} />
      </main>
      <Footer/>
    </Fragment>
  )
}

export default MemberList;
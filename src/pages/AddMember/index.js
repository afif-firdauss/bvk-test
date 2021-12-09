import React, { Fragment } from 'react';
import { Footer, CreateMember, Navbar } from '../../components';
import add from '../../assets/add.svg';

const AddMember = () => {
  return (
    <Fragment>
      <Navbar/>
      <main className="flex-grow-1 container my-4">
        <div className="d-flex align-items-center">
          <img src={add} alt="List" width={40} />
          <h1 className="mx-3 fw-bold">Add New Member</h1>
        </div>
        <CreateMember/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default AddMember;
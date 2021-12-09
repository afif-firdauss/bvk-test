
import React, {Fragment} from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Navbar, MemberDetails } from '../../components';
import detail from '../../assets/detail.svg'

const MemberDetail = () => {
  let { id } = useParams();

  return (
    <Fragment>
      <Navbar/>
      <main className="flex-grow-1 container my-4">
        <div className="d-flex align-items-center">
          <img src={detail} alt="List" width={40} />
          <h1 className="mx-3 fw-bold">Member Details</h1>
        </div>
        <MemberDetails/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default MemberDetail;
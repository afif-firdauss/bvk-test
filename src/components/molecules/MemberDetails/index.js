import React from 'react';

const MemberDetails = () => {
  return (
    <div className="pt-5 pb-4 d-flex flex-row align-items-end">
      <img src="https://via.placeholder.com/250" alt="member"/>
      <div className="mx-3">
        <h3 className="fw-bold">John Doe</h3>
        <p>Manager</p>
      </div>
    </div>
  )
}

export default MemberDetails;
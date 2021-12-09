import React from 'react';
import UploadPicture from '../UploadPicture';
import ModalSuccess from '../ModalSuccess'
import { Button, Gap, Input } from '../../atoms';
import Dropdown from '../Dropdown';
import styles from './CreateMember.module.css'

const CreateMember = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [name, setName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [reportTo, setReportTo] = React.useState('');

  return (
    <>
      <div className={`${styles.container} "py-4"`}>
        <UploadPicture/>
        <Input
          label="Name"
          placeholder="ex: John Doe"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Dropdown 
          label="Position"
          options={["President", "CEO", "CTO", "Senior Developer", "Junior Developer", "Intern"]}
        />
        <Dropdown 
          label="Report To"
          options={["President", "CEO", "CTO", "Senior Developer", "Junior Developer", "Intern"]}
        />
        <Gap height={25}/>
        <Button title="Add Member" type="submit" onClick={() => setModalShow(true)}/>
      </div>

      <ModalSuccess
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default CreateMember;
import {React, useEffect, useState }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import 'bootstrap/dist/css/bootstrap.css';*/

export const EditTask = ({modal,toggle,taskList,setTaskList,taskObj,setModal,index}) => {
    const [taskName,setTaskName] = useState('');
    const [description,setDescription] = useState('');
    const [id,setId] = useState();
    const [checked, setChecked] = useState();

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setId(taskObj.id)
        setChecked(taskObj.Checked)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault()
        let tempObj = {}
        tempObj['id'] = id
        tempObj['Name'] = taskName
        tempObj['Description']= description
        tempObj['Checked']= checked
        let tempList = taskList
        tempList = tempList.splice(tempObj.id,1,tempList[tempObj.id] = tempObj)
        let tempList2 = taskList.filter((item) => item.id !== tempObj.id)
        let temp = tempList2.concat(tempList)
        setTaskList(temp) 
        setModal(false)
    }
    const handleChange = (event) => {
        const { name , value , checked } = event.target
        if( name === "name"){
            setTaskName(value);
            
        }else if(name === "description"){
            setDescription(value);
           
        }else{
            setChecked(checked)
        }
        
    }

    return (
      <>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Update  Task</ModalHeader>
          <ModalBody>
            <form>
                <div className="form-group">
                    <label htmlFor="name"> Task Name</label>
                    <input type='text' id="name" name='name' className="form-control" value={taskName} onChange={handleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description"> Description</label>
                    <textarea rows='5' className="form-control" id="description" name="description" value={description} onChange={handleChange.bind(this)}></textarea>
                </div>
                <div className="form-check">
                    <input type='checkbox' className="form-check-input" name='checked' id='checked' checked = {checked} onChange={handleChange.bind(this)}/>
                    <label htmlFor='checked' className='form-check-label'>{ checked === true ? "Terminer":'Non Terminer'}</label>

                </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  } 
  

import {React, useState }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const CreateTask = ({modal,toggle,save,setTaskList,taskList,key}) => {
    const [taskName,setTaskName] = useState('');
    const [description,setDescription] = useState('');
    const [checked, setChecked] = useState(false);

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

    const handleSave = () => {
        let taskObj = {}
        taskObj['id']=  Math.round(Math.random()*100) 
        taskObj['Name'] = taskName
        taskObj['Description']= description 
        taskObj['Checked']= checked
        save(taskObj)
        setTaskName('')
        setDescription('')
        setChecked(false)
    }
   
  

    return (
      <>
          
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
                    <label htmlFor='checked' className='form-check-label'>{ checked ? "Terminer":"Non Terminer"}</label>

                </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  } 
  

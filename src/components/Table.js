import React , {useState} from 'react';
import { EditTask } from './models/EditTask';


export const Table = ({taskObj,setTaskList,taskList,Checked,setChecked,index }) =>{
    
    const [modal,setModal] = useState(false);
    const toggle = () => setModal(!modal);
    //const [taskName,setTaskName] = useState('');
    //const [description,setDescription] = useState('');

    const handleDelete = () =>{
        let tempList = taskList.filter((item) => item.id !== taskObj.id)
        setTaskList(tempList)
        console.log(taskObj)

    }   
    return(
        <>
  
            <tr key={taskObj.id}  >
                <th >{taskObj.id}</th>
                <td >{taskObj.Name}</td>
                <td >{taskObj.Description}</td>
                <td >
                    {taskObj.Checked === false ? <mark className="bg-warning">Non Terminer</mark>:<mark className="bg-success">Terminer</mark>}
                </td >
                <td  className="btn btn-danger " onClick={handleDelete} ><i className="fas fa-trash"></i> Delete</td>
                <td  className="btn btn-primary " onClick={() => setModal(true)} ><i className="fas fa-edit"></i> Edite</td>
               
            </tr>
            <EditTask modal={modal} toggle={toggle}  taskObj={taskObj} taskList={taskList} setTaskList={setTaskList} index={index} setModal={setModal} />
        </>
    )
}
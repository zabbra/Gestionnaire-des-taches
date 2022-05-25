import React,{ useState }  from 'react';
import { Table } from './Table';
import { CreateTask } from './models/CreateTask';

 export const TaskList = () =>{
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [seachTerm ,setSeachTerm] = useState('')
    

    let length = taskList.length;

    const toggle = () => setModal(!modal);

     const saveTask =(taskObj) => {
         let tempList = taskList
         tempList.push(taskObj)
         setTaskList(tempList)
         setModal(false)
     }
     const handleSeach = (e) =>{
         e.preventDefault()
        let tempList = taskList.filter((item) => item.Name === seachTerm || item.id === parseInt(seachTerm)  )
        setTaskList(tempList)
        setSeachTerm('')

     }
     const handleChange = (event) => {
        const { name , value  } = event.target
        if( name === "search"){
            setSeachTerm(value);
        }
            
       
    }

    
     
   
   
    return (
        <>
        
        <div style ={{background:'#E9EEF6', height:'200px' }}>
        <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">GESTIONNAIRE DE TACHE</a>
             <ul class="navbar-nav ">
                <li class="navbar-item ">
                    <button className="btn btn-primary " onClick={() => setModal(true)}>
                    Create Task
                    </button>
                </li>
			</ul>
           
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" name='search' value={seachTerm} onChange={handleChange} placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSeach}>Search</button>
            </form>
        </nav>
             
                
                
            
        </div>
       
        
            <table className="table mt-4" >
                    <thead>
                        <tr>
                            <th >#</th>
                            <th >Task</th>
                            <th >Description</th>
                            <th >Status</th>
                            <th >Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {length ? (
                            taskList.map((obj,index) => 
                            <Table taskObj={obj} setTaskList={setTaskList} taskList={taskList} index={index}  key={obj.id} setModal={setModal}/>
                            )):(
                            <tr>
                                <td colSpan="6" className="text-center">
                                    <h5>Aucun element</h5>
                                </td>
                            </tr>
                            )
                            }
                    </tbody>
              
            </table>

       
        

      
            {/*<div className='task-container'>
            {JSON.stringify(taskList)}   
                    </div>*/}
            <CreateTask toggle = {toggle} modal = {modal} save ={saveTask} />
        
        </>
    )
}
export default TaskList;



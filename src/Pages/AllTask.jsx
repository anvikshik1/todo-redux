import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalView from './Modal';
import { deleteTask } from '../features/taskData';




const AllTask = () => {
  const [viewModal, setViewModal] = useState(false);
  const [viewData, setViewData] = useState(false);

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.task);
  const [taskData, setTaskData] = useState(tasks);

  useEffect(()=>{
    setTaskData(tasks)
  },[tasks])

  const handleView = (item) => {
    setViewData(item);
    setViewModal(true);
  }
  const handleDelete = (item) => {
    const itemDelete = tasks.filter((data) => data.id !== item.id);
    dispatch(deleteTask(itemDelete));
  }
  const handleAll = () => {
    setTaskData(tasks)
  }
  const handleTodo = () => {
    const todo = tasks?.filter((data) => data.status === "added");
    setTaskData(todo);
  }

  const handleProgress = () => {
    const progress = tasks?.filter((data) => data.status === "progress");
    setTaskData(progress);
  }

  const handleDone = () => {
    const completed = tasks?.filter((data) => data.status === "completed");
    setTaskData(completed);
  }

  return (
    <div className='container'>
        <div className='button-container'>
          <button onClick={() => handleAll()}>All</button>
          <button onClick={() => handleTodo()}>Todo</button>
          <button onClick={() => handleProgress()}>In Progress</button>
          <button onClick={() => handleDone()}>Done</button>
        </div>
        <div className='table-container'>
          <table>
              <tr>
                  <th>Sr.No</th>
                  <th>Title</th>
                  <th>status</th>
                  <th>View</th>
                  <th>Delete</th>
              </tr>
              {taskData?.map((item,index) =>{
                return(
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.title}</td>
                      <td>{item.status}</td>
                      <td>
                        <div className='view-Btn' onClick={() =>handleView(item)}>
                          <FaEye color='#76ABAE'/>
                        </div>
                      </td>
                      <td>
                        <div className='view-Btn' onClick={() =>handleDelete(item)}>
                          <MdDelete color='red'/>
                        </div>
                      </td>
                  </tr>
                )
              })}
          </table>
        </div>
        <ModalView viewData={viewData} setViewModal={setViewModal} viewModal={viewModal}/>      
    </div>
  )
}

export default AllTask
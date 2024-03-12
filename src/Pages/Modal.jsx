import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../features/taskData';


const ModalView = ({viewData,setViewModal,viewModal}) => {
  const[value,setValue] = useState(viewData.status);
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.task);

  useEffect(() => {
    setValue(viewData?.status);
  },[viewData?.status])

  const handleSubmit = async e => {
    e.preventDefault();
    let temp = tasks.map((data) => {
      if (viewData.id === data.id) return { ...data, status: value }
      return data;
    })
    console.log("temp",temp);
    dispatch(updateTask(temp));
    setViewModal(false);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValue(value);
  };

  return (
    <Modal open={viewModal} onClose={() => setViewModal(false)} center >
            <h2>Title : {viewData?.title}</h2>
            <p>Description : {viewData?.discription}</p>
            <form onSubmit={handleSubmit}>
              <div className='check-box-container'>
                  <div>
                    <input 
                      type='radio' 
                      name='status'
                      value={"added"}
                      checked={value === 'added'}
                      onChange={handleChange}
                    /> Add 
                  </div>
                  <div>
                    <input 
                      type='radio' 
                      name='status'
                      value={"progress"}
                      checked={value === 'progress'}
                      onChange={handleChange}
                    /> Progress
                  </div>
                  <div>
                    <input 
                      type='radio' 
                      name='status'
                      value={"completed"}
                      checked={value === 'completed'}
                      onChange={handleChange}
                    /> Completed
                  </div>
              </div>
              <button type='submit'>submit</button>
            </form>
    </Modal>
  )
}

export default ModalView
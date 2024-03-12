import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskData';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] =useState({
    title:"",
    discription:"",
    id:uuidv4(),
    status:"added"
  });

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input, [name]:value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if(input?.title?.length < 3 || input?.discription?.length < 3) {
      return toast.error("input field should more than 3 characters");
    }
    if(input?.title?.length > 100 || input?.discription?.length > 100) {
        return toast.error("Task field should not be more than 100 characters");
    }
    console.log("input",input);
    
    dispatch(addTask(input));
    navigate("/alltask")
  }
  return (
    <div className='container'>
        
        <form onSubmit={handleSubmit}>
          <div className='todo-container'>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={input.title}
              onChange={handleInput}
              placeholder="title"
              />
            <label htmlFor="discription" className='textarea-input'>Discription</label>
            <textarea
              type="text"
              name="discription"
              value={input.discription}
              onChange={handleInput}
              placeholder="discription"
              />
              <button type="submit" className='submit-btn'>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Home
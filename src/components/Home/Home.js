import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Input from '../Input/Input';
import ShowTodo from '../ShowTodo/ShowTodo';
import "./Home.css";

const Home = () => {
    const [newTask, setNewTask] = useState(false);
    const todo = useSelector(state => state.list);
    console.log(todo);
    return (
        <div>
            <h2 className='title'>Redux Todo {todo.includes ? todo.length: null} </h2>
            <button className={`button ${newTask ? "maybe_later": "add_task"}`} onClick={()=>setNewTask(!newTask)}>
                {newTask ? "May be later" : "Add New Task" } 
            </button>
            {newTask && <Input />}
            <ShowTodo />
        </div>
    );
};

export default Home;
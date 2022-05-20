import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from "../Redux/Action/Action";
import './ShowTodo.css';

const ShowTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.list);
    return (
        <>
        {todos.map((todo)=> (
            <div className='show_todo' key={todo.id}>
                <h3>{todo.data}</h3>
                <button className='delete_btn' onClick={()=>dispatch(remove(todo.id))}>x</button>
            </div>
        ))}
        </>
    );
};

export default ShowTodo;
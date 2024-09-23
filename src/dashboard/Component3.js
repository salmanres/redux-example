import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux/TodoSlice';

function Component3() {

    const [data, setData] = useState("");
    const dispatch = useDispatch();
    const todoData = useSelector((state) => state.todos.todos);

    const handleChange = (e) => {
        setData(e.target.value);
    }

    console.log(data);
    console.log(todoData);

    const handleSave = () => {
        if (data.length <= 5) {
            alert("please fill data first");
        } else {

            dispatch(addTodo(data));
            setData("");
        }
    }

    const handleRemove = (identity) => {
        dispatch(removeTodo(identity));
    }

    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <h3>TODO APP</h3>
                        <hr />
                        <input type='text' className='form-control' name='todo' placeholder='min length-5' value={data} onChange={handleChange} autoFocus />
                        <button className='btn btn-primary' onClick={handleSave}>ADD TODO</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <table>
                            <thead>
                                <tr>
                                    <th>TODO</th>
                                    <th>EDIT</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todoData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.text}</td>
                                        <td><button className='btn btn-primary'>EDIT</button></td>
                                        <td><button className='btn btn-danger' onClick={() => handleRemove(item.id)}>DELETE</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Component3
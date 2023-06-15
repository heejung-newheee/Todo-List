import React, { useEffect, useState } from 'react';

function InputForm({ task, setTask }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const textChangeHandler = (event) => {
        setText(event.target.value);
    };
    // useEffect(() => {
    //     localStorage.setItem('todoItems', JSON.stringify(task));
    // }, []);

    // 추가버튼
    const clickAddTask = () => {
        const addTaskList = {
            id: randomID(),
            title,
            text,
            isDone: false
        };
        setTask([...task, addTaskList]);
        localStorage.setItem('todoItems', JSON.stringify(task));
        setTitle('');
        setText('');
    };

    //랜덤아이디
    function randomID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    return (
        <div className="input-area">
            <label>제목 </label>
            <input type="text" id="task-title" value={title} onChange={titleChangeHandler} />
            <label>내용 </label>
            <input type="text" id="task-text" value={text} onChange={textChangeHandler} />
            <button className="add-btn" onClick={clickAddTask}>
                추가하기
            </button>
        </div>
    );
}

export default InputForm;

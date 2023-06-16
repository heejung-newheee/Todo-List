import React, { useState } from 'react';

function InputForm({ task, setTask }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const textChangeHandler = (event) => {
        setText(event.target.value);
    };
    const randomID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    const clickAddTask = (e) => {
        const addTaskList = {
            id: randomID(),
            title,
            text,
            isDone: false
        };
        if (!title) {
            e.preventDefault();
            alert('제목을 입력해 주세요');
        } else if (!text) {
            e.preventDefault();
            alert('내용을 입력해 주세요');
        } else {
            const newArr = [...task, addTaskList];
            setTask(newArr);
            localStorage.setItem('todoItems', JSON.stringify(newArr));
            setTitle('');
            setText('');
        }
    };
    return (
        <div className="input-area">
            <form>
                <label>제목 </label>
                <input type="text" id="task-title" value={title} onChange={titleChangeHandler} />
                <label>내용 </label>
                <input type="text" id="task-text" value={text} onChange={textChangeHandler} />
                <button type="submit" className="add-btn" onClick={clickAddTask}>
                    추가하기
                </button>
            </form>
        </div>
    );
}

export default InputForm;

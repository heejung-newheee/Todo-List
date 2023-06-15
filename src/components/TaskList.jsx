import React from 'react';

function TaskList({ item, task, setTask }) {
    // 삭제버튼
    const clickDelete = (id) => {
        const newTask = task.filter((task) => {
            return task.id !== id;
        });
        setTask(newTask);
        // localStorage.removeItem('todoItems', JSON.stringify());
    };
    //상태변경
    const clickCompleteToggle = (id) => {
        const newArr = task.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item));
        setTask(newArr);
        localStorage.setItem('todoItems', JSON.stringify(newArr));
    };
    return (
        <div key={item.id} className="task-box">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button onClick={() => clickDelete(item.id)} className="del">
                삭제
            </button>
            <button onClick={() => clickCompleteToggle(item.id)}>{item.isDone ? '취소' : '완료'}</button>
        </div>
    );
}

export default TaskList;

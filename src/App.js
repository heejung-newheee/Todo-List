import { useState } from 'react';
import './App.css';

function App() {
    const [task, setTask] = useState([
        { id: randomID(), title: '리액트 과제입니다', text: '첫번째 과제는 todo list 만들기입니다.', isDone: false },
        { id: randomID(), title: '리액트', text: '첫째주 공부중', isDone: false },
        { id: randomID(), title: 'javascript', text: '프로그래밍 기초주차', isDone: true }
    ]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    // 추가버튼
    const clickAddTask = () => {
        const addTaskList = {
            id: randomID(),
            title,
            text,
            isDone: false
        };
        setTask([...task, addTaskList]);
        setTitle('');
        setText('');
    };
    // 삭제버튼
    const clickDelete = (id) => {
        console.log(id);
        const newTask = task.filter((task) => {
            return task.id !== id;
        });
        setTask(newTask);
        console.log(task);
    };
    //상태변경
    const clickCompleteToggle = (id) => {
        console.log(id);
        const newArr = task.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item));
        setTask(newArr);
    };

    //랜덤아이디
    function randomID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="layout">
            <header>
                <span>My Todo List</span>
                <span>React</span>
            </header>

            <div className="input-area">
                <label>제목 </label>
                <input
                    type="text"
                    id="task-title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <label>내용 </label>
                <input
                    type="text"
                    id="task-text"
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />
                <button className="add-btn" onClick={clickAddTask}>
                    추가하기
                </button>
            </div>

            <div className="working">
                <h2>Working</h2>
                <div className="task-wrap">
                    {task
                        .filter((item) => {
                            return item.isDone === false;
                        })
                        .map((item) => {
                            return (
                                <div key={item.id} id={item.id} className="task-box">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <button onClick={() => clickDelete(item.id)}>삭제</button>
                                    <button onClick={() => clickCompleteToggle(item.id)}>완료</button>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="solid"></div>
            <div className="done">
                <h2>Done</h2>
                <div className="task-wrap">
                    {task
                        .filter((item) => {
                            return item.isDone === true;
                        })
                        .map((item) => {
                            return (
                                <div key={item.id} className="task-box">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <button onClick={() => clickDelete(item.id)}>삭제</button>
                                    <button onClick={() => clickCompleteToggle(item.id)}>취소</button>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;

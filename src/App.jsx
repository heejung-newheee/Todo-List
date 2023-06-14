import { useState } from 'react';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
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

    //랜덤아이디
    function randomID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    console.log(task);

    return (
        <div className="layout">
            <Header />

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
                            return <TaskList key={item.id} item={item} task={task} setTask={setTask} />;
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
                            return <TaskList key={item.id} item={item} task={task} setTask={setTask} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
    const [task, setTask] = useState([
        { id: 1, title: 'title', text: 'text' },
        { id: 2, title: 'title2', text: 'text2' }
    ]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const taskListAdd = () => {
        // const taskList = {
        //     id: task.length + 1,
        //     title,
        //     text
        // };
        // setTask([...task], taskList);
    };
    return (
        <div className="layout">
            <header>
                <span>My Todo List</span>
                <span>React</span>
            </header>

            <div className="input-area">
                <label for="task-title">제목 </label>
                <input
                    type="text"
                    id="task-title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <label for="task-text">내용 </label>
                <input
                    type="text"
                    id="task-text"
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />
                <button className="add-btn" onClick={taskListAdd}>
                    추가하기
                </button>
            </div>

            <div className="working">
                <h2>Working</h2>
                <div className="task-wrap">
                    <div className="task-box">
                        <h3>title</h3>
                        <p>text</p>
                        <button>삭제</button>
                        <button>완료</button>
                    </div>
                    <div className="task-box">
                        <h3>title</h3>
                        <p>text</p>
                        <button>삭제</button>
                        <button>완료</button>
                    </div>
                    <div className="task-box">
                        <h3>title</h3>
                        <p>text</p>
                        <button>삭제</button>
                        <button>완료</button>
                    </div>
                    <div className="task-box">
                        <h3>title</h3>
                        <p>text</p>
                        <button>삭제</button>
                        <button>완료</button>
                    </div>
                    <div className="task-box">
                        <h3>title</h3>
                        <p>text</p>
                        <button>삭제</button>
                        <button>완료</button>
                    </div>
                </div>
            </div>
            <div className="solid"></div>
            <div className="done">
                <h2>Done</h2>
                <div className="task-wrap">
                    <div className="task-box">
                        <h3>title</h3>
                        <p>contents</p>
                        <button>삭제</button>
                        <button>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

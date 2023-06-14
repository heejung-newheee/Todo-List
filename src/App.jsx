import { useState } from 'react';
import Header from 'components/Header';
import InputForm from 'components/InputForm';
import TaskList from 'components/TaskList';
import './App.css';

function App(randomID = { randomID }) {
    const [task, setTask] = useState([{ id: '', title: 'Todo List', text: '내용을 적어주세요', isDone: false }]);

    return (
        <div className="layout">
            <Header />
            <InputForm task={task} setTask={setTask} />
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

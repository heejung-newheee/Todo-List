import { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import InputForm from 'components/InputForm';
import TaskList from 'components/TaskList';
import './App.css';

function App(randomID = { randomID }) {
    const [task, setTask] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('todoItems');
        if (localData !== null) {
            setTask(JSON.parse(localData));
        }
    }, []);

    return (
        <Layout>
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
        </Layout>
    );
}

export default App;

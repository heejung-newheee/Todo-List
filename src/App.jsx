import { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import InputForm from 'components/InputForm';
import Main from 'components/Main';
import './App.css';

function App(randomID = { randomID }) {
    const [task, setTask] = useState([
        {
            id: 0,
            title: '리액트 과제',
            text: '리액트 todo list 만들기',
            isDone: false
        }
    ]);
    useEffect(() => {
        const localData = localStorage.getItem('todoItems');
        if (localData !== null) {
            setTask(JSON.parse(localData));
        } else {
            setTask(task);
        }
    }, []);
    return (
        <Layout>
            <Header />
            <InputForm task={task} setTask={setTask} />
            <Main task={task} setTask={setTask} />
        </Layout>
    );
}

export default App;

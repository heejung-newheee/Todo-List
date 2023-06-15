import React from 'react';
import TaskItems from './TaskItems';

function Main({ task, setTask }) {
    return (
        <>
            <div className="working">
                <h2>Working</h2>
                <div className="task-wrap">
                    {task
                        .filter((item) => {
                            return item.isDone === false;
                        })
                        .map((item) => {
                            return <TaskItems key={item.id} item={item} task={task} setTask={setTask} />;
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
                            return <TaskItems key={item.id} item={item} task={task} setTask={setTask} />;
                        })}
                </div>
            </div>
        </>
    );
}

export default Main;

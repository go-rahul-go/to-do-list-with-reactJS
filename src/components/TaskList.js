import { useState, useEffect, useRef } from "react";
import "../style.css";
import TaskNode from "./TaskNode";

const TaskList = () => {

    const [tasks, updateTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    const [task, updateTask] = useState("")

    const inputTask = useRef("")



    function handleSubmit(event) {
        event.preventDefault();

        if (task) {
            const newTask = task;
            console.log(newTask)
            updateTasks([...tasks, newTask])
            updateTask("")
        }
        else {
            alert("enter task")
        }


        // event.preventDefault();
        // const newTask = task;
        // console.log(newTask)
        // updateTasks([...tasks,newTask])
        // updateTask("")

    }
    function delAll() {
        updateTasks([])
    }
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        inputTask.current.focus();
    }, [tasks])



    return (
        <>
            <div className="container">

                <div className="form-box">

                    <form onSubmit={handleSubmit}>
                        {/* <label>task</label> */}
                        <input type="text" maxLength="40" value={task} onChange={(e) => updateTask(e.target.value)} placeholder="add tasks here" ref={inputTask} required />
                    </form>
                    <i id="btn" class="fa-solid fa-plus" onClick={handleSubmit}></i>

                </div>

                <i class="fa-solid fa-ghost icon"></i>



            </div>
            {

                tasks.map((items, index) => {
                    return (<TaskNode key={index} index={index} task={items} update={updateTasks} allTask={tasks} />);
                })
            }
            {(tasks.length!==0)?<button id="delete-all" onClick={delAll}>Delete All</button>:""}
        </>
    )
}

export default TaskList;
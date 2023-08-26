import { useRef } from "react";
import "../style.css"

const TaskNode = (props) => {
    const text = useRef("")
    function runOverText() {
        let isLineThrought = text.current.style.textDecoration;
        if(isLineThrought==="line-through")
        {
            text.current.style.textDecoration="none"
            text.current.style.opacity="1"
            // console.log(text.current.style.textDecoration)
        }
        else{
            text.current.style.textDecoration="line-through";
            text.current.style.opacity="0.5";
            // console.log(text.current.style.textDecoration)
        }
    }
    const deleteNode=()=>{
        console.log(props.index)
        let val = props.allTask[props.index];
        // console.log(val)

        const newArr = props.allTask.filter((value)=>{
            return value!==val;
        })
        console.log(newArr)
        props.update(newArr)
    }
    return (
        <div className="node">
            <input type="checkbox" onClick={runOverText} />
            <p ref={text} id="task-text">{props.task}</p>
            <i class="fa-solid fa-trash" id="del-btn" onClick={deleteNode}></i>
        </div>
    )

}

export default TaskNode;
import React, { useState } from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/react-img.png";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  tasksState,
  onDeleteTask
}) {
  // como fazer incremento em REACT
  // const [count, setCount] = useState(0);
  // const incrementar = () => {
  //   setCount((currentCount) => {
  //     return currentCount + 1;
  //   });
  // };
  // como fazer incremento em REACT

  const addTask = () => {
    onAddTask("Nova Tarefa", tasksState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && (
          <div className="empty-list">Lista Sem Atividade</div>
        )}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

//PROPTYPES DEFINE OS TIPOS DE DADOS ENVIADOS PELOS PROPS

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};

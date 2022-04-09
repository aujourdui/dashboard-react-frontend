import React, { useState, useEffect } from "react";

import {
  MainContentsContainer,
  TaskContainer,
  TaskItem,
  TaskAvatarImage,
  TaskAvatarContainer,
} from "../styles/styles";

import * as api from "../api/index";

const TaskList = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const { data } = await api.fetchTasks();
        setTask(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTask();
  }, []);

  // useEffect(() => {
  //   const fetchTasks = () => {
  //     axios
  //       .get("https://jsonblob.com/api/961749831278411776")
  //       .then((res) => {
  //         setTask(res.data);
  //         console.log(task);
  //       })
  //       .catch((error) => console.error(`Error: ${error}`));
  //   };
  //   fetchTasks();
  // }, []);

  return (
    <MainContentsContainer>
      TaskList
      <TaskContainer>
        <div>Content</div>
        <div>Assignee</div>
        <div>Due</div>
        <div>Priority</div>
        <TaskItem>Finish the mid-term project</TaskItem>
        <TaskItem>
          <TaskAvatarContainer>
            <TaskAvatarImage src="/hero-image.jpeg" />
            Kyosuke
          </TaskAvatarContainer>
        </TaskItem>
        <TaskItem>Today</TaskItem>
        <TaskItem>High</TaskItem>
        <TaskItem>Study in the central library for 8hours</TaskItem>
        <TaskItem>
          <TaskAvatarContainer>
            <TaskAvatarImage src="https://media-exp1.licdn.com/dms/image/D5635AQFxVf3purrRog/profile-framedphoto-shrink_200_200/0/1649122686962?e=1649444400&v=beta&t=sfF1kIOjR4gafv0m0-SPnPoLVtnrSYX8bqJBnbsNWwE" />
            Sho
          </TaskAvatarContainer>
        </TaskItem>
        <TaskItem>Every day</TaskItem>
        <TaskItem>High</TaskItem>
      </TaskContainer>
    </MainContentsContainer>
  );
};

export default TaskList;

//iterate through all the taks and render them in the page:
import { ITask } from "../Interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void; 
}

export default function TodoTask ({task, completeTask}: Props) {
  return (
    <div className="task">
     <div className="content">
      <span>{task.taskName}</span>
      <span>{task.deadLine}</span>
     </div>
     <button onClick={() => completeTask(task.taskName)}>Delete</button>
    </div>
  )
}

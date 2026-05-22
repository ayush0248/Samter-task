
import Task from "./Task";
import type { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (task: TaskItem) => void;
}


const TaskList = (props: Props) => {
  const list = props.tasks.map((task) => (
    <Task key={task.id} item={task} removeTask={props.removeTask} />
  ));
  return <>{list}</>;
};
export default TaskList;



import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { type TodoCardViewInterface } from './SingleTodoCard.type';

const View = ({
  todo,
  onDone,
  isDone,
  onDelete,
  onUpdate,
}: TodoCardViewInterface) => (
  <div className="flex justify-between bg-slate-100 p-2 rounded shadow my-2">
    <h1 className={isDone ? 'font-semibold line-through' : 'font-semibold'}>
      {todo.title}
    </h1>
    <div className="px-4 flex space-x-4">
      <CheckIcon
        className="w-6 h-6 cursor-pointer text-green-700"
        onClick={onDone}
      />
      <PencilSquareIcon
        className="w-6 h-6 cursor-pointer text-yellow-700"
        onClick={onUpdate}
      />
      <TrashIcon
        className="w-6 h-6cursor-pointer text-red-700"
        onClick={() => onDelete(todo.id)}
      />
    </div>
  </div>
);

export default View;

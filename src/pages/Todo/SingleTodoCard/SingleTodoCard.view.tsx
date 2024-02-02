import {
  CheckCircleIcon,
  PencilSquareIcon,
  TrashIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import { type TodoCardProps } from './SingleTodoCard.type';
import { memo } from 'react';

const View = ({ todo, onDone, isDone, onDelete, onUpdate }: TodoCardProps) => (
  <div className="flex justify-between p-2 my-2 rounded shadow bg-slate-100">
    <h1
      id="todo-title"
      className={isDone ? 'font-semibold line-through' : 'font-semibold'}
    >
      {todo.title}
    </h1>
    <div className="flex px-4 space-x-4">
      {isDone ? (
        <XCircleIcon
          className="w-6 h-6 text-gray-300 cursor-pointer"
          onClick={onDone}
          id="button-check"
        />
      ) : (
        <CheckCircleIcon
          className="w-6 h-6 text-green-700 cursor-pointer"
          onClick={onDone}
          id="button-check"
        />
      )}
      <PencilSquareIcon
        className="w-6 h-6 text-yellow-700 cursor-pointer"
        onClick={onUpdate}
        id="button-edit"
      />
      <TrashIcon
        className="w-6 text-red-700 h-6cursor-pointer"
        onClick={() => onDelete(todo.id)}
        id="button-delete"
      />
    </div>
  </div>
);

export default memo(View);

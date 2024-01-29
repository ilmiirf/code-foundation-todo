import { Card } from '@material-tailwind/react';
import AddTodo from './AddTodo';
import SingleTodoCard from './SingleTodoCard';
import './Todo.css';
import { type TodoInterface } from './Todo.type';
import UpdateTodo from './UpdateTodo';

const View = ({ data, toggleForm }: TodoInterface) => (
  <main>
    <Card className="w-2/3 lg:w-1/2 mx-auto p-8 mt-12 min-h-72">
      {toggleForm ? (
        <>
          <AddTodo />
          <ul className=" mt-6">
            {data?.map((todo) => (
              <li key={todo.id}>
                <SingleTodoCard todo={todo} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <UpdateTodo />
      )}
    </Card>
  </main>
);

export default View;

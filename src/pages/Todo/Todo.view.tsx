import { Card } from '@material-tailwind/react';
import AddTodo from './AddTodo';
import SingleTodoCard from './SingleTodoCard';
import './Todo.css';
import { type TodoInterface } from './Todo.type';
import UpdateTodo from './UpdateTodo';

const View = ({ todos, toggleForm }: TodoInterface) => (
  <main>
    <Card className="w-2/3 p-8 mx-auto mt-12 lg:w-1/2 min-h-72">
      {toggleForm ? (
        <>
          <AddTodo />
          {/* <ul className="mt-6 " id="list-todo">
            {todos?.map((todo) => (
              <li key={todo.id} id="todo-item">
                <SingleTodoCard todo={todo} />
              </li>
            ))}
          </ul> */}
          <ul className="mt-6" id="list-todo">
            {todos && todos.length > 0 ? (
              <>
                {todos?.map((todo) => (
                  <li key={todo.id} id="todo-item">
                    <SingleTodoCard todo={todo} />
                  </li>
                ))}
              </>
            ) : (
              <div> Tidak ada Todo </div>
            )}
          </ul>
        </>
      ) : (
        <UpdateTodo />
      )}
    </Card>
  </main>
);

export default View;

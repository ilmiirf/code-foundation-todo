import { createApi } from '@reduxjs/toolkit/query/react';
import { type Todo } from 'types/todoType';
import { dataBaseQuery } from 'init/baseQuery';

export const todoApi = createApi({
  reducerPath: 'TodoServices',
  baseQuery: dataBaseQuery,
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      providesTags: ['todo'],
    }),
    getTodoDetail: builder.query<Todo, string>({
      query: (id) => `/todos/${id}`,
      providesTags: ['todo'],
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (newTodo) => ({
        url: '/todos',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['todo'],
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query: (updates) => ({
        url: `/todos/${updates.id}`,
        method: 'PUT',
        body: updates,
      }),
      invalidatesTags: ['todo'],
    }),
    deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoDetailQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useAddTodoMutation,
} = todoApi;
export default todoApi;

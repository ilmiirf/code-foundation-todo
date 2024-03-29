import { Button, Input } from '@material-tailwind/react';
import { type AddTodoProps } from './AddTodo.type';
import { withTranslation } from 'react-i18next';
import { memo } from 'react';

const View = ({ data, onSubmitTodo, onInputChange }: AddTodoProps) => (
  <div className="relative flex w-full">
    <Input
      type="text"
      label="Add Todo"
      name="title"
      value={data.title}
      onChange={onInputChange}
      className="pr-20"
      placeholder="Add Todo"
      containerProps={{
        className: 'min-w-0',
      }}
      crossOrigin={undefined}
    />
    <Button
      size="sm"
      className="!absolute right-1 top-1 rounded"
      onClick={onSubmitTodo}
      color={data.title ? 'gray' : 'blue-gray'}
      disabled={!data.title}
    >
      Submit
    </Button>
  </div>
);

export default memo(withTranslation()(View));

import { Button, Input } from '@material-tailwind/react';
import { type UpdateTodoProps } from './UpdateTodo.type';
import { withTranslation } from 'react-i18next';
import { memo } from 'react';

const View = ({ title, onUpdateTodo, onInputChange }: UpdateTodoProps) => (
  <div className="relative flex w-full">
    <Input
      type="text"
      label="Update Todo"
      name="title"
      value={title}
      onChange={onInputChange}
      className="pr-20"
      placeholder="Update Todo"
      containerProps={{
        className: 'min-w-0',
      }}
      crossOrigin={undefined}
    />
    <Button
      size="sm"
      className="!absolute right-1 top-1 rounded"
      onClick={onUpdateTodo}
      color="deep-orange"
      id="submit-update"
    >
      Update
    </Button>
  </div>
);

export default memo(withTranslation()(View));

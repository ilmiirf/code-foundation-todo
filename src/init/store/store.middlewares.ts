import todoApi from 'api/todoApi';
import authApi from 'api/authApi';

const middlewares = [todoApi.middleware, authApi.middleware];

export default middlewares;

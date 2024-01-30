import todoApi from 'api/todoApi';
import authApi from 'api/authApi';

const middllewares = [todoApi.middleware, authApi.middleware];

export default middllewares;

import * as userServers from '../services/users'
export default {

  namespace: 'users',

  state: {
    list:[]
  },

  reducers: {
    save(state, {payload}) {
      return { ...state, ...payload };
    },
    updateList(state,{payload}){
      return {
        ...state,
        list:payload
      }
    }
  },

  effects: {
    *getUsersList({payload={}}, { call, put }) {  // eslint-disable-line
      const {data} = yield call(userServers.getUsersList,payload)
      yield put({
        type:"updateList",
        payload:data
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type:"getUsersList"
          })
        }
      });
    },
  },
};

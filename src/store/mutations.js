/**
 * Created by Administrator on 2017/6/5.
 */
import * as types from './types'
import getters from './getters'
const state = {
  direction: 'forward',
  token:null,
};

const mutations = {
  [types.UPDATE_DIRECTION](state,payload) {
    state.direction = payload.direction
  },
  [types.LOGIN]: (state, data) => {
    localStorage.token = data;
    state.token = data;
    console.log(state,data,1)
  },
};

export default {
  state,
  mutations,
  getters
}

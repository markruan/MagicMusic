import * as types from '../types'

/**
 * User通用配置
 */
const state = {
  loginStatus: false,
  userInfo:JSON.parse(localStorage.getItem('userinfo')),
  likeList:[]
}

const actions = {
    
   changeStatus({ commit }, status) {
    commit(types.SET_USER_STATES, status)
   },
   saveUserInfo({ commit },userinfo){
    commit(types.SAVE_USER_INFO, userinfo)
    localStorage.setItem('userinfo',JSON.stringify(userinfo))
   }

}

const getters = {
   loginStatus: state => state.loginStatus,
}


const mutations = {
   [types.SET_USER_STATES](state, status) {
    state.loginStatus = status
   },
   [types.SAVE_USER_INFO](state, userinfo) {
    state.userInfo = userinfo
   },
}


export default {
  state,
  actions,
  getters,
  mutations
}

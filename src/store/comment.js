import axios from 'axios'
const state = {
  all: []
}
const mutations = {
  loadComments(state, comments) {
    // state.all.push(comment)
    state.all = comments
  },
}
const actions = {
  addComment({commit},{comment}){
    var url = 'http://localhost:3008/comments'
    axios.post(url,comment).then(
      res => {
        const data = res.data
        commit('addComment', data)
      }  
    )
  },
  loadComments({commit}){
    const url = 'http://localhost:3008/comments'
    axios.get(url).then(res => {
      let comments = res.data;
      commit('loadComments',comments)
    })
  }

}
export default {
  state,
  mutations,
  actions
}

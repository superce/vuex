const state = {
  all: [
    {
      id: "1",
      body: "pinglun1"
    },
    {
      id: "2",
      body: "pinglun2"
    }
  ]
}
const mutations = {
  addComment(state, comment) {
    state.all.push(comment)
  }
}
const actions = {
  addComment({commit},{comment}){
    commit('addComment',comment)
  }
}
export default {
  state,
  mutations,
  actions
}

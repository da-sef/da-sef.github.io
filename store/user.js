export const state = () => ({
  email: "",
  loggedIn: false
})

export const mutations = {
  SET_USER(state, email){
    state.email = email
  }
}

export const actions = {
  setUser({ dispatch, commit }, email){
    commit("SET_USER", email)
  }
}

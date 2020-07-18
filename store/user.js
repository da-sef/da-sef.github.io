export const state = () => ({
  email: "",
  loggedIn: false
})

export const mutations = {
  SET_USER: (state, email) => {
    state.email = email
    state.loggedIn = true
  }
}

export const actions = {
  setUser({ dispatch, commit }, authUser){
    const { email } = authUser
    commit("SET_USER", email)
  }
}

export const state = () => ({
  email: "",
  loggedIn: false
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    // Do this:
    state.email = authUser.email
  }
}

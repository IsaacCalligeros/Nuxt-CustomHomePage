const initState = () => ({
  message: "initial",
  editMode: false
});

export const state = initState;

export const getters = {
  editMode: state => state.editMode
};

//mutations are functions, synchronous
export const mutations = {
  setMessage(state, message) {
    state.message = message;
  },
  reset(state) {
    Object.assign(state, initState());
  },
  flipEditMode(state) {
    state.editMode = !state.editMode;
  }
};

//async operations
//nuxtServerInit on only initial pre render
//use fetch and map actions if needed everytime landing on page.
export const actions = {
  async nuxtServerInit({ commit }) {
    const message = await this.$axios.$get("http://localhost:5000/api/home");
    commit("setMessage", message);
  },
  async flipEditMode({ commit }) {
    commit("flipEditMode");
  }
};

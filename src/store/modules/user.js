import Firebase from '@/api/firebase'

const state = {
  user: {
    loggedIn: false,
    uid: '',
    name: '',
    profilePicUrl: ''
  }
}

const actions = {
  onAuthStateChanged ({ commit }, user) {
    commit('onAuthStateChanged', { user })
  },
  signIn () {
    Firebase.signIn()
  },
  signOut () {
    Firebase.signOut()
  },
  setUserInfo ({ commit, state }, { key, val }) {
    return new Promise((resolve, reject) => {
      if (state.user.loggedIn) { // is signed in. Firebase
        Firebase.setUserInfo(key, val)
          .then(() => {
            commit('setUser', { key, val })
            resolve()
          }).catch(reject)
      } else { // is signed out. Localstrage
        reject('still dev for guest')
      }
    })
  }
}

const mutations = {
  onAuthStateChanged (state, { user }) {
    state.user = user
  }
}

const getters = {
  user: state => state.user,
  currentUserName: state => state.user.name,
  currentUserId: state => state.user.uid
}

export default {
  state,
  getters,
  actions,
  mutations
}

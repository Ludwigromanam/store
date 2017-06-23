import firebase from 'firebase'
import {config} from '@/helpers/firebaseConfig'

// Since authentication is core to our app it will be included to this file
// It could eventually be moved to a secondary api file.

// initialize Firebase
firebase.initializeApp(config)
var auth = firebase.auth()
var database = firebase.database()

// variable
var _userInfo = {}
var _userRef = null

export default {

  // Sets up shortcuts to Firebase features and initiate firebase auth.
  initFirebase () {
    // Initiates Firebase auth and listen to auth state changes.
    auth.onAuthStateChanged(this.onAuthStateChanged.bind(this))
  },

  getUISettings () {
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    return uiConfig
  },

  getAuthObject () {
    return auth
  },

  getAuth () {
    return auth.currentUser || {}
  },

  // Signs-in
  signIn () {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  },

  // Signs-out
  signOut () {
    // Sign out of Firebase.
    auth.signOut()
    global._App.$router.push('/auth')
  },

  // Triggers when the auth state change for instance when the user signs-in or signs-out.
  onAuthStateChanged (user) {
    if (user) { // User is signed in!
      this.fetchUserInfo(user.uid)
        .then(val => {
          _userInfo = {
            loggedIn: true,
            uid: user.uid,
            name: val.name || user.displayName,
            profilePicUrl: user.photoURL
          }
          global._App.$store.dispatch('onAuthStateChanged', Object.assign({}, _userInfo))
        }).catch(() => {
          _userInfo = {
            loggedIn: true,
            uid: user.uid,
            name: user.displayName,
            profilePicUrl: user.photoURL
          }
          global._App.$store.dispatch('onAuthStateChanged', Object.assign({}, _userInfo))
        })
    } else {
      _userInfo = {
        loggedIn: false,
        uid: '',
        name: 'guest',
        profilePicUrl: ''
      }
      global._App.$store.dispatch('onAuthStateChanged', Object.assign({}, _userInfo))
    }
  },
  fetchUserInfo (uid) {
    return new Promise((resolve, reject) => {
      _userRef = database.ref('users')
      _userRef.child(uid).once('value')
        .then(snapshot => {
          const user = snapshot.val()
          resolve(user)
        }).catch(reject)
    })
  },
  setUserInfo (key, val) {
    return new Promise((resolve, reject) => {
      if (key && val && this.checkSignedInWithMessage()) {
        _userRef = database.ref('users').child(_userInfo.uid).child(key)
        _userRef.set(val)
          .then(() => {
            _userInfo[key] = val
            resolve()
          }).catch(reject)
      }
    })
  },
  checkSignedInWithMessage () {
    if (auth.currentUser) return true
    return false
  }
}

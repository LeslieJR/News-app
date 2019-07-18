import firebase from 'firebase'
import firebaseui from 'firebaseui';
import router from "./router"


const config = {

    apiKey: "AIzaSyA-37yyjzGUSSU0UP0sYLNJb4R8OTK4vp4",
    authDomain: "news-app-2c25e.firebaseapp.com",
    databaseURL: "https://news-app-2c25e.firebaseio.com",
    projectId: "news-app-2c25e",
    storageBucket: "",
    messagingSenderId: "845576841648",
    appId: "1:845576841648:web:70bbfd9175dc23fb"
};

const auth = {
    context: null,
    uiConfig: null,
    ui: null,

    init(context) {
        this.context = context;

        firebase.initializeApp(config);
        this.uiConfig = {
            signInSuccessUrl: '/auth',
            signInOptions: [
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        }
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());

        firebase.auth().onAuthStateChanged((user) => {
            console.log("user to store")
            context.$store.commit('user/setUser', user)

            let requiresAuth = context.$route.matched.some(record => record.meta.requiresAuth)
            console.log(requiresAuth)


            if (requiresAuth && !user) {
                context.$router.push('auth')
                console.log(router.history.current.fullPath)
            }
            if (router.history.current.fullPath == "/auth" && user) {
                context.$router.push("supportchat")
            }

        });
    },
    authForm(container) {
        this.ui.start(container, this.uiConfig);

    },
    user() {
        return this.context ? firebase.auth().currentUser : null;
    },
    logout() {
        firebase.auth().signOut().then(() => {
            console.log("logout")
            this.context.$store.commit('user/setUser', null)

            router.replace("/")
        })
    }
}

export default auth;
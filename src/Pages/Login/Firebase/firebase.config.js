// const firebaseConfig = {
//   apiKey: "AIzaSyCCk5x6eb0qfJSW1VQDMB3H3Lu6L3C_KZw",
//   authDomain: "max-wheel-web.firebaseapp.com",
//   projectId: "max-wheel-web",
//   storageBucket: "max-wheel-web.appspot.com",
//   messagingSenderId: "639068806554",
//   appId: "1:639068806554:web:4b888241e08f70eef5ee23",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;

import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB4Sxm26tguBT08Ac88k7AbBBT0WhrqnHQ",
    authDomain: "food-delivery-app-422e8.firebaseapp.com",
    databaseURL: "https://food-delivery-app-422e8-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-422e8",
    storageBucket: "food-delivery-app-422e8.appspot.com",
    messagingSenderId: "537656609650",
    appId: "1:537656609650:web:d40ce975fbae3be6442beb"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };
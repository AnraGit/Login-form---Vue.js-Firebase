
import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyDx6u8D1VZwVr4zz_K1sE4U2Z0poKKO7aQ",
    authDomain: "turnout-df413.firebaseapp.com",
    databaseURL: "https://turnout-df413.firebaseio.com",
    projectId: "turnout-df413",
    storageBucket: "turnout-df413.appspot.com",
    messagingSenderId: "647833689753"
  };

  export const firebaseApp = firebase.initializeApp(config)

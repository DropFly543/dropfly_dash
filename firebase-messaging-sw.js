importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCkJNXgDwTBGIflxcdiLPf7XggewMII5H8",
  authDomain: "mirajnet-1c452.firebaseapp.com",
  projectId: "mirajnet-1c452",
  storageBucket: "mirajnet-1c452.firebasestorage.app",
  messagingSenderId: "653723006220",
  appId: "1:653723006220:web:985267cdbd4148edd98529",
  measurementId: "G-EVGF3XWLDY"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Message received: ", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icons/Icon-192.png"
  });
});
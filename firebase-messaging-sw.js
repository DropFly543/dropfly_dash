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

// ✅ استقبال الإشعارات أثناء عمل التطبيق بالخلفية
messaging.onBackgroundMessage((payload) => {
  console.log("📩 إشعار في الخلفية:", payload);

  const notificationTitle = payload.notification?.title || "إشعار جديد";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "/icons/Icon-192.png",
    badge: "/icons/Icon-192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

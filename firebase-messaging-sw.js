// استيراد Firebase
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

// تهيئة Firebase
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

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log("📩 [SW] إشعار في الخلفية:", payload);

  const notificationTitle = payload.notification?.title || "إشعار جديد";
  const notificationBody = payload.notification?.body || "";

  const notificationOptions = {
    body: notificationBody,
    icon: "/icons/Icon-192.png",
    badge: "/icons/Icon-192.png",
    data: payload.data || {},
    vibrate: [200, 100, 200]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// النقر على الإشعار
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return clients.openWindow('/');
    })
  );
});
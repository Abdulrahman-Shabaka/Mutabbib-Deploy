// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAA9WNoDsL7Jx4GN4BW5u4xQhzhI1hFmPc",
  authDomain: "mutabbib-app.firebaseapp.com",
  projectId: "mutabbib-app",
  storageBucket: "mutabbib-app.firebasestorage.app",
  messagingSenderId: "396993949094",
  appId: "1:396993949094:web:65c5a6be413ea35545b367",
  measurementId: "G-ZH8B0X2MZV"
});

var messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  var notificationTitle = payload.notification.title;
  var notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icons/icon-72x72.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

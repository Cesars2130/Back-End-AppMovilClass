var admin = require("firebase-admin");

var serviceAccount = require("C:\Users\cesar\OneDrive\Documentos\UP\BackMovilTsF\classapp-14d25-firebase-adminsdk-fbsvc-fe6b305369.json")

admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});

export const messaging1 = admin.messaging()

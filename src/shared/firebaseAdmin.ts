import admin from "firebase-admin";
var serviceAccount = require("../../classapp-14d25-firebase-adminsdk-fbsvc-2b25801742.json")

// Inicializa la app de Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

// Exporta el módulo que vas a usar
export const firebaseAdmin = admin;

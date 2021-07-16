import { buffer } from "micro";
import * as admin from 'firebase-admin';

//SECURE A CONNECTION TO FIREBASE FROM THE BACKEND
const serviceAccount = require('../../../permissions.json');
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

//ESTABLISH CONNECTION TO STRIPE
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    if (req.method === 'POST') {
        
    }
}
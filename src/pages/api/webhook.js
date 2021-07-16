import { buffer } from "micro";
import * as admin from 'firebase-admin';

//SECURE A CONNECTION TO FIREBASE FROM THE BACKEND
const serviceAccount = require('../../../permissions.json');
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

//ESTABLISH CONNECTION TO STRIPE
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async(session) => {
    // console.log('fulfilling order', session)
}

export default async (req, res) => {
    if (req.method === 'POST') {
       const requestBuffer = await buffer(req);
       const payload = requestBuffer.toString();
       const sig = req.headers['stripe-signature'];
       
       let event;
        
       //VERIFY THAT THE EVENT POSTED CAME FROM STRIPE
       try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
       } catch (err) {
           console.log('Error', err.message)
           return res.status(400).send(`webhook error: ${err.message}`)
       }

       //HANDLE THE CHECKOUT SESSION COMPLETED EVENT
       if (event.type === 'checkout.session.completed') {
           const session = event.data.object;

           //FULFILL THE ORDER
       }
    }
};
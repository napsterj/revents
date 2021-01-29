
import firebase from '../config/firebase'

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
    if(!snapshot.exists) return undefined;

    const data = snapshot.data();

   for(const prop in data) {
       if(data.hasOwnProperty(prop)) {
           if(data[prop] instanceof firebase.firestore.Timestamp) {
               data[prop] = data[prop].toDate();
           }
       } 
   }
   return {
       ...data,
       id: data.id
   }
}
export function ListenEventsFromFirestore() {
    return db.collection('events');    
}
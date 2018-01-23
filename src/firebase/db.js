import { db } from './firebase';

export const doCreateUser = (id, username, email, url) =>
    db.ref(`users/${id}`).set({
        username,
        email,
        url,
    });

export const onceGetUsers = () => db.ref('users').once('value');
export const onceGetResevations = () => db.ref('reservations').once('value');
export const updateReservations = (item) => db.ref('reservations').push(item);
export const removeReservation = (item) => db.ref('reservations').child(item).remove();
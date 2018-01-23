import { storage } from './firebase';

const storageRef = storage.ref();
const imageRef = storageRef.child('images');

export const doUploadImage = (file) => imageRef.child(file.name).put(file);
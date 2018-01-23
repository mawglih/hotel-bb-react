import { auth, provider } from './firebase';

//Sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
auth.createUserWithEmailAndPassword(email, password);

//Sign in
export const doSignInWithEmailAndPassword = (email, password) =>
auth.signInWithEmailAndPassword(email, password);

//Sign in with google
export const doSignInGoogle = () => auth.signInWithPopup(provider);

//Keep signin
export const doOnStateChange = (user) => auth.onAuthStateChanged(user);

//Sign out
export const doSignOut = () => auth.signOut();

//Password Reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

//Pasword change
export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);

//Get current user
export const doGetCurrentUserName = () => auth.currentUser.displayName;


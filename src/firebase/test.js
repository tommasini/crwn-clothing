import firebase from "firebase/app";

import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("ubzAv7R4yKPfvAAyOe2n")
  .collection("cartItems")
  .doc("ubzAv7R4yKPfvAAyOe2n");

import { db, spacesCollectionRef } from "./Firebase";
import { getDocs, getDoc, doc } from "firebase/firestore/lite";

export async function getSpaces() {
  const snapshot = await getDocs(spacesCollectionRef);
  const spaces = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return spaces;
}

export async function getSpace(Id) {
  const docRef = doc(db, "spaces", Id);
  const snapshot = await getDoc(docRef);
  const space = { ...snapshot.data(), id: snapshot.id };
  return space;
}

// export async function getSpaces(Id) {
//   const url = Id ? `/api/spaces/${Id}` : "/api/spaces";
//   const res = await fetch(url);
//   const throwObject = {
//     message: "There was an error fetching Spaces.",
//     statusText: res.statusText,
//     status: res.status,
//   };

//   if (!res.ok) {
//     throw throwObject;
//   }
//   const data = await res.json();
//   return data.spaces;
// }

export async function getHostSpaces(Id) {
  const url = Id ? `/api/rentOut/spaces/${Id}` : "/api/rentOut/spaces";
  const res = await fetch(url);
  const throwObject = {
    message: "There was an error fetching your Spaces.",
    statusText: res.statusText,
    status: res.status,
  };
  if (!res.ok) {
    throw throwObject;
  }
  const data = await res.json();
  return data.spaces;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  const throwObject = {
    message: data.message,
    statusText: res.statusText,
    status: res.status,
  };

  if (!res.ok) {
    throw throwObject;
  }

  return data;
}

import {
  collection,
  doc,
  getDoc as getDocFirebase,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
  query,
  where,
  WhereFilterOp,
  orderBy,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from "@/firebase/firebase-client";

type FirestoreData = Record<string, any>;

export const FirestoreService = {
  // 📄 Generate a unique ID
  docId: (): string => uuidv4(),

  // 📥 Get a single document by ID
  getDoc: async (collectionName: string, docId: string): Promise<FirestoreData | null> => {
    const ref = doc(db, collectionName, docId);
    const snapshot = await getDocFirebase(ref);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  },

  // 📚 Get all documents in a collection
  getAllDocs: async (collectionName: string): Promise<FirestoreData[]> => {
    const ref = collection(db, collectionName);
    const snapshot = await getDocs(ref);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  // 🆕 Add a document (auto ID)
  addDoc: async (collectionName: string, data: FirestoreData): Promise<string> => {
    const ref = collection(db, collectionName);
    const docRef = await addDoc(ref, data);
    return docRef.id;
  },

  // ✏️ Set (create/replace) a document by ID
  setDoc: async (collectionName: string, docId: string, data: FirestoreData): Promise<void> => {
    const ref = doc(db, collectionName, docId);
    return await setDoc(ref, data);
  },

  // 🔁 Update a document by ID (merge = true)
  updateDoc: async (collectionName: string, docId: string, data: FirestoreData): Promise<void> => {
    const ref = doc(db, collectionName, docId);
    return await setDoc(ref, data, { merge: true });
  },

  // ❌ Delete a document by ID
  deleteDoc: async (collectionName: string, docId: string): Promise<void> => {
    const ref = doc(db, collectionName, docId);
    return await deleteDoc(ref);
  },

  // 🔎 Get documents with multiple where clauses
   getByConditions : async (
    collectionName: string,
    conditions: [fieldPath: string, opStr: WhereFilterOp, value: any][] = [],
    orderByFields: { field: string; direction?: "asc" | "desc" }[] = []
  ): Promise<FirestoreData[]> => {
    const ref = collection(db, collectionName);

    const q = query(
      ref,
      ...conditions.map(c => where(...c)),
      ...orderByFields.map(o => orderBy(o.field, o.direction || "asc"))
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } ,

  // 📤 Upload a file and get its download URL
  uploadFile: async (file: File, path: string): Promise<string> => {
    const filename = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `${path}/${filename}`);

    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  },
};

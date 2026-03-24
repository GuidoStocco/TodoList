import {db} from "@/services/firebase";
import { Timestamp, collection, doc, onSnapshot, updateDoc, deleteDoc, addDoc, query, orderBy } from "firebase/firestore";

export type Task = {
    id: string;
    title: string;
    description: string;
    date: Timestamp;
    completed: boolean;
    important: boolean;
    createdAt: Timestamp;
}


export const taskService = {

    createTask: async (uid: string, data:{title: string, description: string, date: Timestamp, important: boolean}) => {

        const taskRef = collection(db, "users", uid, "tasks");

        await addDoc(taskRef, {
            title: data.title,
            description: data.description,
            date: data.date,
            completed: false,
            important: data.important,
            createdAt: Timestamp.now(),
        });
    },

    monitorar: async(uid: string, ) => {

        const taskRef = collection(db, "users", uid, "tasks");

        const q = query(taskRef, orderBy("createdAt", "desc"));

    },

    updateTask: () => {

    },

    deleteTask: () => {

    },

    toggleTask: () => {

    },

}
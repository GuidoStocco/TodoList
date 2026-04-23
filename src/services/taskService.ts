import {db} from "@/services/firebase";
import { Timestamp, collection, doc, onSnapshot, updateDoc, deleteDoc, addDoc, query, orderBy } from "firebase/firestore";

export type Task = {
    id: string;
    title: string;
    description: string;
    date: Date;
    completed: boolean;
    important: boolean;
    createdAt: Date;
}

export type CreateTaskData = {
    title: string;
    description: string;
    date: Date;
    important: boolean;
}


export const taskService = {

    createTask: async (uid: string, data:{title: string, description: string, date: Date, important: boolean }) => {

        const taskRef = collection(db, "users", uid, "tasks");

        await addDoc(taskRef, {
            title: data.title,
            description: data.description,
            date: Timestamp.fromDate(data.date),
            completed: false,
            important: data.important,
            createdAt: Timestamp.now(),
        });
    },

    subscribeTask: (uid: string, callback: (tasks: Task[]) => void ) => {

        const taskRef = collection(db, "users", uid, "tasks");

        const q = query(taskRef, orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })) as Task[];
            callback(tasks);
        });
        return unsubscribe;
    },

    updateTask: async (uid: string, taskId: string, data: Partial<{
        title: string;
        description: string;
        date: Date;
        important: boolean;
    }>) => {
        const refUpdate = doc(db, "users", uid, "tasks", taskId)

        await updateDoc(refUpdate, {
            ...data,
            ...(data.date && { date: Timestamp.fromDate(data.date) })
        })
    },

    deleteTask: async(uid: string, taskId: string) => {

        const ref = doc(db, "users", uid, "tasks", taskId)

        await deleteDoc(ref)

    },

    toggleTask: async (uid: string, completed: boolean, taskId: string) => {

        const ref = doc(db, "users", uid, "tasks", taskId)

        await updateDoc(ref, {
            completed: !completed
        })

    },

}
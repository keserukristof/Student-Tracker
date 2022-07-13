import create from 'zustand';

import { getStudents } from "./api/apiCalls"
import { compare } from './helpers/sortHelpers'

const studentStore = (set) => ({
    students: [],
    getStudents: async () => {
        const fetchedStudents = await getStudents();
        set({ students: fetchedStudents });
    },
    addStudent: (student) => {
        set((state) => ({
            students: [...state.students, student],
        }))
    },
    removeStudent: (studentId) => {
        set((state) => ({
            students: state.students.filter(student => student.id !== studentId)
        }))
    },
    sortStudents: (sortProperty) => {
        set((state) => ({
            students: state.students.sort(compare(sortProperty))
        }))
    },
})

const useStudentStore = create(studentStore);

export default useStudentStore
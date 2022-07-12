import create from 'zustand';

import { getStudents } from "./api/apiCalls"

const studentStore = (set) => ({
    students: [],
    getStudents: async () => {
        const fetchedStudents = await getStudents();
        set({ students: fetchedStudents });
    },
    addStudent: (student) => {
        set((state) => ({
            students: [student, ...state.students],
        }))
    },
    removeStudent: (studentId) => {
        set((state) => ({
            students: state.students.filter(student => student.id !== studentId)
        }))
    },
})

const useStudentStore = create(studentStore);

export default useStudentStore
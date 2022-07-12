import create from 'zustand';
import axios from 'axios'

const studentStore = (set) => ({
    students: [],
    getStudents: async () => {
        const res = await axios.get('http://localhost:3000/students');
        set({ students: res.data });
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
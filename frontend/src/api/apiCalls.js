import axios from 'axios'
import { LOCALHOST } from '../constants'; 

export async function getStudents() {
    const res = await axios.get(`${LOCALHOST}/students`);
    return res.data;
}

export async function saveStudent(student) {
    const res = await axios.post(`${LOCALHOST}/students`, student);
    return res;
}

export async function deleteStudent(studentId) {
    const res = await axios.delete(`${LOCALHOST}/students/${studentId}`);
    return res;
}
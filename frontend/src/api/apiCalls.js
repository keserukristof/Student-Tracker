import axios from 'axios'

const LOCALHOST = "http://localhost:3000"

export async function getStudents() {
    const res = await axios.get(`${LOCALHOST}/students`);
    return res.data;
}
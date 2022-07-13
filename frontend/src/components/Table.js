import React, { useEffect } from "react";
import { deleteStudent } from "../api/apiCalls";
import useStudentStore from '../store'

function Table() {
    const { students, getStudents, sortStudents, removeStudent } = useStudentStore(
        (state) => ({
            students: state.students,
            getStudents: state.getStudents,
            sortStudents: state.sortStudents,
            removeStudent: state.removeStudent
        })
    )

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <table class="table container p-5">
            <thead>
                <tr>
                    <th onClick={() => {
                        sortStudents("id")
                    }} scope="col">
                        ID
                        <button>
                            <ion-icon name="arrow-down-outline"></ion-icon>
                        </button>
                    </th>
                    <th onClick={() => {
                        sortStudents("firstName")
                    }} scope="col">
                        First Name
                        <button>
                            <ion-icon name="arrow-down-outline"></ion-icon>
                        </button>
                    </th>
                    <th onClick={() => {
                        sortStudents("lastName")
                    }} scope="col">
                        Last Name
                        <button>
                            <ion-icon name="arrow-down-outline"></ion-icon>
                        </button>
                    </th>
                    <th scope="col">Gender</th>
                    <th scope="col">Class</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => {
                    return (
                        <tr>
                            <th scope="row">{student.id}</th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.gender}</td>
                            <td>{student.classFirstPart}.{student.classSecondPart}</td>
                            <td>{student.email}</td>
                            <button onClick={() => {
                                deleteStudent(student.id);
                                removeStudent(student.id);
                            }}>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;
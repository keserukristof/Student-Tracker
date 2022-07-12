import React, { useEffect } from "react";
import useStudentStore from '../store'


function Table() {
    const { students, getStudents } = useStudentStore(
        (state) => ({
            students: state.students,
            getStudents: state.getStudents
        })
    )

    useEffect( () => {
        getStudents();
        console.log(students)
     }, []);

    return (
        <table class="table container p-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Class</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => {
                    return (
                        <tr>
                            <th scope="row">{student.id}</th>
                            <td>{student.firstName}</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;
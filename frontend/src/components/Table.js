import { useStoreon } from 'storeon/react'

function Table() {
    const { students } = useStoreon('students');

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
                {console.log(students)}
                {students.map(student => {
                    return (
                        <tr>
                            <th scope="row">{student.id}</th>
                            <td>{student.firstName}</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>);
                })}
            </tbody>
        </table>
    )
}

export default Table;
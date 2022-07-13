import useStudentStore from '../store'

import React, { useState } from 'react';
import { saveStudent } from '../api/apiCalls';

function InputForm() {
    const { students, addStudent } = useStudentStore(
        (state) => ({
            students: state.students,
            addStudent: state.addStudent,
        })
    )

    const [student, setStudent] = useState({});

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setStudent(student => ({ ...student, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newStudent = {
            id: students.length + 1,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            gender: student.gender,
            classFirstPart: student.class.charAt(0),
            classSecondPart: student.class.charAt(student.class.length - 1)
        };
        addStudent(newStudent);
        saveStudent(newStudent);
    }

    return (
        <form class="container p-5" onSubmit={handleSubmit}>
            <div class="row">
                <div class="mb-3 col">
                    <label for="firstName" class="form-label">First Name</label>
                    <input
                        name='firstName'
                        value={student.firstName}
                        onChange={handleChange}
                        type="text"
                        id="firstName"
                        class="form-control"
                        required />
                </div>
                <div class="mb-3 col">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input
                        name='lastName'
                        value={student.lastName}
                        onChange={handleChange}
                        type="text"
                        class="form-control"
                        id="lastName"
                        required />
                </div>
            </div>
            <div class="row">
                <div class="mb-3 col-8">
                    <label for="class" class="form-label">Class</label>
                    <input
                        name='class'
                        value={student.class}
                        onChange={handleChange}
                        type="text"
                        class="form-control"
                        id="class"
                        required />
                </div>
                <div class='col-4 mt-4'>
                    <div class="form-check">
                        <input
                            name="gender"
                            value="Male"
                            onClick={handleChange}
                            class="form-check-input"
                            type="radio"
                            id="male" />
                        <label class="form-check-label" for="male">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            name="gender"
                            value="Female"
                            onClick={handleChange}
                            class="form-check-input"
                            type="radio"
                            id="female" />
                        <label class="form-check-label" for="female">
                            Female
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-3 col">
                <label for="email" class="form-label">Email</label>
                <input
                    name='email'
                    value={student.email}
                    onChange={handleChange}
                    type="text" class="form-control"
                    id="email"
                    required />
            </div>
            <div class="row justify-content-center">
                <button type="submit" class="btn btn-light col-5">Submit</button>
            </div>
        </form>
    );
}

export default InputForm;

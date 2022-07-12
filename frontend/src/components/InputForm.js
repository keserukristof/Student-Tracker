import React, { useState } from "react";
import useStudentStore from '../store'

function InputForm() {
    const addStudent = useStudentStore((state) => state.addStudent);

    const handleStudentSubmit = () => {}

    return (
        <form class="container p-5">
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" required />
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp" required />
            </div>
            <div class="mb-3">
                <label for="class" class="form-label">Class</label>
                <input type="text" class="form-control" id="class" required />
            </div>
            <div class="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="male" autocomplete="off" checked />
                <label class="btn btn-outline-primary" for="male">Male</label>

                <input type="radio" class="btn-check" name="btnradio" id="female" autocomplete="off" />
                <label class="btn btn-outline-primary" for="female">Female</label>

            </div>
            <button type="submit" class="btn btn-light col-12">Submit</button>
        </form>
    );
}

export default InputForm;

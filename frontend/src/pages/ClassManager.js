import React, { useEffect } from "react";

import useStudentStore from '../store'

import ClassCard from "../components/ClassCard";
import { createClass } from "../helpers/classCreator";

function ClassManager() {
    const { students, getStudents } = useStudentStore(
        (state) => ({
            students: state.students,
            getStudents: state.getStudents
        })
    )

    useEffect(() => {
        getStudents();
    }, []);

    const classesWithStudents = createClass(students);

    return (
        <div class="container">
            <div class="row">
                {Object.keys(classesWithStudents).map(specificClass => {
                    return (
                        <ClassCard class={specificClass} studentsForClass={classesWithStudents[specificClass]} />
                    );
                })}
            </div>
        </div>
    );
}

export default ClassManager;
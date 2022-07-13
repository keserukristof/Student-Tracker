import React, { useEffect } from "react";

import useStudentStore from '../store'

import ClassCard from '../components/ClassCard';
import { createClass } from '../helpers/classCreator';
import { compareClasses } from '../helpers/sortHelpers'

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
    const classes = Object.keys(classesWithStudents);
    const sortedClasses = classes.sort(compareClasses());

    return (
        <div class="container">
            <div class="row">
                {sortedClasses.map(specificClass => {
                    return (
                        <ClassCard
                            nameOfClass = {specificClass}
                            studentsForClass = {classesWithStudents[specificClass]}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ClassManager;
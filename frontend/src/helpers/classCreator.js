export function createClass(studentList) {
    const classesWithDuplicates = studentList.map(student => {
        return converToClassFormat(student.classFirstPart, student.classSecondPart);
    });
    const uniqueClasses = [...new Set(classesWithDuplicates)];
    let classesWithStudents = convertArrayToObject(uniqueClasses);
    fillClassesWithStudents(studentList, uniqueClasses, classesWithStudents);
    return classesWithStudents;
}

function converToClassFormat(classFirstPart, classSecondPart) {
    return `${classFirstPart}.${classSecondPart}`;
}

function convertArrayToObject(array) {
    return array.reduce((acc, curr) => (acc[curr]=[], acc), {});
}

function fillClassesWithStudents(studentList, uniqueClasses, classesWithStudents) {
    studentList.forEach(student => {
        uniqueClasses.forEach(uniqueClass => {
            const convertedClass = converToClassFormat(student.classFirstPart, student.classSecondPart);
            if (convertedClass === uniqueClass) {
                classesWithStudents[convertedClass].push(student);
            }
        })
    });
}
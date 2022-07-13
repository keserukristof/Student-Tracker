export function createClass(studentList) {
    const classesWithDuplicates = getAllClasses(studentList);
    const uniqueClasses = getUniqueItems(classesWithDuplicates);
    let classesWithStudents = convertArrayToObject(uniqueClasses);
    fillClassesWithStudents(studentList, uniqueClasses, classesWithStudents);
    return classesWithStudents;
}

function getAllClasses(studentList) {
    return studentList.map(student => {
        return converToClassFormat(student.classFirstPart, student.classSecondPart);
    });
}

function getUniqueItems(classes) {
    return [...new Set(classes)];
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
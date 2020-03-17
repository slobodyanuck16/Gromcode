const students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' },
];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const studentsBirthDays = students => {
    const sortedStudents = students.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate());
    const res = sortedStudents.reduce((acc, { name, birthDate }) => {
        const monthsName = months[new Date(birthDate).getMonth()];
        return {...acc, [monthsName]: acc[monthsName] ? acc[monthsName].concat(name) : [name] };
    }, {});

    return res;
};

console.log(studentsBirthDays(students));

export {studentsBirthDays}
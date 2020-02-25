function getMessagesForBestStudents (allStudents, failedStudents) {
    const specialStudents = allStudents
        .filter(name => !(failedStudents.indexOf(name) !== -1))
        .map(name => 'Good job, ' + name);
        return specialStudents;
};
const allStudents = ['Ann','Tom','Bob','Kate'];
const failedStudents = ['Tom','Bob'];
console.log(getMessagesForBestStudents(allStudents, failedStudents));

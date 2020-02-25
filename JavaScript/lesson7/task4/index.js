const getMessagesForBestStudents = (allStudents, failedStudents) => {
    const specialStudents = allStudents
        .filter(name => !failedStudents.include(name))
        .map(name => 'Good job, ' + name);
        return specialStudents;
};
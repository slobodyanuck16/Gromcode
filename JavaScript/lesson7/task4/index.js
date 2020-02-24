const getMessagesForBestStudents = (allStudents, failedStudents) =>
    allStudents
        .slice().filter(name => !failedStudents.include(name))
        .map(name => 'Good job, ' + name);
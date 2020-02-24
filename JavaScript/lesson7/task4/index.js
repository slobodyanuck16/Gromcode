const getMessagesForBestStudents = (allStudents, failedStudents) =>
    allStudents
        .filter(name => !failedStudents.include(name))
        .map(name => 'Good job, ' + name);
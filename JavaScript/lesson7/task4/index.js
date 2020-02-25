const getMessagesForBestStudents = (allStudents, failedStudents) =>
    specialStudents = allStudents.slice()
        .filter(name => !failedStudents.include(name))
        .map(name => 'Good job, ' + name);

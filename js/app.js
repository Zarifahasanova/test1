function interviewQuestion(job){
    if (job === 'teacher') {
        return function(name){
            console.log(name + ', What subject do you teach?')
        }
    }
    else {
        return function(name){
            console.log(name + ', What do you do?')
        }
    }
}

interviewQuestion('designer')('Jane');
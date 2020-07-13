function interviewQuestion(job){
    if (job === 'teacher') {
        return function(name){
            console.log(name + ', What subject do you teach?')
        }
    }
    else if (job === 'designer'){
        return function(name){
            console.log(name + ',What is UX?')
    }
}
    else {
        return function(name){
            console.log(name + ', What do you do?')
        }
    }
}

interviewQuestion('designer')('Jane');
function getRandom(min, max){
    floatRandom = Math.random()

    let difference = max - min

    let random = Math.round(difference * floatRandom)

    let randomWithinRange = random + min

    return randomWithinRange
}

function spaces(arr){
    let string = ''
    for (i = 0; i < arr.length; i++){
        string = string.concat(arr[i] + '\n')
    }
    return string
}

function workoutSelector(){
    let back = document.getElementById('back')
    let biceps = document.getElementById('biceps')
    let chest = document.getElementById('chest')
    let legs_front = document.getElementById('legs_front')
    let legs_back = document.getElementById('legs_back')
    let shoulders = document.getElementById('shoulders')

    let newWorkout = []
    let divideNumber = 0

        if (back.checked == true){
        divideNumber += 1
        }

        if (biceps.checked == true){
            divideNumber += 1
        }

        if (chest.checked == true){
            divideNumber += 1
        }

        if (legs_front.checked == true){
            divideNumber += 1
        }

        if (legs_back.checked == true){
            divideNumber += 1
        }

        if (shoulders.checked == true){
            divideNumber += 1
        }

        let numberOfExercises = Math.floor(6/divideNumber)

        if (back.checked == true){
            for (i=0; i < numberOfExercises; i++){
            newWorkout.push(backExercises.pop(Math.floor(Math.random() * backExercises.length)) + " \n")
            }
            }
    
            if (biceps.checked == true){
                for (i=0; i < numberOfExercises; i++){
                newWorkout.push(bicepExercises[Math.floor(Math.random() * bicepExercises.length)] + " \n")
                }
            }
    
            if (chest.checked == true){
                for (i=0; i < numberOfExercises; i++){
                newWorkout.push(chestExercises[Math.floor(Math.random() * chestExercises.length)] + " \n")
                }
            }
    
            if (legs_front.checked == true){
                for (i=0; i < numberOfExercises; i++){
                newWorkout.push(legExercises[Math.floor(Math.random() * legExercises.length)] + " \n")
                }
            }
    
            if (legs_back.checked == true){
                for (i=0; i < numberOfExercises; i++){
                newWorkout.push(legExercises[Math.floor(Math.random() * legExercises.length)] + " \n")
                }
            }
    
            if (shoulders.checked == true){
                for (i=0; i < numberOfExercises; i++){
                newWorkout.push(shoulderExercises[Math.floor(Math.random() * shoulderExercises.length)] + " \n")
                }
            }
        

    return newWorkout
}

function workoutSelectors(){
    let workoutArray = workoutSelector()
    let stringWorkout = spaces(workoutArray)
    let setNumber = 3

    if (workoutArray.length == 0) {
        return
    }

    if ((workoutArray.length < 6) && (workoutArray.length >= 1)){
        setNumber = (Math.round((6 / workoutArray.length) * 3))
    } else if (workoutArray.length > 16) {
        setNumber = 1
    } else if (workoutArray.length >= 8) {
        setNumber = 2
    }

    let workout = document.getElementById('presentWorkout')

    let newWorkoutElement = document.createElement('p')

    newWorkoutElement.innertext = stringWorkout

    workout.innerText = (`
        ${setNumber} sets of ${getRandom(4, 15)} reps \n
        ${newWorkoutElement.innertext}`)

    workout.className = "workoutPresenter"
}
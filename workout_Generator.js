function randomWorkouts(){
    let newWorkout = []
    let randomReps = getRandom(4, 16)
    newWorkout.push(`
    3 sets of ${randomReps} reps \n
    ${legExercises[Math.floor(Math.random() * legExercises.length)]}\n
    ${chestExercises[Math.floor(Math.random() * chestExercises.length)]} \n
    ${shoulderExercises[Math.floor(Math.random() * shoulderExercises.length)]}\n
    ${backExercises[Math.floor(Math.random() * backExercises.length)]}\n
    3 sets of ${getRandom(10, 20)} reps ${abExercises[Math.floor(Math.random() * abExercises.length)]}
    `)
    return newWorkout
}

function randomWorkout() {
    let workout = document.getElementById('presentWorkout')

    let newWorkout = document.createElement('p')

    newWorkout.innertext = randomWorkouts()

    workout.innerText = newWorkout.innertext

    workout.className = "workoutPresenter"

}

let chestExercises = [
    "Barbell Barbell Press",
    "Dumbell Flye",
    "Cable Flye",
    "Dumbell Flat Chest Press",
    "Incline Dumbell Chest Press",
    "Decline Dumbell Chest Press"
]

let abExercises = [
    "Sit Ups",
    "Crunches",
    "Leg Raises",
    "V-Ups"
]

let shoulderExercises = [
    "Dumbell Shoulder Press",
    "Barbell Shoulder Press",
    "Dumbell Lateral Raise",
    "Dumbell Front Raise",
]

let backExercises = [
    "Bent Over Row",
    "Seated Cable Row",
    "Pull Ups",
    "Seated Machine Pull",
    "Rear Delt Flye",
    "DeadLift"
]

let legExercises = [
    "Squats",
    "Seated Leg Extension",
    "Seated Leg Curl",
    "Hip Thrusts"
]

let tricepExercises = [
    "Sit Ups",
    "Crunches",
    "Skull Crushers",
    "Bent Over Tricep Extension"
]

let bicepExercises = [
    "Dumbell Bicep Curl",
    "Barbell Bicep Curl",
    "Preacher Curl",
    "Standing Twisting Biceps Curl "
]


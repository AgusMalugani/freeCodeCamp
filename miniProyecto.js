function getAverage(scores) {

    let suma = 0;
    for(let i = 0; i < scores.length;i++){
    suma = suma + scores[i];
    }
    
    const promedio = (suma / scores.length);
    return promedio;
    
    
    }
    
    console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
    console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

    /*
Step 1
A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

Complete the getAverage function which takes in an array of test scores and returns the average score.

The average is calculated by adding up all the scores and dividing by the total number of scores.

Código de ejemplo
average = sum of all scores / total number of scores
A couple of function calls have been provided for you so you can test out your code.

Tips

You can use a loop to iterate over the scores array and add up all the scores.
You can use the length property to get the total number of scores.
    */

function getGrade(score) {
if(typeof score !== "number"){
return "score no es un numero"
}

    if (score === 100) {
      return "A++";
    } else if (score >= 90 && score < 100) {
      return "A";
    } else if (score >= 80 && score < 90) {
      return "B";
    } else if (score >= 70 && score < 80) {
      return "C";
    } else if (score >= 60 && score < 70) {
      return "D";
    } else if(score >= 0 && score < 60 ) {
      return "F";
    }  else{
        return "score no es un numero valido"
    }
  }
  /*
  Step 2
Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter.
 Your function should return a string representing a letter grade based on the score.
Here are the scores and their corresponding letter grades:
*/

function hasPassingGrade(score) {
  const nota = getGrade(score);

if (nota === "A++" || nota === "A" || nota === "B" || nota === "C" || nota === "D" || nota === "F") {
  if(nota !== "F"){
    return true
  } else {
    return false
  }
}else {
  return "score NO ES UNA NOTA VALIDA"
}

}

  /*
Step 3
The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.
  */

function studentMsg(totalScores, studentScore) {
    const promedioClase = getAverage(totalScores)
    const calificacionEstudiante = getGrade(studentScore)
    
    if(calificacionEstudiante !== "F"){
      return `Class average: ${promedioClase}. Your grade: ${calificacionEstudiante}. You passed the course.`
    } else{
      return `Class average: ${promedioClase}. Your grade: ${calificacionEstudiante}. You failed the course.`
    }
    
    }
/*
Step 4
Now that the teacher has all of the information they need, they want to be able to message the student with the results.

Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.
*/



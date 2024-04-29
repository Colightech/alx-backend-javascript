/* this function  returns the sum of all the student ids in a list of students objects */
const getStudentIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);

export default getStudentIdsSum;

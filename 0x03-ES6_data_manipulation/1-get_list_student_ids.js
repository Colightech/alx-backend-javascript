/* this function  that returns an array of ids from a list of object.*/
const getListStudentIds = (listStudents) => {
  let listStudentIds = [];
  if (!(listStudents instanceof Array)) {
    return listStudentIds;
  }
  listStudentIds = listStudents.map((student) => student.id);
  return listStudentIds;
};

export default getListStudentIds;

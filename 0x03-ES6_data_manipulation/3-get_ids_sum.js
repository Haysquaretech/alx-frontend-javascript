export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((acc, currValue) => acc + currValue.id, 0);
}

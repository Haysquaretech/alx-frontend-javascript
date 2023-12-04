export default function getListStudentsIds(getStudentList) {
  if (!Array.isArray(getStudentList)) {
    return [];
  }
  return getStudentList.map((student) => student.id);
}

export default function getStudentsByLocation(getStudentList, city) {
  return getStudentList.filter((student) => student.location === city);
}

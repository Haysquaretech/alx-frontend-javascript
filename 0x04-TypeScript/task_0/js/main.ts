interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 24,
  location: 'Masaka',
};

const std2: Student = {
  firstName: 'Jesse',
  lastName: 'Marc',
  age: 25,
  location: 'Masaka',
};

const studentsList: Student[] = [std1, std2];

function renderTable() {
  const table = document.createElement('table');

  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable();

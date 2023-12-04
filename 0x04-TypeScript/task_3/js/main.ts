/// <reference path="./crud.d.ts" />

import * as CRUD from './crud.js';
import { RowElement, RowID } from './interface';
// Example usage with TypeScript types and interfaces for rows data

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);

const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const Employee = db.Employee;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await Employee.find();
}

async function getById(id) {
  return await Employee.findById(id);
}

async function create(userParam) {
  const employee = new Employee(userParam);

  // save user
  await employee.save();
}

async function update(id, employeeParam) {
  const employee = await Employee.findById(id);

  Object.assign(employee, employeeParam);

  await employee.save();
}

async function _delete(id) {

  await Employee.findByIdAndRemove(id);
}

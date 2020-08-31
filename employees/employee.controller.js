const express = require("express");
const router = express.Router();
const employeeService = require("./employee.service");

// routes

router.post("/register", register);
router.get("/", getAll);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function register(req, res, next) {
  employeeService
    .create(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  employeeService
    .getAll()
    .then((employees) => res.json(employees))
    .catch((err) => next(err));
}

function getCurrent(req, res, next) {
  employeeService
    .getById(req.employee.sub)
    .then((employees) =>
      employees ? res.json(employees) : res.sendStatus(404)
    )
    .catch((err) => next(err));
}

function getById(req, res, next) {
  employeeService
    .getById(req.params.id)
    .then((employees) =>
      employees ? res.json(employees) : res.sendStatus(404)
    )
    .catch((err) => next(err));
}

function update(req, res, next) {
  employeeService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  employeeService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

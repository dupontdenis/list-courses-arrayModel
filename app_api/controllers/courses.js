import lodash from "lodash";
const { find, pullAllBy } = lodash;

import { courses } from "../models/courses.js";
import debugLib from "debug";
const debug = debugLib("app_api");

export const coursesReadAll = (req, res) => {
  res.json({ courses });
};

export const coursesCreateOne = (req, res) => {
  debug("---- coursesCreateOne ---");
  const course = {
    id: Math.ceil(Math.random() * 1000),
    name: req.body.name,
    info: req.body.info,
  };
  courses.push(course);
  res.json(course);
};

export const coursesReadOne = (req, res) => {
  debug("---- coursesReadOne ---");
  const course = find(courses, { id: Number(req.params.id) });
  if (!course)
    return res
      .status(404)
      .send(`The course with id:${req.params.id} was not found`);
  res.send(course);
};

export const coursesUpdateOne = (req, res) => {
  debug("---- coursesUpdateOne ---");
  const course = find(courses, { id: Number(req.params.id) });
  if (!course)
    return res
      .status(404)
      .send(`The course with id:${req.params.id} was not found`);
  course.name = req.body.name;
  res.json(course);
};

export const coursesDeleteOne = (req, res) => {
  debug("---- coursesDeleteOne ---");
  pullAllBy(courses, [{ id: Number(req.params.id) }], "id");
  res.json(courses);
};

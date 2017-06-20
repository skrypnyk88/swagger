'use strict';

module.exports = {
  GetAllTodos : GetAllTodos
}

function GetAllTodos(req, res, next) {
  res.json([
    {
      todo_id: 0,
      todo: "Get some Link",
      author: "Jim",
      datecreated: "2017-06-20T12:43:42.985Z",
      duedate: "2017-06-20T12:43:42.985Z",
      complited: false
    },
    {
      todo_id: 1,
      todo: "Get some Link",
      author: "Jon",
      datecreated: "2017-06-20T12:43:42.985Z",
      duedate: "2017-06-20T12:43:42.985Z",
      complited: false
    },
    {
      todo_id: 2,
      todo: "Get some Link",
      author: "Ally",
      datecreated: "2017-06-20T12:43:42.985Z",
      duedate: "2017-06-20T12:43:42.985Z",
      complited: false
    }
  ]);
}

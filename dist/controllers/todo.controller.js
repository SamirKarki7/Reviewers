"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.getAll = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAll = (req, res, next) => {
    const activeStatus = req.query.active;
    const todos = TodoService.getTodos(Boolean(activeStatus));
    res.send("goooooo horaaaa");
};
exports.getAll = getAll;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const post = (req, res, next) => {
    const todos = req.body;
    console.log(req.body, 'is request body');
    const todos = TodoServices.create(todos);
    res.send("goooooo horaaaa");
};
exports.post = post;
//# sourceMappingURL=todo.controller.js.map
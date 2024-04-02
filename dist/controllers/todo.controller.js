"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.getAll = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAll = (req, res, next) => {
    res.send("goooooo horaaaa");
};
exports.getAll = getAll;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const post = (req, res, next) => {
    const Todos = Todoservice.postTodos();
    res.send("Hi my name is Samir");
};
exports.post = post;
//# sourceMappingURL=todo.controller.js.map
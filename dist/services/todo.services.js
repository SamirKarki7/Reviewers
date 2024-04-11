"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getTodos = void 0;
const getTodos = () => {
    if (active) {
        return 'active wala';
    }
    return "sabai";
};
exports.getTodos = getTodos;
const create = (todo) => {
    return { id: 2, name: todo.name };
};
exports.create = create;
//# sourceMappingURL=todo.services.js.map
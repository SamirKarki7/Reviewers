"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDto = exports.createUserDtoBody = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const zod_1 = require("zod");
// import { is_admin } from '../middlewares/authentication'
exports.createUserDtoBody = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'name is required'
    }),
    email: zod_1.z
        .string({
        required_error: 'email is required',
    })
        .email('It is an email'),
    password: zod_1.z.string({
        required_error: 'password is required',
    }),
    is_admin: zod_1.z.boolean().optional().default(false)
});
exports.createUserDto = zod_1.z.object({
    body: exports.createUserDtoBody
});
//# sourceMappingURL=create-user.validator.js.map
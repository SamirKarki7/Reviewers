"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReview = exports.postContact = exports.Get = exports.remove = exports.postRestro = exports.update = exports.getAll = void 0;
const client_1 = require("@prisma/client");
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma = new client_1.PrismaClient({});
const getAll = async () => {
    return await prisma.restaurant.findMany({
        include: {
            contacts: true
        }
    });
};
exports.getAll = getAll;
const update = async (id, restro) => {
    try {
        return await prisma.restaurant.update({
            data: {
                name: restro.name,
                description: restro.description,
                address: restro.address
            },
            where: {
                id: Number(id)
            }
        });
    }
    catch (err) {
        // console.log("Error po aayo haii hajur ") 
        console.log(err);
        if (err.code === 'P2025') {
            throw boom_1.default.notFound("Change garna khojeko data xaina haii hajur");
        }
        else {
            throw (err);
        }
    }
};
exports.update = update;
const postRestro = async (body) => {
    try {
        return await prisma.restaurant.create({
            data: {
                name: body.name,
                description: body.description,
                address: body.address,
            }
        });
    }
    catch (err) {
        throw boom_1.default.forbidden("you can not post ");
    }
};
exports.postRestro = postRestro;
const remove = async (id) => {
    try {
        return await prisma.restaurant.delete({ where: { id: id } });
    }
    catch (err) {
        console.log(err);
        if (err.code === 'P2025') {
            throw boom_1.default.notFound("DATA NOT FOUND TO DELETE");
        }
        else {
            throw err;
        }
    }
};
exports.remove = remove;
const Get = async (id) => {
    try {
        return await prisma.restaurant.findFirstOrThrow({
            where: { id: Number(id) },
        });
        return "Naya Api banyo";
    }
    catch (err) {
        console.log("Error po aayo haii hajur ");
        console.log(err);
        if (err.code === 'P2025') {
            throw boom_1.default.notFound("ERROR DATA NOT FOUND");
        }
        else {
            throw err;
        }
    }
};
exports.Get = Get;
function postContact(body, restaurant_id) {
    throw new Error("Function not implemented.");
}
exports.postContact = postContact;
function postReview(body) {
    throw new Error("Function not implemented.");
}
exports.postReview = postReview;
//# sourceMappingURL=restaurant.services.js.map
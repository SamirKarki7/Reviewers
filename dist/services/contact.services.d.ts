import z from "zod";
import { createContactDtoBody } from "../validators/create-contact-validators";
export declare const createContact: (body: z.infer<typeof createContactDtoBody>, loggedInUser_id: number, restaurantid: number) => Promise<any>;
export declare const update: (id: number, body: any) => Promise<{
    id: number;
    number: string;
    restaurantid: number;
}>;
export declare const remove: (id: Number) => Promise<{
    id: number;
    number: string;
    restaurantid: number;
}>;
//# sourceMappingURL=contact.services.d.ts.map
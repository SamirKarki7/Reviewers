import { z } from 'zod';
export declare const createRestroDtobody: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    address: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    address: string;
}, {
    name: string;
    description: string;
    address: string;
}>;
export declare const createRestro: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        address: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        description: string;
        address: string;
    }, {
        name: string;
        description: string;
        address: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}>;
export declare const updateRestroDtoBody: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    address: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    address: string;
}, {
    name: string;
    description: string;
    address: string;
}>;
export declare const updateRestroDto: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        address: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        description: string;
        address: string;
    }, {
        name: string;
        description: string;
        address: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}>;
//# sourceMappingURL=create-restaurant-validators.d.ts.map
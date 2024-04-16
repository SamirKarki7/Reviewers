export declare const getAll: () => Promise<({
    contacts: {
        id: number;
        number: string;
        restaurantid: number;
    }[];
} & {
    id: number;
    name: string;
    description: string;
    address: string;
})[]>;
export declare const update: (id: number, restro: any) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const postRestro: (body: any) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const remove: (id: any) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const Get: (id: number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
} | "Naya Api banyo">;
export declare function postContact(body: any, restaurant_id: any): void;
export declare function postReview(body: any): void;
//# sourceMappingURL=restaurant.services.d.ts.map
export type ItemProps = {
 item: Item,
 deleteItem?: (id: string) => void,
};


export interface Item {
    id: string;
    name: string;
    description: string;
    image: string;
    price?: number;
    quantity?: number;
}
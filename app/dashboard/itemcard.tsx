export interface Item {
    id: number;
    name: string;
    price: number;
    stock: number;
    createdAt: string;
}

export function ItemCard({ item }: {
    item: Item,
}) {
    return (
        <div className='bg-neutral-800 p-4 rounded-md'>
            <div className='flex'>
                <div className='grow font-bold text-lg'>{item.name}</div>
                <div className='text-neutral-500'>{item.id}</div>
            </div>
            <div>Rp. {item.price}</div>
            <div>{item.stock} left</div>
        </div>
    )
}

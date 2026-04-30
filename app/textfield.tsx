export default function TextField({ name, placeholder }: {
    name?: string,
    placeholder?: string,
}) {
    return (
        <div className='w-full border border-orange-500 rounded-sm'>
            <input name={name} placeholder={placeholder} className='w-full p-2 border-orange-500 rounded-sm' />
        </div>
    )
}

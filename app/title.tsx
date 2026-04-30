export default function Title({ children, ...other }: {
    children: React.ReactNode,
}) {
    return (
        <div className='font-bold text-3xl' {...other}>
            {children}
        </div>
    )
}

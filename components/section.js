export default function Section({children}) {
    return(
        <section className='prose prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-500 hover:prose-a:underline prose-img:rounded-lg'>
            {children}
        </section>
    )

} 
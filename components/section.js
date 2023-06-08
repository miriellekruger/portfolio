export default function Section({children}) {
    return(
        <section className='prose prose-a:text-link prose-a:no-underline hover:prose-a:text-link_hover hover:prose-a:underline prose-img:rounded-lg prose-headings:text-dark1'>
            {children}
        </section>
    )

} 
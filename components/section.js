export default function Section({children}) {
    return(
        <section className='mt-3 w-screen 
                            prose prose-a:text-link prose-a:no-underline hover:prose-a:text-link_hover hover:prose-a:underline 
                            prose-img:rounded-lg prose-img:shadow-lg prose-headings:text-dark1
                            max-w-none'
                            >
            {children}
        </section>
    )

} 
export default function Section({children}) {
    return(
        <section className='mt-3 w-screen max-w-screen-md md:mx-auto
                            prose prose-a:text-link prose-a:no-underline hover:prose-a:text-link_hover hover:prose-a:underline 
                            prose-img:rounded-lg prose-img:shadow-lg prose-headings:text-dark1
                            '
                            >
            {children}
        </section>
    )

} 
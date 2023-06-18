
export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section className="flex">
            <nav></nav>
            {children}
        </section>
    )
}
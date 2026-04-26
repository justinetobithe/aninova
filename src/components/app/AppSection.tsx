export function AppSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="app-container mt-10">
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-black text-pink-300">{title}</h2>
                <button className="text-sm font-bold text-muted-foreground hover:text-pink-300">
                    View more
                </button>
            </div>
            {children}
        </section>
    );
}
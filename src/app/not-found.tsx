export default function NotFound() {
    return (
        <section className="flex h-[70vh] w-full flex-col items-center justify-center gap-y-4">
            <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
                404 - Page Not Found
            </h1>
            <p className="mb-4 text-xl font-medium">
                The page you are looking for does not exist.
            </p>
        </section>
    );
}

export const Highlight = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="rounded border bg-background px-1.5 py-1 text-sm font-semibold tracking-tight">
            {children}
        </span>
    );
};

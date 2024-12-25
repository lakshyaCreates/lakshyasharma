export const Highlight = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-nowrap rounded border bg-background px-1.5 py-0.5 text-sm font-medium tracking-tight text-accent-foreground">
            {children}
        </span>
    );
};

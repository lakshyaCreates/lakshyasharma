import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ScheduleCalFloat } from "@/components/cal";

import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <ScheduleCalFloat />
                <SpeedInsights />
                <Analytics />
            </ThemeProvider>
        </>
    );
}

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "./theme-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                {/* Analytics */}
                {/* TODO! Add GA-ID to env after v1 production is ready */}
                <GoogleAnalytics gaId="G-1YF9LGMS8C" />
                <SpeedInsights />
                <VercelAnalytics />
            </ThemeProvider>
        </>
    );
};

"use client";

import { getCalApi } from "@calcom/embed-react";
import { Calendar, CalendarIcon } from "lucide-react";
import { useEffect } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";

import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export const ScheduleCalFloat = () => {
    const { theme } = useTheme();

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "meeting" });

            cal("ui", {
                theme: theme === "dark" ? "dark" : "light",
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, [theme]);

    return (
        <Button
            data-cal-namespace="meeting"
            data-cal-link="lakshyasharma/30min"
            data-cal-config='{"layout":"month_view"}'
            className="group/cal fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full p-2 transition-all duration-300 ease-out hover:w-auto hover:px-4"
        >
            <div className="flex items-center gap-2">
                <p className="hidden transition-all duration-300 ease-out group-hover/cal:block">
                    Schedule a call
                </p>
                <Calendar strokeWidth={1} className="!size-fit" />
            </div>
        </Button>
    );
};

export const ScheduleCal = () => {
    const { theme } = useTheme();

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "meeting" });

            cal("ui", {
                theme: theme === "dark" ? "dark" : "light",
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, [theme]);

    return (
        <Button
            data-cal-namespace="meeting"
            data-cal-link="lakshyasharma/30min"
            data-cal-config='{"layout":"month_view"}'
        >
            Schedule a call
        </Button>
    );
};

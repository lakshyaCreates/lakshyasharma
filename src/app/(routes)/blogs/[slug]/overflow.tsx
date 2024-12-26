"use client";

import { useEffect } from "react";

export function SetOverflow() {
    useEffect(() => {
        const body = document.querySelector("body");
        body?.style.setProperty("overflow", "auto", "important");
    });

    return <></>;
}

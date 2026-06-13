'use client'

import homeDesign from "@/Home.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function DebugContent() {
    const [isVisible, setVisible] = useState(true);
    const [overDesign, setOverDesign] = useState(true);
    const [position, setPosition] = useState("right");
    const [opacity, setOpacity] = useState(100);

    return (
        <>
            <Image
                src={homeDesign}
                alt="home design"
                width={1440}
                loading="eager"
                className={cn("h-auto block mx-auto absolute top-0 left-0 right-0 pointer-events-none min-w-[1440px] max-[1457px]:hidden",
                    isVisible ? "opacity-100" : "opacity-0",
                    overDesign ? "z-50" : "z-0"
                )}
                style={{ opacity: isVisible ? opacity / 100 : 0 }}
            />
            <div className={cn("fixed bottom-2 flex gap-2 z-50",
                position === "right" ? "right-2" : "left-2"
            )}>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={opacity}
                    onChange={(e) => setOpacity(parseInt(e.target.value))}
                    className="w-24"
                />
                {
                    isVisible && <button
                        onClick={() => setOverDesign(!overDesign)}
                        className={cn("bg-amber-200 text-blue-700 px-2 py-1 rounded border border-blue-500 cursor-pointer")}
                    >
                        {overDesign ? "Show Design Below" : "Show Design Above"}
                    </button>
                }
                <button
                    onClick={() => setVisible(!isVisible)}
                    className={cn("bg-amber-200 text-blue-700 px-2 py-1 rounded border border-blue-500 cursor-pointer")}
                >
                    {isVisible ? "Hide Design" : "Show Design"}
                </button>
                <button
                    onClick={() => setPosition(position === "right" ? "left" : "right")}
                    className={cn("bg-amber-200 text-blue-700 px-2 py-1 rounded border border-blue-500 cursor-pointer")}
                >
                    {position === "right" ? "Set Right" : "Set Left"}
                </button>
            </div>
        </>
    )
}
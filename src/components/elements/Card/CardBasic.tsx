

import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

export default function CardBasic({ cardTitle, cardDescription }: { cardTitle: string, cardDescription: string }) {
    return (
        <Card className="text-white w-60 h-52 bg-purple-900 hover:bg-sky-900 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform-gpu flex flex-col items-center justify-center">
            <CardTitle className="animate-bounce">{cardTitle}</CardTitle>
            <CardDescription className="text-white">{cardDescription}</CardDescription>
        </Card>

    )
}
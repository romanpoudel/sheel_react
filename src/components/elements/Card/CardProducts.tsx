
import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export function CardProducts({ cardImageUrl, cardTitle, cardDescription, pageLinkUrl }: { cardImageUrl: string, cardTitle: string, cardDescription: string, pageLinkUrl: string }) {
    return (
        <Link to={pageLinkUrl}>
            <Card
                className="p-8 rounded-xl card md:w-96  bg-white  shadow-xl text-purple-900 hover:scale-105 transition-all duration-300 ease-in-out transform-gpu  cursor-pointer  ">
                <div className="card-body">
                    <img className="rounded-xl pb-5 w-96 h-96" src={cardImageUrl}
                        alt="Card-Image" />
                    <CardTitle className="text-center text-lg font-bold ">
                        {cardTitle}
                    </CardTitle>
                    <CardDescription className="text-justify text-sm line-clamp-2">{cardDescription}</CardDescription>
                </div>
            </Card>
        </Link >

    )
}

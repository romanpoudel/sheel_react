import React from 'react';

interface ListWithDescriptionProps {
    titleLeft?: string;
    contentLeft?: string;
    titleRight?: string;
    contentRight?: string;
}

const ListWithDescription: React.FC<ListWithDescriptionProps> = ({ titleLeft, contentLeft, titleRight, contentRight }) => {
    return (
        <div className="grid grid-cols-11 text-justify">
            <div className="col-span-11 lg:col-start-1 lg:col-span-5">
                <ul className="list-disc pl-4 content-text-size animated-content animate-fly-in-left">
                    <li className="py-2 text-lg font-black">{titleLeft}</li>

                    <div className="py-2 text-lg font-black">
                        <p className="content-text-size text-justify">{contentLeft}</p>
                    </div>
                </ul>

            </div>
            <div className="col-span-11 lg:col-start-7 lg:col-span-5">
                <ul className="list-disc pl-4 content-text-size animated-content animate-fly-in-right">
                    <li className="py-2 text-lg font-black">{titleRight}</li>

                    <div className="py-2 text-lg font-black">
                        <p className="content-text-size text-justify">{contentRight}</p>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default ListWithDescription;

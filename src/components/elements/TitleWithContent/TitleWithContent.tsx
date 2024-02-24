import  { ReactNode } from 'react';

interface TitleWithContentProps {
    title: string;
    children: ReactNode; // Adjusted to accept ReactNode
}

const TitleWithContent = ({ title, children }: TitleWithContentProps) => {
    return (
        <>
            <div className="py-4 px-8 lg:px-32 pt-10">
                <p className="title-text-size text-purple-900 ">{title}</p>
                <div className="custom__divider pb-4">
                    <h1></h1>
                </div>
                {children} 
            </div>
        </>
    );
};

export default TitleWithContent;

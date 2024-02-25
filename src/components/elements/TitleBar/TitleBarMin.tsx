interface TitleBarProps{
    title:string;
    subtitle?:string;
}
const TitleBarMin : React.FC<TitleBarProps> = ({title,subtitle}) => {
    return (

        <>
            <div id="hero-navbar" className="bg-purple-900 pt-24 pb-8">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-center">
                            <h1 className="text-white text-5xl font-extrabold animate-pulse">{title}</h1>
                            <div className="py-2 flex justify-center gap-4">
                                <div className="navbar-item cursor-pointer text-white text-lg hover:text-blue-400 "
                                    data-page="./pages/index_content.html"> <a>Home</a> </div>
                                <i className="ri-donut-chart-fill text-xl text-white hover:animate-spin "></i>
                                <div className="navbar-item cursor-pointer text-white text-lg hover:text-blue-400 "
                                    data-page="./pages/index_content.html"> <a>Services</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}

export default TitleBarMin
const ImageWithContentRight = ({ imageUrl, title, content }: { imageUrl: string, title: string, content: string }) => {
    return (

        <>
            <div className="grid grid-cols-11">
                <div className="col-span-11 lg:col-span-5">

                    <p className="title-text-size text-purple-900 animated-content">{title}</p>
                    <div className="custom__divider pb-4">
                        <h1></h1>
                    </div>
                    <p className="text-md text-justify content-text-size ">{content}</p>
                </div>
                <div className="col-span-11 lg:col-start-7 lg:col-span-5 py-4">
                    <figure className="">
                        <img className="" src={imageUrl} alt="" />
                    </figure>

                </div>
            </div>
        </>

    )
}

export default ImageWithContentRight
export default function DesignGrid() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <div className="w-full h-[70vh] flex items-center justify-center">
                <div className="w-1/2 h-full flex flex-col items-start justify-start overflow-hidden">
                    <img
                        src="/assets/images/3.jpg"
                        className="w-full h-full object-cover hover:scale-110 transition-all"
                        alt=""
                    />
                </div>
                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    <div className="w-full h-1/2 flex items-center justify-center">
                        <div className="w-1/2 h-full overflow-hidden">
                            <img
                                src="/assets/images/4.jpg"
                                className="w-full h-full object-cover hover:scale-110 transition-all"
                                alt=""
                            />
                        </div>
                        <div className="w-1/2 h-full p-7 flex flex-col items-start justify-end">
                            <span className="font-semibold text-left text-base">
                                Date
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Expedita, optio.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex items-center justify-center bg-slate-800">
                        <div className="w-1/2 h-full p-7 text-white flex flex-col items-start justify-end">
                            <span className="font-semibold text-left text-base">
                                Date
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Expedita, optio.
                            </p>
                        </div>
                        <div className="w-1/2 h-full overflow-hidden">
                            <img
                                src="/assets/images/4.jpg"
                                className="w-full h-full object-cover hover:scale-110 transition-all"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full h-[40vh] justify-center">
                <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="w-1/2 h-full flex flex-col items-start justify-end p-7">
                        <span className="font-semibold text-left text-base">
                            Date
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita, optio.
                        </p>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-start justify-start overflow-hidden">
                        <img src="/assets/images/5.jpg" className="w-full h-full object-cover hover:scale-110 transition-all" alt="" />
                    </div>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="w-1/2 h-full flex flex-col items-start justify-end p-7">
                        <span className="font-semibold text-left text-base">
                            Date
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita, optio.
                        </p>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-start justify-start overflow-hidden">
                        <img src="/assets/images/6.jpg" className="w-full h-full object-cover hover:scale-110 transition-all" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CapabilitiesMainCardThird({details1}) {
    const valuesList = [
        "Integrity",
        "Leadership",
        "Accountability",
        "Transparency",
        "Communication",
        "Teamwork",
        "Vision",
        "Empowerment",
        "Persistence",
        "Resilience"
    ];

    return (
        <>
            <div className="font-sans max-w-[95%] border-gray-200 mx-auto p-10 bg-white">
                <div className="relative h-auto flex p-10 mb-10 items-center shadow-2xl border-solid border-1 border-gray-200">
                    <div className="w-[55%] pl-14 text-4xl font-bold mb-6">
                        <h2 className="mb-5 text-gray-800 text-5xl leading-tight">
                            {details1.title}
                        </h2>
                       <p className=" mb-7 text-gray-800 text-xl font-bold pr-12 text-justify">
                            {details1.des}
                        </p>
                        <ul className="mb-7 text-gray-600 text-xl font-normal pr-12 list-disc pl-5">
                            {valuesList.map((value, index) => (
                                <li key={index} className="mb-2">{value}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='relative h-[100%]'>
                        <img
                            src={details1.img}
                            alt="Values illustration"
                            className="rounded-lg max-w-md h-[30em] object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
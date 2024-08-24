
export default function FooterStripe() {
    return (
        <div className="h-32 w-full bg-primary flex items-center justify-center text-white font-bold text-2xl text-center">
            <div className="w-[85%] flex items-center justify-between">
                <p className=" text-left">
                    Subscribe to our newsletter to stay up-to-date.
                </p>
                <div className="w-auto flex flex-col items-start justify-start gap-1">
                    <span className="text-base">Enter your email</span>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        className="text-black text-base w-96 py-2 px-3 rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}

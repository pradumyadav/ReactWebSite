import PropTypes from "prop-types";

export default function BannerVideo({ vid1, title, des }) {
    return (
        <div className="w-full relative h-screen flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-20"></div>
            <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-start justify-start">
                <video
                    src={vid1}
                    className="w-full h-full object-cover"
                    loop
                    controls
                    autoPlay
                    muted
                    playsInline
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col z-20 items-center justify-start p-32 text-white">
                <span className="text-7xl font-extrabold hidden">{title}</span>
            </div>
        </div>
    );
}

BannerVideo.PropTypes = {
    vid1: PropTypes.string,
    title: PropTypes.string,
    des: PropTypes.string
}
BannerVideo.PropTypes.defaultProps = {
    vid1: '',
    title: '',
    des: ''
}
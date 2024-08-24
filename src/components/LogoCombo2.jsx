import PropTypes from 'prop-types';

export default function LogoCombo2({ color = 'black' }) {
    return (
        <div className="w-auto h-full flex gap-3 items-center justify-center">
            <img
                src="/assets/images/logo-transparent.png"
                className="w-auto h-[70%]"
                alt=""
            />
            <p
                className={`flex flex-col items-start justify-start text-${color}`}
            >
                <span className="font-baskervville text-xl">
                    MADASKY Consulting
                </span>
                <span className="font-valencia italic">
                    Redefining Excellence
                </span>
            </p>
        </div>
    );
}

LogoCombo2.propTypes = {
    color: PropTypes.string,
};

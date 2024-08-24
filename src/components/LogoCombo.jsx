import { Link } from 'react-router-dom';

export default function LogoCombo() {
    return (
        <Link
            to={'/'}
            className="w-full h-auto flex gap-3 items-center justify-start"
        >
            <img
                src="/assets/images/logo2.png"
                className="w-[100%] h-auto"
                alt=""
            />
        </Link>
    );
}

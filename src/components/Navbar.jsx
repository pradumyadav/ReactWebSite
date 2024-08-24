import PropTypes from 'prop-types';
import LogoCombo from './LogoCombo';
import Navitem from './Navitem';

export default function Navbar({ customStyles }) {
    return (
        <div className={`w-screen bg-white h-20 flex items-center justify-between px-14 ${customStyles}`}>
            <div className="w-1/5 h-full flex items-center justify-center gap-2">
                <LogoCombo />
            </div>
            <div className="w-auto h-full flex gap-10 items-center justify-center">
                <Navitem title="Home" path="/" />
                <Navitem title="About" path="/about" />
                <Navitem title="Career" path="/careers" />
                <Navitem title="Industries" path="/industries" />
                <Navitem title="Insights" path="/insights" />
                <Navitem title="Services" path="/services" />
            </div>
            <div className="w-1/5 h-full flex items-start justify-end gap-4">
                <Navitem title="Sign In" path="/sign-in" />
                <Navitem title="Subscribe" path="/subscribe" />
            </div>
        </div>
    );
}

Navbar.propTypes = {
    customStyles: PropTypes.string,
};

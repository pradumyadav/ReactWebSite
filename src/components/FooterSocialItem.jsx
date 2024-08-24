import PropTypes from 'prop-types';

export default function FooterSocialItem({ icon, title, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className="w-full h-auto flex items-center gap-2"
        >
            <span className="w-10 h-auto text-black text-base flex items-center justify-center cursor-pointer">
                <i className={`${icon}`}></i>
            </span>
            <span>{title}</span>
        </a>
    );
}

FooterSocialItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

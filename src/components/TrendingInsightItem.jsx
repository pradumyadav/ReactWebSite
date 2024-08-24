import PropTypes from 'prop-types';

export default function TrendingInsightItem({ title, text }) {
    return (
        <div className="w-1/5 h-full flex items-center gap-4 justify-start">
            <p className="text-3xl font-bold text-blue-500">{title}</p>
            <div className="w-0.5 h-[70%] bg-blue-500"></div>
            <p>{text}</p>
        </div>
    );
}

TrendingInsightItem.propTypes = {
    title: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

// import PropTypes from 'prop-types';

// export default function FooterItemHeader({ title }) {
//     return (
//         <div className="w-full h-auto flex flex-col items-start justify-start">
//             <h2 className="text-xl uppercase font-semibold underline underline-offset-8 decoration-4 decoration-blue-500">
//                 {title}&emsp;
//             </h2>
//         </div>
//     );
// }

// FooterItemHeader.propTypes = {
//     title: PropTypes.string,
// };


export default function FooterItemHeader({ title }) {
    return (
        <h3 className="text-lg text-white font-semibold mb-4 bg-custom-gradient-3 py-1 px-4 rounded-full inline-block">
            {title}
        </h3>
    );
}
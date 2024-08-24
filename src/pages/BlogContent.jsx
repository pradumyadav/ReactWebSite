import PropTypes from 'prop-types';
import AboutNavbar from '../components/AboutNavbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function BlogContent() {
    const { name } = useParams();

    useEffect(() => {
        findBlog();
    }, []);

    const findBlog = async () => {
        // const response = await axios.get(`${BaseURL()}/api/blog/getBlog/${name}`);

        // console.log(response.data.blog);

    }

    return (
        <>
            <AboutNavbar />
            <article className="max-w-4xl mx-auto px-4 py-12">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{name}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                        <span className="mr-4">By {name}</span>
                        {/* <span>{new Date(blog.date).toLocaleDateString()}</span> */}
                    </div>
                    {/* <p className="text-xl text-gray-700 mb-6">{blog.description}</p> */}
                </header>

                {/* {blog.image && (
                    <div className="mb-8">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                )} */}

                <div className="prose prose-lg max-w-none">
                    {name}
                </div>
            </article>
            <Footer />
        </>
    );
}

BlogContent.propTypes = {
    blog: PropTypes.object.isRequired,
};
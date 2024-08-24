import { useEffect, useState } from 'react'
import BaseURL from './BaseURL';
import axios from 'axios';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getPosts`);
        setBlogs(response.data.posts);
    }

    const notify = (param) => toast.success(`${param}`, {
        position: "top-right",
    });

    const showError = (param) => toast.error(`${param}`, {
        position: "top-right",
    });

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            const response = await axios.delete(`${BaseURL()}/api/blog/deletePost/${id}`);
            if (response.data.status == 200) {
                notify(response.data.message);
                getBlogs();
            } else {
                showError(response.data.message);
            }
        }
    }

    return (
        <div className='flex flex-col items-start justify-center'>
            <ToastContainer />
            <table className='border-2 w-full'>
                <thead>
                    <tr>
                        <th className='py-3 font-poppins border-r-2 border-b-2'>Sr. No</th>
                        <th className='py-3 font-poppins border-r-2 border-b-2'>Blog Title</th>
                        <th className='py-3 font-poppins border-r-2 border-b-2'>Blog Description</th>
                        <th className='py-3 font-poppins border-r-2 border-b-2'>Blog Image</th>
                        <th className='py-3 font-poppins border-r-2 border-b-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map((blog, index) => (
                            <tr key={index}>
                                <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{index + 1}</td>
                                <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{blog.title}</td>
                                <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{blog.description}</td>
                                <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>
                                    <img src={`/uploads/${blog.blogImage}`} className='w-24 h-24 mx-auto' alt="" />
                                </td>
                                <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>
                                    <button className='text-xl text-blue-600'>
                                        <FiEdit />
                                    </button>&emsp;
                                    <button className='text-xl text-red-600' onClick={() => { handleDelete(blog._id) }}>
                                        <FaRegTrashCan />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

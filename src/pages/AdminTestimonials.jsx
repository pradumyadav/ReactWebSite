import { useEffect, useState } from "react";
import FormInput from "../admin/FormInput";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import CustomButton from "../admin/CustomButton";
import BaseURL from "./BaseURL";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";

export default function AdminTestimonials() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [testimonials, setTestimonials] = useState([]);

    const handleSubmit = async () => {
        const response = await axios.post(`${BaseURL()}/api/blog/addTestimonials`, { title, content });

        if (response.data.status == 200) {
            notify(response.data.message);
            setTitle('');
            setContent('');
            getCategories();
        } else {
            showError(response.data.message);
            setTitle('');
            setContent('');
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getTestimonials`);
        setTestimonials(response.data.testimonials);
    };

    const notify = (param) => toast.success(`${param}`, {
        position: "top-right",
    });

    const showError = (param) => toast.error(`${param}`, {
        position: "top-right",
    });

    return (
        <div className="w-full h-auto flex flex-col items-start justify-start gap-1">
            <ToastContainer />
            <div className='grid w-full grid-cols-2 gap-5 h-auto place-items-center place-content-center'>
                <FormInput value={title} onChange={(e) => setTitle(e.target.value)} title="Testimonials By" type="text" />
                <FormInput value={content} onChange={(e) => setContent(e.target.value)} title="Content" type="text" />
            </div>
            <CustomButton title="Submit" onclick={() => handleSubmit()} />
            <div className='flex flex-col items-start justify-center w-full mt-6'>
                <table className='border-2 w-full'>
                    <thead>
                        <tr>
                            <th className='py-3 font-poppins border-r-2 border-b-2'>Sr. No</th>
                            <th className='py-3 font-poppins border-r-2 border-b-2'>Name</th>
                            <th className='py-3 font-poppins border-r-2 border-b-2'>Content</th>
                            <th className='py-3 font-poppins border-r-2 border-b-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            testimonials.map((blog, index) => (
                                <tr key={index}>
                                    <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{index + 1}</td>
                                    <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{blog.title}</td>
                                    <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{blog.content}</td>
                                    <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>
                                        <button className='text-xl text-blue-600'>
                                            <FiEdit />
                                        </button>&emsp;
                                        <button className='text-xl text-red-600'>
                                            <FaRegTrashCan />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

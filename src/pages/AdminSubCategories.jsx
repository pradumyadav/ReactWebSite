import { useEffect, useState } from "react";
import FormInput from "../admin/FormInput";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import CustomButton from "../admin/CustomButton";
import BaseURL from "./BaseURL";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import FormSelect from "../admin/FormSelect";

export default function AdminSubCategories() {

    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [allCategorys, setAllCategories] = useState([]);

    const handleSubmit = async () => {
        const response = await axios.post(`${BaseURL()}/api/blog/addSubCategory`, { title, categoryId: categories });

        if (response.data.status == 200) {
            notify(response.data.message);
            setTitle('');
            getSubCategories();
        } else {
            showError(response.data.message);
            setTitle('');
        }
    }

    useEffect(() => {
        getCategories();
        getSubCategories();
    }, []);

    const getSubCategories = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getSubCategories`);
        console.log(response.data.subcategories);
        setSubCategories(response.data.subcategories);
        setTitle('');
    };


    const getCategories = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getCategories`);
        console.log(response.data.categories);
        setAllCategories(response.data.categories);
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
                <FormSelect value={categories} onChange={(e) => setCategories(e.target.value)} title="Select Category" name="category" data={allCategorys} />
                <FormInput value={title} onChange={(e) => setTitle(e.target.value)} title="Sub Category Name" type="text" />
            </div>
            <CustomButton title="Submit" onclick={() => handleSubmit()} />
            <div className='flex flex-col items-start justify-center w-full mt-6'>
                <table className='border-2 w-full'>
                    <thead>
                        <tr>
                            <th className='py-3 font-poppins border-r-2 border-b-2'>Sr. No</th>
                            <th className='py-3 font-poppins border-r-2 border-b-2'>Category Name</th>
                            <th className='py-3 font-poppins border-r-2 border-b-2'>Sub Category Name</th>
                            <th className='py-3 font-poppins border-r-2 border-b-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subCategories.map((blog, index) => (
                                <tr key={index}>
                                    <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{index + 1}</td>
                                    <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{blog.categoryTitle}</td>
                                    <td className='py-1 font-poppins border-r-2 text-center text-sm border-b-2'>{blog.title}</td>
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

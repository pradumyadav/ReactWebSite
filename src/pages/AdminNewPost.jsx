import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import BaseURL from './BaseURL';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../admin/FormInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FormSelect from '../admin/FormSelect';
import CustomButton from '../admin/CustomButton';

export default function AdminNewPost() {
    const [editorContent, setEditorContent] = useState('');
    const [editorDescription, setEditorDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [subcategorys, setSubcategories] = useState([]);
    const [title, setTitle] = useState('');
    const [allCategorys, setAllCategories] = useState([]);
    const [allSubCategorys, setAllSubCategories] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(() => {
        getCategories();
        getSubCategories();
    }, []);

    const getSubCategories = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getSubCategories`);
        console.log(response.data.subcategories);
        setAllSubCategories(response.data.subcategories);
    };

    const notify = (param) => toast.success(`${param}`, {
        position: "top-right",
    });

    const showError = (param) => toast.error(`${param}`, {
        position: "top-right",
    });

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];


    const getCategories = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getCategories`);
        console.log(response.data.categories);
        setAllCategories(response.data.categories);
    };

    const handleSubmit = async () => {
        console.log(`${BaseURL()}/api/blog/addBlog`);

        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', editorDescription);
        formData.append('blogContent', editorContent);
        formData.append('selectedCategory', categories);
        formData.append('subcategory', subcategorys);
        formData.append('featuredImage', image);

        const response = await axios.post(`${BaseURL()}/api/blog/addBlog`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 200) {
            notify(response.data.message);
            setTitle('');
            setEditorContent('');
            setEditorDescription('');
            setImage(null);
        } else {
            showError(response.data.message);
        }
    };

    return (
        <div className="flex flex-col items-start justify-start w-full h-auto pb-20">
            <ToastContainer />
            <div className='flex flex-col items-start justify-start gap-10'>
                <div className='grid w-full grid-cols-4 gap-5 h-auto place-items-center place-content-center'>
                    <FormInput value={title} onChange={(e) => setTitle(e.target.value)} title="Blog Title" type="text" />
                    <FormSelect value={categories} onChange={(e) => setCategories(e.target.value)} title="Select Category" name="category" data={allCategorys} />
                    <FormSelect value={subcategorys} onChange={(e) => setSubcategories(e.target.value)} title="Select SubCategory" name="subcategory" data={allSubCategorys} />
                    <div className='flex flex-col items-start justify-start gap-1 w-full'>
                        <label htmlFor="" className='font-poppins'>Blog Image</label>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full h-10 border-2 pl-2 rounded-lg" name="" id="" />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full'>
                    <label htmlFor="description" className="font-noraml font-poppins text-base">
                        Blog Description
                    </label>
                    <textarea name="description" className="w-full border-2 pl-2 rounded-lg" id="" onChange={(e) => setEditorDescription(e.target.value)} value={editorDescription} rows={3}></textarea>
                </div>
                <div className='flex flex-col items-start justify-start w-full mt-5'>
                    <label htmlFor="content" className="font-normal font-poppins text-base">
                        Blog Content
                    </label>
                    <ReactQuill
                        theme="snow"
                        value={editorContent}
                        onChange={setEditorContent}
                        modules={modules}
                        formats={formats}
                        style={{ width: '100%', height: '300px' }}
                    />
                </div>
                <CustomButton title={"Create Post"} onclick={() => handleSubmit()} />
            </div>
        </div>
    )
}
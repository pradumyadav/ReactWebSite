import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import BaseURL from './BaseURL';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../admin/FormInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomButton from '../admin/CustomButton';

export default function AdminEvents() {
    const [editorContent, setEditorContent] = useState('');
    const [editorDescription, setEditorDescription] = useState('');
    const [title, setTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [image, setImage] = useState(null);

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

    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('eventDate', eventDate);
        formData.append('eventTime', eventTime);
        formData.append('description', editorDescription);
        formData.append('blogContent', editorContent);
        formData.append('featuredImage', image);

        const response = await axios.post(`${BaseURL()}/api/blog/addEvent`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 200) {
            notify(response.data.message);
            setTitle('');
            setEditorContent('');
            setEventDate('');
            setEventTime('');
            setEditorDescription('');
            setImage(null);
        } else {
            showError(response.data.message);
        }
    };

    return (
        <div className="flex flex-col items-start justify-start w-full h-auto pb-20">
            <ToastContainer />
            <div className='flex flex-col items-start justify-start gap-5 w-full'>
                <div className='grid w-full grid-cols-4 gap-5 h-auto place-items-center place-content-center'>
                    <FormInput value={title} onChange={(e) => setTitle(e.target.value)} title="Event Title" type="text" />
                    <FormInput value={eventTime} onChange={(e) => setEventTime(e.target.value)} title="Event Time" type="time" />
                    <FormInput value={eventDate} onChange={(e) => setEventDate(e.target.value)} title="Event Date" type="date" />
                    <div className='flex flex-col items-start justify-start gap-1 w-full'>
                        <label htmlFor="" className='font-poppins'>Blog Image</label>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full h-10 border-2 pl-2 rounded-lg" name="" id="" />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full'>
                    <label htmlFor="description" className="font-noraml font-poppins text-base">
                        Event Description
                    </label>
                    <textarea name="description" className="w-full border-2 pl-2 rounded-lg" id="" onChange={(e) => setEditorDescription(e.target.value)} value={editorDescription} rows={3}></textarea>
                </div>
                <div className='flex flex-col items-start justify-start w-full mb-6'>
                    <label htmlFor="content" className="font-normal font-poppins text-base">
                        Event Content
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
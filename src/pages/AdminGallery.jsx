import { useState } from "react";
import FormInput from "../admin/FormInput";
import CustomButton from "../admin/CustomButton";
import { toast, ToastContainer } from 'react-toastify';
import BaseURL from './BaseURL';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function AdminGallery() {

    const [gallery, setGallery] = useState('');

    const handleSubmit = async () => {
        console.log(`${gallery}`);

        const formData = new FormData();

        formData.append('featuredImage', gallery);

        const response = await axios.post(`${BaseURL()}/api/blog/addGallery`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        const notify = (param) => toast.success(`${param}`, {
            position: "top-right",
        });

        const showError = (param) => toast.error(`${param}`, {
            position: "top-right",
        });

        if (response.status === 200) {
            notify(response.data.message);
            setGallery(null);
        } else {
            showError(response.data.message);
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            <ToastContainer />
            <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full grid grid-cols-3">
                    {/* <FormInput value={gallery} onChange={(e) => setGallery(e.target.value)} title="Gallery Image" type="file" /> */}
                    <div className='flex flex-col items-start justify-start gap-1 w-full'>
                        <label htmlFor="" className='font-poppins'>Blog Image</label>
                        <input type="file" onChange={(e) => setGallery(e.target.files[0])} className="w-full h-10 border-2 pl-2 rounded-lg" name="" id="" />
                    </div>
                </div>
                <CustomButton title="Submit" onclick={() => { handleSubmit() }} />
            </div>
        </div>
    )
}

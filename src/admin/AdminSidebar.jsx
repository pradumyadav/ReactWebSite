import PropTypes from 'prop-types';
import { AiFillHome, AiOutlineGroup } from 'react-icons/ai';
import AdminNavItem from './AdminNavItem';
import { LiaBlogSolid, LiaNewspaperSolid } from 'react-icons/lia';
import { MdEmojiEvents } from 'react-icons/md';
import { FaLayerGroup, FaUsers } from 'react-icons/fa6';
import { GrGallery } from 'react-icons/gr';
import { IoBriefcase } from 'react-icons/io5';

export default function AdminSidebar({ currentPath }) {
    return (
        <div className="h-full flex fixed w-80 flex-col items-start justify-start p-5 space-y-4 bg-gray-50 shadow-2xl">
            {/* <h3 className="text-3xl text-center uppercase text-primary font-extrabold font-poppins">
                img
            </h3> */}
            <img src="/assets/images/logo.png" className='w-full h-auto object-contain' alt="" />
            <div className="w-full h-0.5 bg-primary"></div>
            <AdminNavItem
                title="Home"
                path="/admin/dashboard"
                icon={<AiFillHome />}
                active={currentPath === '/admin/dashboard'}
            />
            <AdminNavItem
                title="Add Blogs"
                path="/admin/newblog"
                icon={<LiaBlogSolid />}
                active={currentPath === '/admin/newblog'}
            />
            <AdminNavItem
                title="Blogs"
                path="/admin/blogs"
                icon={<LiaNewspaperSolid />}
                active={currentPath === '/admin/blogs'}
            />
            <AdminNavItem
                title="Categories"
                path="/admin/categories"
                icon={<FaLayerGroup />}
                active={currentPath === '/admin/categories'}
            />
            <AdminNavItem
                title="Sub Categories"
                path="/admin/sub-categories"
                icon={<AiOutlineGroup />}
                active={currentPath === '/admin/sub-categories'}
            />
            <AdminNavItem
                title="Testimonials"
                path="/admin/testimonials"
                icon={<FaUsers />}
                active={currentPath === '/admin/testimonials'}
            />
            <AdminNavItem
                title="Events"
                path="/admin/events"
                icon={<MdEmojiEvents />}
                active={currentPath === '/admin/events'}
            />
            <AdminNavItem
                title="Gallery"
                path="/admin/gallery"
                icon={<GrGallery />}
                active={currentPath === '/admin/gallery'}
            />
            <AdminNavItem
                title="Jobs"
                path="/admin/jobs"
                icon={<IoBriefcase />}
                active={currentPath === '/admin/jobs'}
            />
        </div>
    );
}

AdminSidebar.propTypes = {
    currentPath: PropTypes.string.isRequired,
};
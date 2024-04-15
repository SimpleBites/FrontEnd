import React from 'react';
import AdminNav from '../../adminNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import '../admin/dashboard.css';
import CustomLink from '../../CustomLink';

export default function Dashboard() {
  return (
    <div className="flex">
      <AdminNav />
        <div className="ml-10 flex ">
        <div className='flex'>
            <CustomLink to="/Admin/arecipes" className="dashboard-box">
            <FontAwesomeIcon icon={faUtensils} className='icon' />
            <div className="text">
                <p>Total food recipes</p>
                <p>5</p>
            </div>
            </CustomLink>
            <CustomLink to="/admin/Comments" className="dashboard-box">
            <FontAwesomeIcon icon={faComment} className='icon' />
            <div className="text">
                <p>All comments</p>
                <p>8</p>
            </div>
            </CustomLink>
            <CustomLink to="/admin/panel" className="dashboard-box">
            <FontAwesomeIcon icon={faUser} className='icon' />
            <div className="text">
                <p>All users</p>
                <p>20</p>
            </div>
            </CustomLink>
        </div>

        </div>
        </div>
       
  );
}

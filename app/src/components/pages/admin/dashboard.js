import React from 'react';
import AdminNav from '../../adminNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import '../admin/dashboard.css';

export default function Dashboard() {
  return (
    <div className="flex justify-start items-center h-screen">
      <AdminNav />
      <div className="ml-10 flex">
        <a href="/admin/Adminrecipes" className="dashboard-box">
          <FontAwesomeIcon icon={faUtensils} className='icon' />
          <div className="text">
            <p>Total food recipes</p>
            <p>5</p>
          </div>
        </a>
        <a href="/admin/Comments" className="dashboard-box">
          <FontAwesomeIcon icon={faComment} className='icon' />
          <div className="text">
            <p>All comments</p>
            <p>8</p>
          </div>
        </a>
        <a href="/admin/Users" className="dashboard-box">
          <FontAwesomeIcon icon={faUser} className='icon' />
          <div className="text">
            <p>All users</p>
            <p>20</p>
          </div>
        </a>
      </div>
    </div>
  );
}

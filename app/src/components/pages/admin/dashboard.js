import React from 'react';
import AdminNav from '../../adminNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import '../admin/dashboard.css';
import CustomLink from '../../CustomLink';
import { useState } from 'react';

export default function Dashboard() {
  const [recipeCount, setRecipeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0); 
  const [userCount, setUserCount] = useState(0);
  const handleSubmit = async () => {
    //event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/admin/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })

      const data = await response.json()
      console.log(data.commentCount.commentcount)
      setRecipeCount(data.recipeCount.recipecount)
      setUserCount(data.userCount.usercount)
      setCommentCount(data.commentCount.commentcount)

      
    }catch(error){
      console.log(error)
    }
  }

  handleSubmit()
  
  return (
    <div className="flex">
      <AdminNav />
        <div className="ml-10 flex ">
        <div className='flex'>
            <CustomLink to="/Admin/arecipes" className="dashboard-box">
            <FontAwesomeIcon icon={faUtensils} className='icon' />
            <div className="text">
                <p>Total food recipes</p>
                <p>{recipeCount}</p>
            </div>
            </CustomLink>
            <CustomLink to="/admin/Comments" className="dashboard-box">
            <FontAwesomeIcon icon={faComment} className='icon' />
            <div className="text">
                <p>All comments</p>
                <p>{commentCount}</p>
            </div>
            </CustomLink>
            <CustomLink to="/admin/panel" className="dashboard-box">
            <FontAwesomeIcon icon={faUser} className='icon' />
            <div className="text">
                <p>All users</p>
                <p>{userCount}</p>
            </div>
            </CustomLink>
        </div>

        </div>
        </div>
       
  );
  
}

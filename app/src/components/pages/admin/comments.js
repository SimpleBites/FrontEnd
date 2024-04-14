import React from 'react';
import AdminNav from '../../adminNav';

export default function Comments() {
  return (
    <div className="flex">
      <AdminNav />
      <div className='flex justify-start items-center h-screen'>
      <h1 className="text-3xl text-black ml-10">Comments :)</h1>
    </div>
    </div>
  );
}

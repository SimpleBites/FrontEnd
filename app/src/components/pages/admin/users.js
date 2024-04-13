import React from 'react';
import AdminNav from '../../adminNav';

export default function Users() {
  return (
    <div className="flex justify-start items-center h-screen">
      <AdminNav />
      <h1 className="text-3xl text-black ml-10">Users</h1>
    </div>
  );
}

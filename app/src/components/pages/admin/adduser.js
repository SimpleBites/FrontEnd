// Adduser.js

import React, { useState } from 'react';
import AdminNav from '../../adminNav';
import "./adduser.css";

export default function Adduser() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can replace this with your save functionality
        // Add your save functionality here
    };

    return (
        <div className="flex">
            <AdminNav />
            <div className="container-whole-page w-full">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="Users-panel-css ml-5 mt-4">Create user</h1>
                    <div className="flex">
                    </div>
                </div>
                <div className='blue-bar-2'></div>
                <div className='form-background'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="form-label">
                                <label htmlFor="username" className="text-align-adduser">Username</label>
                            </div>
                            <div className="form-input">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="text-area-adduser"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label">
                                <label htmlFor="email" className="text-align-adduser">Email</label>
                            </div>
                            <div className="form-input">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="text-area-adduser"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label">
                                <label htmlFor="password" className="text-align-adduser">Password</label>
                            </div>
                            <div className="form-input">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="text-area-adduser"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="sub-button5">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

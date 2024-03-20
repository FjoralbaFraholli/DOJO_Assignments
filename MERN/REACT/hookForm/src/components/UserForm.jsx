import React, { useState } from  'react';
    
const UserForm = () => {
    const [userList, setUserList] = useState({
      firtname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassw: '',
    });
  
    const handleChange = (e) => {
      
      e.preventDefault();

        const { name, value } = e.target;
        setUserList((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
  
    return (
      <div>
        <form className='form'>
          <div className='input'>
              <label>First Name </label>
              <input type="text" name="firstname" value={userList.firstname} onChange={(handleChange)} />
          </div>
          <div className='input'>
              <label>Last Name </label>
              <input type="text" name="lastname" value={userList.lastname} onChange={handleChange} />
          </div>
          <div className='input'>
              <label>Email </label>
              <input type="email" name="email" value={userList.email} onChange={handleChange} />
          </div>
          <div className='input'>
              <label>Password </label>
              <input type="password" name="password" value={userList.password} onChange={handleChange} />
          </div>
          <div className='input'>
              <label>Confirm Password </label>
              <input type="password" name="confirmpassw" value={userList.confirmpassw} onChange={handleChange} />
          </div>
        </form>

        <div className='display'>
          <h2>Your Form Data</h2>
          <p>First Name <span>{userList.firstname}</span></p>
          <p>Last Name <span>{userList.lastname}</span></p>
          <p>Email <span>{userList.email}</span></p>
          <p>Password <span>{userList.password}</span></p>
          <p>Confirm Password <span>{userList.confirmpassw}</span></p>
        </div>
      </div>
    );
  };
    
export default UserForm;
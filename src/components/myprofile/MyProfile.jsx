import "./MyProfile.css";

const MyProfile = () => {
  return (
    <section className='myprofile'>
      <form>
        <h3>Edit Your Profile</h3>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder='Md' id='firstName' />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder='Rimel' id='lastName' />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='rimel1111@gmail.com' id='email' />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" placeholder='Kingston, 5236, United State' id='address' />
          </div>

          <div className="form-group password-change">
            <label htmlFor="currentPassword">Password Changes</label>
            <input type="password" id='currentPassword' placeholder='Current Password' />
            <input type="password" id='newPassword' placeholder='New Password' />
            <input type="password" id='confirmNewPassword' placeholder='Confirm New Password' />
          </div>
        </div>

        <div className="form-btns">
          <button className='cancel'>Cancel</button>
          <button className='save'>Save Changes</button>
        </div>
      </form>
    </section>
  );
};

export default MyProfile;

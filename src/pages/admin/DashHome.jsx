// import React from 'react'

const DashHome = () => {
  return (
    <div>
      {/* Profile Card */}
      <div className="profile-card">
        <div className="image">
          <h3>Input Profile card Image</h3>
          <input type="file" id="file" />
        </div>
        <div className="title">
          <h3>Input Profile card Title</h3>
          <input type="text" id="title" />
        </div>
        <div className="description">
          <h3>Input Profile card Description</h3>
          <textarea id="description"></textarea>
        </div>

        <div className="socal-link">
          <div className="facebook">
            <h3>Input Facebook Link</h3>
            <input type="text" id="facebook" />
          </div>
          <div className="twitter">
            <h3>Input Twitter Link</h3>
            <input type="text" id="twitter" />
          </div>
          <div className="linkedin">
            <h3>Input LinkedIn Link</h3>
            <input type="text" id="linkedin" />
          </div>
          <div className="github">
            <h3>Input Github Link</h3>
            <input type="text" id="github" />
          </div>
        </div>

        <div className="contact-data">
          <div className="email">
            <h3>Input Email</h3>
            <input type="text" id="email" />
          </div>
          <div className="phone">
            <h3>Input Phone</h3>
            <input type="text" id="phone" />
          </div>
          <div className="address">
            <h3>Input Address</h3>
            <input type="text" id="address" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashHome;

import React from "react";

const SocialMediaCard = () => {
  return (
    <div className="social-media-card">
      <div className="profile-picture"></div>

      <h2 className="username">aliu_manaf</h2>
      <p className="bio">Short bio goes here...</p>
      <div className="follower-count">Followers: 1000</div>
      <button className="follow-button">Follow</button>
    </div>
  );
};

export default SocialMediaCard;

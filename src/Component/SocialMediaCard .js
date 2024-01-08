import React, { useState } from "react";

const SocialMediaCard = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  const handleFollow = () => {
    setCount(count + 1);
  };

  const handlePostText = (text) => {
    setMessage(text);
  };

  const handlePost = () => {
    if (message.trim() !== "") {
      const currentDateTime = new Date().toLocaleString();
      const postWithDateTime = (
        <div>
          {message}
          <br />
          <br />
          {currentDateTime}
        </div>
      );
      setPosts([...posts, postWithDateTime]);
      setMessage("");
    }
  };

  return (
    <div>
      <div className="social-media-containers">
        <div className="social-media-card">
          <div className="profile-picture"></div>
          <h2 className="username">aliu_manaf</h2>
          <p className="bio">Believe and Focus</p>
          <div className="follower-count">Followers: {count}</div>
          <button className="follow-button" onClick={handleFollow}>
            Follow
          </button>
        </div>
        <div className="post-message">
          <p>Something in your mind</p>
          <textarea
            value={message}
            onChange={(e) => handlePostText(e.target.value)}
          />
          <br />
          <button className="follow-button" onClick={handlePost}>
            Post
          </button>
          <div className="posts">
            {posts.length > 0 ? (
              <>
                <h3 className="h3-tag">Recent Posts:</h3>
                <div className="post-list">
                  {posts.map((post, index) => (
                    <p key={index}>
                      {post}
                      <hr />
                    </p>
                  ))}
                </div>
              </>
            ) : (
              "no post yet"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;

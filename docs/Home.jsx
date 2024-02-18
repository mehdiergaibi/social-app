import React from "react";
import Navbar from "./HomeCompos/Navbar";
import Stories from "./HomeCompos/Stories";
import { IoAddCircle } from "react-icons/io5";

import "./home.css";
import AddMedia from "./HomeCompos/AddMedia";
import Post from "./HomeCompos/Post";

let users = [
  {
    name: "Tonya",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Bonnie",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Javier",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Eli",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Layla",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "melinda",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  {
    name: "cindy",
    image: "https://randomuser.me/api/portraits/women/86.jpg",
  },
  {
    name: "christian",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    name: "anchez",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];
let posts = [
  {
    name: "Tonya",
    post: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "yesterday",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Bonnie",
    post: "https://randomuser.me/api/portraits/women/51.jpg",
    time: "11 PM",
    profile: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Javier",
    post: "https://randomuser.me/api/portraits/men/50.jpg",
    time: "just now",
    profile: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

function Home() {
  window.onload = function () {
    const scrollContainer = document.getElementById("stories_bar");

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  };

  return (
    <div>
      <Navbar />
      <main id="stories_bar" className="stories">
        <section className="storie">
          <img
            className="storie-image"
            src="https://randomuser.me/api/portraits/men/62.jpg"
          />

          <IoAddCircle className="add-icon" />
          <p className="storie-name">You</p>
        </section>
        {users.map((user) => (
          <Stories key={user.name} image={user.image} user_name={user.name} />
        ))}
      </main>
      <AddMedia />
      {posts.map((post) => (
        <Post
          key={post.name}
          profile={post.profile}
          post={post.post}
          time={post.time}
          uname={post.name}
        />
      ))}
    </div>
  );
}

export default Home;

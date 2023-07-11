import React from "react";
import { FaRegComment, FaShareAlt } from "react-icons/fa";
import "./Blogs.css";
export const Blogs = () => {
  const elements = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      author: "george",
      date: "12 May 2023",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      title: "Girl in the nature",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      author: "susan",
      date: "12 june 2022",
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam delectus itaque consectetur, eius voluptatum molestiae.",
      title: "Amazing Character Corporation",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
      author: "criste",
      date: "31 july 2024",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere obcaecati maxime qui necessitatibus iste libero?",
      title: "Vactor Abstract Character",
    },
  ];

  return (
    <div className="Blogs">
      <h1 className="big-title-all"> Our Latest Blogs </h1>
      <main className="blogs-main">
        {elements.map((element) => {
          return (
            <div className="single-blog">
              <img src={element.img} alt="img" />
              <div className="single-blog_short-desc">
                <span>{element.author}</span>
                <p>{element.date}</p>
              </div>
              <h4>{element.title}</h4>
              <span  className="single-blog_big-desc">{element.text}</span>
              <footer>
                <button>Read More</button>
                <div>
                  <span>
                    <FaRegComment />
                  </span>
                  <span>
                    <FaShareAlt />
                  </span>
                </div>
              </footer>
            </div>
          );
        })}
      </main>
    </div>
  );
};

// src/components/BlogCard.jsx
"use client";

import Image from "next/image";

const BlogCard = ({ image, date, title, description, tags,link }) => {
  return (
    <div className="card border-0 shadow-sm h-100 d-flex">
      <div style={{ height: "200px", position: "relative" }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="card-body">
        <small className="text-muted">{date}</small>
        <h5 className="card-title mt-2">{title}</h5>
        <p className="card-text text-secondary">{description}</p>
        <div className="d-flex justify-content-between align-items-center mb-2 ">

        <div className="d-flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge bg-dark">{tag}</span>
          ))}
        </div>
        <div><a href={link} className="btn btn-sm border-dark" >Read More</a></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

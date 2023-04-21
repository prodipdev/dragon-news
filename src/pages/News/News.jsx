import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const { image_url, title, details, category_id } = useLoaderData();

  return (
    <div className="card p-2">
      <img src={image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{details}</p>
        <Link to={""} className="btn btn-danger rounded-0">
          <FaArrowLeft className="pe-1" /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default News;

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsight from "../Shared/EditorInsight/EditorInsight";

const News = () => {
  const { image_url, title, details, category_id } = useLoaderData();

  return (
    <>
      <h3 className="mb-3">Dragon News</h3>
      <div className="card p-2">
        <img src={image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{details}</p>
          <Link
            to={`/category/${category_id}`}
            className="btn btn-danger rounded-0"
          >
            <FaArrowLeft className="pe-1" /> All news in this category
          </Link>
        </div>
      </div>
      <EditorInsight></EditorInsight>
    </>
  );
};

export default News;

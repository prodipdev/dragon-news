import moment from "moment";
import React from "react";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, image_url, author, title, details, rating, total_view } = news;
  return (
    <div className="card mb-3">
      <div className="card-header d-flex align-items-center">
        <div className="d-flex align-items-center gap-2 flex-grow-1">
          <img
            style={{
              height: "45px",
            }}
            className="rounded-circle"
            src={author?.img}
            alt=""
          />
          <div>
            <h6>{author?.name}</h6>
            <p className="mb-0 fs-6">
              {moment(author?.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div className="d-flex gap-2 fs-5 text-secondary">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <img className="w-100" src={image_url} alt="" />
        <p className="card-text">
          {details.length < 250 ? (
            details
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </p>
      </div>
      <div className="card-footer text-body-secondary d-flex align-items-center gap-1">
        <div className="d-flex gap-1 flex-grow-1">
          <Rating
            className="text-warning fs-5 d-flex align-items-center"
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            readonly
          />
          <span className="mt-1">{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye>
          <span className="ps-1">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

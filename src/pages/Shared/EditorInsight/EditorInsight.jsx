import React from "react";
import img1 from "../../../assets/editorsInsight1.png";
import img2 from "../../../assets/editorsInsight2.png";
import img3 from "../../../assets/editorsInsight3.png";
import { FaCalendar } from "react-icons/fa";
const EditorInsight = () => {
  return (
    <div className="mt-5">
      <h3 className="mb-3">Editors Insight</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h5>
              <hr className="mb-1" />
              <p className="card-text text-secondary d-flex align-items-center gap-1">
                <FaCalendar /> Jan 7, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h5>
              <hr className="mb-1" />
              <p className="card-text text-secondary d-flex align-items-center gap-1">
                <FaCalendar /> Jan 21, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h5>
              <hr className="mb-1" />
              <p className="card-text text-secondary d-flex align-items-center gap-1">
                <FaCalendar /> Jan 4, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorInsight;

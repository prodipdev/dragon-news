import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h5>All Category</h5>
      <div>
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="d-block text-black text-decoration-none p-2 focus-ring"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;

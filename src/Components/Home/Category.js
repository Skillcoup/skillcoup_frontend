import React from "react";
import "./Categories.css"

const Category = (props) => {
  return (
    <>
                              {/* categoty start */}
                              <div href="#" class="category-box">
                            <div class="category-box-icon">
                            <props.Icon />
                            </div>
                            <div class="category-box-content">
                                <h3>{props.title}</h3>

                            </div>
                            <div class="overlay">
                                <p>{props.description}</p>
                            </div>

                        </div>
                        {/* categoty end */}
    </>
  );
}

export default Category;
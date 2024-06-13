import React from "react";

const MenuCard = ({ menuData }) => {
  //console.log(menuData);
  return (
    <>
      {menuData.map((curElement) => {
        const { name, id, image, price, category, description } = curElement;
        return (
          <div className="col-lg-4 col-md-6 mb-3" key={id}>
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
              <h4 className="position-absolute top-0 start-0 number">{id}</h4>
              <div className="card-body">
                <h5 className="card-title text-muted">{category}</h5>
                <div className="mt-4">
                  <h4 className="card-title">{name}</h4>
                  <h4 className="text-success">{price}</h4>
                  <p className="card-text">{description}</p>
                  <a href=" " className="btn btn-success">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;

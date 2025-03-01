import React from "react";

const History = ({image, className}) => {

 
  return (
    <div className={`w-full ${className}`}>
      {image.map((item, index) => (
        <div key={index}>
          <div className="w-full">
            {item.articles.map((article, idx) => (
              <div key={idx} className="">
                <img
                  src={article.image}
                  alt={article.alt}
                  className={`object-cover w-full`}
                />
              </div>
            ))}
          </div>
        </div>
       ))}
    </div>
  );
};

export default History;

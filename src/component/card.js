import { useState } from "react";
import "./card.css";

const Card = ({
  jdUid,
  jdLink,
  jobDetailsFromCompany,
  maxJdSalary,
  minJdSalary,
  salaryCurrencyCode,
  location,
  minExp,
  maxExp,
  jobRole,
  companyName,
  logoUrl,
}) => {
  const maxContent = 500;
  const [showDescription, setShowDescription] = useState(false);
  const description = jobDetailsFromCompany;

  const handleToggleDescription = () => {
    setShowDescription((prevShow) => !prevShow);
  };
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="logo">
          <img src={logoUrl} alt="logo" />
        </div>
        <div className="card-header-detail">
          <p className="p1">{companyName}</p>
          <p className="p2">{jobRole}</p>
          <p className="p3">{location}</p>
        </div>
      </div>
      <div className="card-salary">
        <p>Estimated Salary: {salaryCurrencyCode} {minJdSalary && minJdSalary + ' -'}  {maxJdSalary} LPA</p>
      </div>
      <div className="card-about">
        <p className="title">About Company:</p>
        <p className="description">
          {description.length <= maxContent
            ? description
            : showDescription
            ? description
            : `${description.substring(0, maxContent)}...`}
        </p>
        {description.length > maxContent && (
          <div
            className={`toggle-btn-container ${!showDescription ? "show" : ""}`}
          >
            <div className="toggle-btn" onClick={handleToggleDescription}>
              {showDescription ? "Show less" : "Show more"}
            </div>
          </div>
        )}
      </div>
      <div className="card-bottom">
        <p className="p1">Minium Experience</p>
        <p className="p2">{minExp ? `${minExp} Years` :'Not Defined'}</p>
        <a href={jdLink} target="_blank" rel="noreferrer"> ⚡ Easy Apply</a>
      </div>
    </div>
  );
};
export default Card;

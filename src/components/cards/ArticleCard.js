import React from "react";
import "./ArticleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import UnLogo from "../../assets/images/un.png";
const ArticleCard = ({ name, lang, flag, continent, population, un }) => {
  //Object.keys(lang).map((key,i) =>lang[key])
  return (
    <article className="card">
      <div className="content">
        <figure>
          <img src={flag} alt="" />
        </figure>
        <div className="content-text">
          <p className="lg">{name}</p>
          <p className="light-text">{continent}</p>

          <p>
            <span className="icon-m">
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            {population}
          </p>
          <p>
            <span className="icon-m">
              <FontAwesomeIcon icon={faLanguage} />
            </span>
            {lang && Object.keys(lang).map((key) => lang[key] + " ")}
          </p>
        </div>
        {un && (
          <div className="un-content">
            <img src={UnLogo} alt="Un-Logo" className="un-logo" />
            <div className="tooltip"> UN Member</div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ArticleCard;

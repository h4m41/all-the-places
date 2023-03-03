import React from "react";
import "./ArticleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faUserGroup } from "@fortawesome/free-solid-svg-icons";
const ArticleCard = ({ name, lang, flag, continent, population }) => {
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
      </div>
    </article>
  );
};

export default ArticleCard;

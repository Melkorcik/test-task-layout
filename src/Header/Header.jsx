import { useState } from "react";
import Descriptions from "./TextContent/List";
import TextContent from "./TextContent/TextContent";
import HeaderImage from "./HeaderImage";
import "./style.css";

export default function Header(props) {
  const [classOne, setClass] = useState("one-big");
  const [classTwo, setClassTwo] = useState("two-l");
  const [classThree, setClassThree] = useState("three-l");

  const [content, setContent] = useState(Descriptions[0]);

  /*Присвоение значения по переданному индексу */
  const setContentOnIndex = (index) => {
    setContent(Descriptions[index]);
    props.getI(index);
  };

  /*Переключение по меню */
  const Scale = (e) => {
    e.preventDefault();
    switch (e.target.className) {
      case "one-l":
        setClass("one-big");
        setClassTwo("two-l");
        setClassThree("three-l");
        setContentOnIndex(0);
        break;
      case "two-l":
        setClass("one-l");
        setClassTwo("two-big");
        setClassThree("three-l");
        setContentOnIndex(1);
        break;
      case "three-l":
        setClass("one-l");
        setClassTwo("two-l");
        setClassThree("three-big");
        setContentOnIndex(2);
        break;
      default:
        break;
    }
  };

  return (
    <header>
      <div className="line-tablet"></div>
      <div className="header-container">
        <img src={HeaderImage[0]} className="header-img"/>
        <div className="header-container-part-1">
          <h1 className="title">РЕАЛИЗАЦИЯ</h1>
          <div className="container-text-content">
            <p className="paragraph-part-one">
              Берем на себя все этапы по локализации
            </p>
            <p className="paragraph-part-two">
              продуктов китайский производителей.
              <div className="line"></div>
            </p>
          </div>
        </div>
        <div className="header-container-part-2">
          <nav>
            <ul className="list-links">
              <li className={classOne}>
                <a href="" className={classOne} onClick={Scale}>
                  ЛОКЛИЗАЦИЯ
                </a>
              </li>
              <li className={classTwo}>
                <a href="" className={classTwo} onClick={Scale}>
                  РЕГИСТРАЦИЯ
                </a>
              </li>
              <li className={classThree}>
                <a href="" className={classThree} onClick={Scale}>
                  ВНЕДРЕНИЕ
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <div className="add-link">
              <li className="d-l">
                <a href="" className="d">
                  ПОДРОБНЕЕ
                </a>
              </li>
            </div>
            <div className="line-next"></div>
            <TextContent
              content={content}
              index={Descriptions.indexOf(content)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

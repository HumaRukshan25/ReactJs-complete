import "./cards.css";
import { cardData } from "./data";
const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="header">Animals Gallery</div>
        <div className="container">
          {cardData.map((data) => {
            return (
              <>
                <div className="card">
                  <div className="image"><img src={data.imgUrl} /></div>
                  <div className="title">{data.title}</div>
                  <div className="desc">{data.desc}</div>
                </div>
                
              </>
            );
          })}
         
        </div>
      </div>
    </>
  );
};
export default Cards;

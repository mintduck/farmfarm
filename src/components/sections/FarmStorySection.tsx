import {
    farmStoryDescription,
    farmStoryEyebrow,
    farmStoryItems,
    farmStoryTitle,
  } from "../../data/site";
  
  function FarmStorySection() {
    return (
      <section className="section farm-story" id="farm-story">
        <div className="container farm-story__inner">
          <div className="farm-story__content">
            <p className="section__eyebrow">{farmStoryEyebrow}</p>
            <h2 className="section__title">{farmStoryTitle}</h2>
            <p className="section__description">{farmStoryDescription}</p>
          </div>
  
          <ul className="farm-story__list">
            {farmStoryItems.map((item) => (
              <li className="farm-story__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  
  export default FarmStorySection;
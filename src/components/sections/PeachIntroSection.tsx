import {
    peachFeatureItems,
    peachIntroDescription,
    peachIntroEyebrow,
    peachIntroTitle,
  } from "../../data/site";
  
  function PeachIntroSection() {
    return (
      <section className="section peach-intro" id="peach-intro">
        <div className="container">
          <p className="section__eyebrow">{peachIntroEyebrow}</p>
          <h2 className="section__title">{peachIntroTitle}</h2>
          <p className="section__description">{peachIntroDescription}</p>
  
          <div className="feature-grid">
            {peachFeatureItems.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default PeachIntroSection;
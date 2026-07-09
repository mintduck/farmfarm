import {
    galleryDescription,
    galleryEyebrow,
    galleryImages,
    galleryTitle,
  } from "../../data/site";
  
  function GallerySection() {
    return (
      <section className="section gallery" id="gallery">
        <div className="container">
          <p className="section__eyebrow">{galleryEyebrow}</p>
          <h2 className="section__title">{galleryTitle}</h2>
          <p className="section__description">{galleryDescription}</p>
  
          <div className="gallery__grid">
            {galleryImages.map((image) => (
              <figure className="gallery__item" key={image.src}>
                <img
                  className="gallery__image"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default GallerySection;
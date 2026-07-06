import CTAButton from "../common/CTAButton";
import {
  heroDescription,
  heroEyebrow,
  heroTitle,
  orderFormUrl,
  primaryCTA,
} from "../../data/site";

function HeroSection() {
  return (
    <section className="section hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="section__eyebrow">{heroEyebrow}</p>

          <h1 className="section__title">{heroTitle}</h1>

          <p className="section__description">{heroDescription}</p>
        </div>

        <figure className="hero__visual">
          <img
            className="hero__image"
            src="/images/hero-peach.jpg"
            alt="복숭아 참고 이미지"
            width={1080}
            height={810}
          />

          <figcaption className="hero__notice">
            사진은 페이지 분위기를 돕기 위한 참고 이미지이며,
            <br />
            실제 수확 사진은 준비되는 대로 교체할 예정입니다.
          </figcaption>
        </figure>

        <div className="hero__actions">
        <CTAButton
          href={orderFormUrl}
          ariaLabel="네이버폼에서 복숭아 예약 주문하기"
          className="cta-button hero__cta"
        >
          {primaryCTA}
        </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
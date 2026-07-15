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

          <div className="hero__actions">
            <CTAButton
              href={orderFormUrl}
              ariaLabel="네이버폼에서 홍백복숭아 예약 주문하기"
              className="cta-button hero__cta"
            >
              {primaryCTA}
            </CTAButton>
          </div>
        </div>

        <figure className="hero__visual">
          <img
            className="hero__image"
            src="/images/peach-packaging.jpg"
            alt="배송을 기다리는 뉴스톡팜 홍백복숭아"
            width={1080}
            height={810}
          />

          <figcaption className="hero__notice">
            7월 13일 아침 수확하여 포장한 홍백복숭아입니다.
            <br />
            아침에 갓 딴 복숭아를 선별하여 보내드립니다.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default HeroSection;
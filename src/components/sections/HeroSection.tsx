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
            src="/images/peach-closeup.jpg"
            alt="경북 영천 과수원에서 자라고 있는 홍백복숭아"
            width={1080}
            height={810}
          />

          <figcaption className="hero__notice">
            오늘 아침 경북 영천 과수원에서 찍은 홍백복숭아입니다.
            <br />
            수확 사진은 준비되는 대로 추가로 업데이트할 예정입니다.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default HeroSection;
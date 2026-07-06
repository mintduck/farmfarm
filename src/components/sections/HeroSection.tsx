import CTAButton from "../common/CTAButton";
import {
  heroDescription,
  heroEyebrow,
  heroTitle,
  orderFormUrl,
  primaryCTA,
  secondaryCTA,
} from "../../data/site";

function HeroSection() {
  return (
    <section className="section">
      <div className="container">
        <p className="section__eyebrow">{heroEyebrow}</p>
        <h1 className="section__title">{heroTitle}</h1>
        <p className="section__description">{heroDescription}</p>

        <p
          style={{
            marginTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <CTAButton href={orderFormUrl} ariaLabel={primaryCTA}>
            {primaryCTA}
          </CTAButton>
          <CTAButton href={orderFormUrl} ariaLabel={secondaryCTA}>
            {secondaryCTA}
          </CTAButton>
        </p>

        <figure
          style={{
            margin: "32px 0 0",
            aspectRatio: "4 / 3",
            minHeight: 220,
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            background: "var(--color-primary-soft)",
          }}
        >
          <img
            src="/images/hero-peach.jpg"
            alt="복숭아를 연상시키는 따뜻한 분위기의 참고 이미지"
            width={1080}
            height={810}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </figure>
      </div>
    </section>
  );
}

export default HeroSection;

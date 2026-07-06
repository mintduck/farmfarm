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
            alt="부모님이 직접 수확해 고른 복숭아가 담긴 바구니"
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

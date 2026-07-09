import CTAButton from "../common/CTAButton";
import {
  orderFormUrl,
  orderGuideEyebrow,
  orderGuideItems,
  orderGuideTitle,
  primaryCTA,
} from "../../data/site";

function OrderGuideSection() {
  return (
    <section className="section order-guide" id="order-guide">
      <div className="container">
        <p className="section__eyebrow">{orderGuideEyebrow}</p>
        <h2 className="section__title">{orderGuideTitle}</h2>

        <div className="order-guide__grid">
          {orderGuideItems.map((item) => (
            <article className="order-guide__card" key={item.title}>
              <h3 className="order-guide__title">{item.title}</h3>
              <p className="order-guide__description">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="order-guide__actions">
          <CTAButton
            href={orderFormUrl}
            ariaLabel="네이버폼에서 홍백복숭아 예약 주문하기"
            className="cta-button order-guide__cta"
          >
            {primaryCTA}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default OrderGuideSection;
import CTAButton from "../common/CTAButton";
import {
  footerDescription,
  orderFormUrl,
  primaryCTA,
  siteTitle,
} from "../../data/site";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">{siteTitle}</p>
          <p className="site-footer__description">{footerDescription}</p>
        </div>

        <CTAButton
          href={orderFormUrl}
          ariaLabel="네이버폼에서 홍백복숭아 예약 주문하기"
          className="cta-button site-footer__cta"
        >
          {primaryCTA}
        </CTAButton>
      </div>
    </footer>
  );
}

export default Footer;
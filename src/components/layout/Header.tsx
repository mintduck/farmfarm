import CTAButton from "../common/CTAButton";
import { orderFormUrl, primaryCTA, siteTitle } from "../../data/site";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/" aria-label="처음 화면으로 이동">
          {siteTitle}
        </a>

        <CTAButton
          href={orderFormUrl}
          ariaLabel="네이버폼에서 복숭아 예약 주문하기"
          className="cta-button site-header__cta"
        >
          {primaryCTA}
        </CTAButton>
      </div>
    </header>
  );
}

export default Header;
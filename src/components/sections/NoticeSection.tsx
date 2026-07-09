import { noticeDescription, noticeTitle } from "../../data/site";

function NoticeSection() {
  return (
    <section className="section notice" id="notice">
      <div className="container">
        <div className="notice__box">
          <h2 className="notice__title">{noticeTitle}</h2>
          <p className="notice__description">{noticeDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default NoticeSection;
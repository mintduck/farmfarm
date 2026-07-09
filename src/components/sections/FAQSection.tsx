import { faqItems } from "../../data/site";

function FAQSection() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <p className="section__eyebrow">자주 묻는 질문</p>
        <h2 className="section__title">예약 전에 궁금할 수 있는 내용을 정리했어요.</h2>

        <div className="faq__list">
          {faqItems.map((item) => (
            <article className="faq__item" key={item.question}>
              <h3 className="faq__question">{item.question}</h3>
              <p className="faq__answer">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
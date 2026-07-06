function App() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="section__eyebrow">부모님의 첫 수확</p>
          <h1 className="section__title">
            부모님이 처음 수확한 복숭아를 소개합니다.
          </h1>
          <p className="section__description">
            직접 수확하고 하나씩 살펴 고른 복숭아를 가까운 분들께
            조심스럽게 소개하려고 합니다.
          </p>
          <p style={{ marginTop: 24 }}>
            <a
              className="cta-button"
              href="https://form.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              예약 주문하기
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
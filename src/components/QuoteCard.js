import React from "react";

const QuoteCard = () => {
  return (
    <section className="quote">
      <div className="quote-card">
        <div className="background" />

        <div className="headline">
          Life is too short for&nbsp;poor code and bad&nbsp;beer.{" "}
          <span>Never compromise on&nbsp;those&nbsp;two.</span>
        </div>

        <div className="body">
          <p>
            Nothing more exciting than a smart idea coming to production.
            Solving problems is what we do. Solving them smart is what I do.
          </p>
          <br />
          <p>
            As time goes by, I realize more the purpose I have on this planet -
            maybe not only on this one.. - write clean and quality code. Turning
            your hobby into a career is the only and best advice I can give you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteCard;

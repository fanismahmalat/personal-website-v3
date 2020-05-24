import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const ScrollToTop = () => {
  useEffect(() => {
    let progressElement = document.getElementById("progress-wrap");
    let progressPath = document.querySelector(".progress-wrap path");

    //Scroll back to top
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    let updateProgress = () => {
      let documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      let scroll = document.documentElement.scrollTop;
      let height = documentHeight - window.innerHeight;

      let progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    let offset = 50;

    const scrollListener = () => {
      updateProgress();

      if (
        document.body.scrollTop > offset ||
        document.documentElement.scrollTop > offset
      ) {
        progressElement.classList.add("active-progress");
      } else {
        progressElement.classList.remove("active-progress");
      }
    };

    window.addEventListener("scroll", scrollListener);

    progressElement.onclick = e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v0.0.4/css/unicons.css"
        />
      </Helmet>
      <div className="progress-wrap" id="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default ScrollToTop;

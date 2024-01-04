import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-accordion">
              <p>WE aere the World Best IT Company</p>
              <h1>Welcome to My Website</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edgeg IT solutions? Look no fgurther! At Adnan Website
                we specialize in providing innovative IT services and solutions
                tailored to meet your uniqur needs.
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">connect now</button>
                  </a>
                  <a href="/services">
                    <button className="btn">learn more</button>
                  </a>
                </div>
              </p>
            </div>

            {/* //Hero Images */}
            <div className="hero-image">
              <img
                src="/images/dev.png"
                alt="coding together"
                width="560"
                height="500"
              ></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

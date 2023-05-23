import Image from "next/image";

function AboutUs(): JSX.Element {
  const about = [
    {
      title: [
        { id: 1, text: "Nado" },
        { id: 2, text: "Bebe" },
        { id: 3, text: "Byambaa" },
      ],
    },
    {
      description: [
        { id: 1, text: "Welcome to " },
        { id: 2, text: "sdkjfsldjf" },
        { id: 3, text: "iorjeoifj" },
      ],
    },
  ];

  return (
    <>
      <section className="section">
        <div className="section__container">
          <div className="content">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm
              <span>
                Narandorj
                <br />a
              </span>
              Web Developer
            </h1>
            <p className="description">
              Welcome to my web developer portfolio! I'm Narandorj, a skilled
              and creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety
              of web projects, ranging from personal blogs to e-commerce
              platforms.
            </p>
            <div className="action__btns">
              <button className="hire__me">Hire Me</button>
              <button className="portfolio">Portfolio</button>
            </div>
          </div>
          <div className="image">
            <Image
              src="/images/nado.jpg "
              width={500}
              height={500}
              alt="profile"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <div className="image">
            <Image
              src="/images/bebe.jpg "
              width={500}
              height={500}
              alt="profile"
            />
          </div>
          <div className="content">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm
              <span>
                Byambajav
                <br />a
              </span>
              Web Developer
            </h1>
            <p className="description">
              Welcome to my web developer portfolio! I'm Byambajav, a skilled
              and creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety
              of web projects, ranging from personal blogs to e-commerce
              platforms.
            </p>
            <div className="action__btns">
              <button className="hire__me">Hire Me</button>
              <button className="portfolio">Portfolio</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <div className="content">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm
              <span>
                Byambasuren
                <br />a
              </span>
              Web Developer
            </h1>
            <p className="description">
              Welcome to my web developer portfolio! I'm Byambasuren, a skilled
              and creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety
              of web projects, ranging from personal blogs to e-commerce
              platforms.
            </p>
            <div className="action__btns">
              <button className="hire__me">Hire Me</button>
              <button className="portfolio">Portfolio</button>
            </div>
          </div>
          <div className="image">
            <Image
              src="/images/byamba.jpg "
              width={500}
              height={500}
              alt="profile"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;

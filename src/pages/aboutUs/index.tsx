import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

function AboutUs(): JSX.Element {
  return (
    <>
      <div className="flex max-w-full mx-auto gap-8 overflow-hidden">
        <section id="section">
          <div className="aboutUsCard">
            <div id="imgBox">
              <Image
                id="aboutImg"
                src="/images/nado.jpg"
                width={300}
                height={200}
                alt="aboutUs"
              />
            </div>
            <div id="content">
              <h2 className="text-black-700">Hello I`m Narandorj </h2>
              <p className="mt-5">
                Welcome to my web developer portfolio! I'm Narandorj, a skilled
                and creative web developer with a passion for creating
                beautiful, responsive, and user-friendly websites.
              </p>
              <a target="_blank" href="https://github.com/NaDo2383">
                <div>
                  <AiFillGithub size={30} />
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="section">
          <div className="aboutUsCard">
            <div id="imgBox">
              <Image
                id="aboutImg"
                src="/images/z2.jpg"
                width={300}
                height={200}
                alt="aboutUs"
              />
            </div>
            <div id="content">
              <h2>Hello I`m Byambasuren</h2>
              <p className="mt-5">
                Welcome to my web developer portfolio! I'm Byambasuren, a
                skilled and creative web developer with a passion for creating
                beautiful, responsive, and user-friendly websites.
              </p>
              <a target="_blank" href="https://github.com/hedystrong">
                <div>
                  <AiFillGithub size={30} />
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="section">
          <div className="aboutUsCard">
            <div id="imgBox">
              <Image
                id="aboutImg"
                src="/images/bebe.jpg"
                width={300}
                height={200}
                alt="aboutUs"
              />
            </div>
            <div id="content">
              <h2>Hello I`m Byambajav</h2>
              <p className="mt-5">
                Welcome to my web developer portfolio! I'm Byambajav, a skilled
                and creative web developer with a passion for creating
                beautiful, responsive, and user-friendly websites.
              </p>
              <a target="_blank" href="https://github.com/Bymbajaw">
                <div>
                  <AiFillGithub size={30} />
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default AboutUs;

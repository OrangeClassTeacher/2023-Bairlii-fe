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
                src="https://i.postimg.cc/sDXv1gNy/DSC09575.jpg"
                width={300}
                height={200}
                alt="aboutUs"
                className="object-fill  "
              />
            </div>
            <div id="content">
              <h2 className="text-black-700">Сайн уу, Би бол Нарандорж </h2>
              <p className="mt-5">
                2022 оны 9 сараас эхлэн Pinecone academy-д суралцаж амжилттай төгсөх гэж байгаа. Уг вебсайтыг хийхэд өөрийн сурч мэдсэн бүхий л зүйлсийг ашиглан Full stack-аар ажилласан болно.
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
                src="https://i.postimg.cc/ZnjB29ss/DSC09609.jpg"
                width={300}
                height={200}
                alt="aboutUs"
              />
            </div>
            <div id="content">
              <h2>Hello I`m Byambasuren</h2>
              <p className="mt-5">
                Welcome to my web developer portfolio! I&#39;m Byambasuren, a
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
                src="https://i.postimg.cc/yx6Wm16m/DSC09545.jpg"
                width={300}
                height={200}
                alt="aboutUs"
              />
            </div>
            <div id="content">
              <h2>Hello I`m Byambajav</h2>
              <p className="mt-5">
                Welcome to my web developer portfolio! I&#39;m Byambajav, a skilled
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

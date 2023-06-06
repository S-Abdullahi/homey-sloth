import React from "react";
import { BreadCrumb } from "../components";
import dummy from "../assets/dummy.jpg";

const About = () => {
  return (
    <div className="text-2xl">
      <BreadCrumb title="About" />
      <section className="md:flex md:gap-20 mx-5 my-5 lg:mx-40 md:my-20">
        <div className="lg:w-1/2 mb-10">
          <img src={dummy} alt="dummy" className="rounded-md" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="section-head">Our Story</h2>
          <div className="section-head-underline"></div>
          <p className="section-paragraph">Welcome to HomeySloth!</p>
          <p className="section-paragraph ">
            At HomeySloth, we believe that your home should be a sanctuary of
            comfort and relaxation. That's why we specialize in providing you
            with the coziest and most comfortable furniture options available.
            From plush sofas to snug armchairs, we have everything you need to
            create a space where you can truly unwind.
          </p>
          <p className="section-paragraph">
            We understand that finding furniture that combines style, quality,
            and comfort can be a challenge. That's why we carefully curate our
            collection to ensure that each piece meets our high standards. Our
            team of experts handpicks furniture that not only looks great but
            also feels amazing. We prioritize materials that are soft, durable,
            and environmentally friendly, so you can enjoy your furniture
            guilt-free.
          </p>
          <p className="section-paragraph">
            Whether you're looking to revamp your living room, create a cozy
            reading nook, or add a touch of comfort to your bedroom, HomeySloth
            has the perfect pieces for you. Our extensive range of furniture
            includes sofas, sectionals, recliners, accent chairs, ottomans, and
            more. We offer a variety of styles, colors, and sizes to suit every
            taste and space.
          </p>
          <p className="section-paragraph">
            At HomeySloth, we value your satisfaction above all else. Our
            dedicated customer service team is always ready to assist you,
            ensuring a smooth and enjoyable shopping experience. We provide
            detailed product descriptions and images to help you make informed
            decisions, and our secure and convenient online platform makes
            purchasing a breeze.
          </p>
          <p className="section-paragraph">
            We also offer hassle-free delivery straight to your doorstep. Sit
            back and relax while we take care of the logistics, ensuring that
            your new furniture arrives safely and on time. We believe that your
            comfort shouldn't be compromised by the shopping process, and we
            strive to make it as convenient as possible.
          </p>
          <p className="section-paragraph">
            Join the HomeySloth family today and discover the joy of comfortable
            living. Create a space where relaxation and tranquility are the top
            priority. Experience the coziness, quality, and style that
            HomeySloth has to offer. We're here to help you make your house a
            home.
          </p>
          <p className="section-paragraph">Thank you for choosing HomeySloth!</p>
          <p className="The Homey Sloth Team">The HomeySloth Team</p>
        </div>
      </section>
    </div>
  );
};

export default About;

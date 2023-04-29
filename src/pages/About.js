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
          <p className="section-paragraph ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

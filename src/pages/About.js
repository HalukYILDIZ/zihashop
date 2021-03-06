import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About" description="This is the About page">
      <div className="text-center mt-5">
        <h1>Hakkında</h1>
        <p>
          Tüm ürünlerimizi elden, kontrol ederek ve eğitimlerini vererek teslim
          ediyoruz.
        </p>

        <a className="btn btn-primary" href="https://www.zihatim.com">
          <span className="ml-2 mr-4">Zihatim</span>
        </a>
      </div>
    </Layout>
  );
};

export default About;

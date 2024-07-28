import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map((key) => (
            key !=='_id' &&
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{contact[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <lottie-player
            src="https://lottie.host/e45495cd-3533-415d-aa28-736dbfb3dad4/qWK35G1dBh.json"
            background="##FFFFFF"
            speed="1"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;

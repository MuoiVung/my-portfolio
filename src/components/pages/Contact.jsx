import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Container from "../UI/Container";
import contactImg from "../../assets/imgs/contact.png";
import { facebookIcon, instagramIcon, linkedlnIcon } from "../../assets/icons";
import SocialButton from "../UI/SocialButton";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { isFormInvalid, resetFormRef } from "../../helpers/validateForm";
import emailjs from "emailjs-com";

const defaultSubmitMessage = {
  status: null,
  message: "",
};

const Contact = () => {
  const enteredName = useRef("");
  const enteredPhone = useRef("");
  const enteredEmail = useRef("");
  const enteredSubject = useRef("");
  const enteredMessage = useRef("");
  const [submitMessage, setSubmitMessage] = useState(defaultSubmitMessage);

  const sendEmailJS = async (content) => {
    const serviceID = "service_3ytg2q4";
    const templateID = "template_3ceu1kp";
    const publicKey = "prD7vmTEbs49g7H_k";

    try {
      await emailjs.send(serviceID, templateID, content, publicKey);

      setSubmitMessage({
        status: "success",
        message: "Your message is received and I will contact you soon!",
      });
    } catch (error) {
      setSubmitMessage({
        status: "error",
        message: "* Failed to send the message, please try again later!",
      });
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const content = {
      name: enteredName.current.value,
      phone: enteredPhone.current.value,
      email: enteredEmail.current.value,
      subject: enteredSubject.current.value,
      message: enteredMessage.current.value,
    };

    if (isFormInvalid(content, setSubmitMessage, defaultSubmitMessage)) return;

    sendEmailJS(content);

    resetFormRef(
      enteredName,
      enteredPhone,
      enteredEmail,
      enteredSubject,
      enteredMessage
    );
  };

  return (
    <div id="contact">
      <Container>
        <h2 className="title">Contact me</h2>

        {/* content container */}
        <div className="flex flex-col space-y-[52px] xl:flex-row xl:space-y-0 xl:space-x-[52px]">
          {/* info container */}
          <Card addedClasses="flex flex-col space-y-6 text-light-gray py-8 text-center md:text-left">
            <div className="overflow-hidden rounded-lg">
              <img
                src={contactImg}
                alt="two hands"
                className="w-full rounded-lg duration-500 hover:scale-110"
              />
            </div>

            {/* info */}
            <div className="flex flex-1 flex-col items-center justify-between font-normal md:items-start">
              <div className="mt-6 xl:mt-0">
                {/* name */}
                <h4 className="font-secondary text-[28px] font-bold text-secondary-300">
                  Tran Viet Nam
                </h4>

                {/* position */}
                <p className="mt-2 text-lg text-primary xl:mt-4">
                  Front-End Developer
                </p>
              </div>

              <p className="mt-6 max-w-[465px] text-lg xl:mt-0">
                I am available for a front-end developer job. You can contact me
                via email or phone or send me a message through the following
                contact form.
              </p>

              <div className="mt-6 xl:mt-0">
                {/* phone */}
                <p className="mb-4 flex flex-col md:mb-2 md:flex-row xl:mb-0">
                  Phone:
                  <a
                    className="ml-1 text-secondary-400 duration-300 hover:text-primary"
                    href="tel:0838379398"
                  >
                    0838379398
                  </a>
                </p>

                {/* email */}
                <p className="flex flex-col md:flex-row">
                  Email:
                  <a
                    className="ml-1 text-secondary-400 duration-300 hover:text-primary"
                    href="mailto:vietnamtudonghoa98@gmail.com "
                  >
                    vietnamtudonghoa98
                    <wbr />
                    @gmail.com
                  </a>
                </p>
              </div>

              <div className="mt-6 xl:mt-0">
                <p className=" mb-4 text-sm font-medium uppercase">
                  Find with me
                </p>

                {/* social contact */}
                <div className="flex flex-wrap justify-center space-x-6 md:justify-start md:space-x-4">
                  <SocialButton icon={facebookIcon} src="" />
                  <SocialButton icon={linkedlnIcon} src="" />
                  <SocialButton icon={instagramIcon} src="" />
                </div>
              </div>
            </div>
          </Card>

          {/* form container */}
          <Card addedClasses="flex-1">
            <form
              action=""
              className="flex h-full flex-col space-y-6"
              onSubmit={submitFormHandler}
            >
              <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
                <Input label="your name" type="text" refValue={enteredName} />
                <Input
                  label="phone number"
                  type="text"
                  refValue={enteredPhone}
                />
              </div>
              <Input label="email" type="email" refValue={enteredEmail} />
              <Input label="subject" type="text" refValue={enteredSubject} />
              <Input
                label="your message"
                type="text"
                textArea
                refValue={enteredMessage}
              />

              {/* send message button*/}
              <Button shadow addedClasses="font-medium z-20">
                send message
              </Button>

              {/* result message */}
              {submitMessage.status && (
                <p
                  className={`rounded-lg p-3 text-center font-medium ${
                    submitMessage.status === "error"
                      ? "bg-error text-error"
                      : "bg-success text-success"
                  }`}
                >
                  {submitMessage.message}
                </p>
              )}
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

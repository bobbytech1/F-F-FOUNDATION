import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "../../components/Button/Button";
import { FaArrowRight } from "react-icons/fa";

// A simple form component
const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      <input
        ref={(node) => (email = node)}
        type="email"
         placeholder="Enter your email"
        className="font-Poppins placeholder:text-[16px] placeholder:font-[400] placeholder:text-[white] text-white bg-transparent outline-none border-[1px] border-[whitesmoke] px-[20px] py-[15px] mb-[20px] rounded-[50px]"
      />
      <Button
        text="Subscribe"
        onClick={submit}
        icon={FaArrowRight}
        className="bg-customorange text-[white] px-[5px] flex gap-[10px] items-center justify-center font-Poppins text-[16px] font-[700] h-[50px] py-[10px] rounded-[50px]"
      />
      {status === "sending" && <div>Sending...</div>}
      {status === "error" && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === "success" && <div>Subscribed!</div>}
    </div>
  );
};

const MailchimpFormContainer = () => {
  const postUrl = `https://gmail.us22.list-manage.com/subscribe/post?u=c455c17884ff519619c68e70f&amp;id=4480a1672a&amp;f_id=0061d3e1f0`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailchimpFormContainer;

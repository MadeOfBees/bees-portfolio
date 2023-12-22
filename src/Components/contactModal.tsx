"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type emailContents = {
  email: string;
  body: string;
  sender: string;
};

export default function ContactModal({ isOpen, setIsOpen }: Props) {
  const [emailContents, setEmailContents] = useState<emailContents>({
    email: "",
    body: "",
    sender: "",
  });

  const handleInputChange =
    (property: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmailContents({ ...emailContents, [property]: e.target.value });
    };

  const sendEmail = () => {
    if (emailContents.email && emailContents.body && emailContents.sender) {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(emailContents.email)) {
        alert("Please enter a valid email");
        return;
      }
      const { email, body, sender } = emailContents;
      const emailSubject = `Hey Bee, I'm ${sender} and I'd like to work with you`;
      const emailTo = "madeofbees@gmail.com";
      const emailFrom = email;
      const emailFromName = sender;
      const emailBody = `${body}%0D%0A%0D%0A-${sender}%0D%0A(${emailFrom})`;
      const sendEmail = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}&from=${emailFromName}`;
      window.open(sendEmail);
    } else {
      alert("Please fill out all three fields before sending");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-[2px] bg-black bg-opacity-40"
    >
      <Dialog.Panel className="bg-[#EBEAED] flex flex-col md:space-y-4 space-y-1 rounded-2xl shadow-lg sm:px-[3rem]] sm:px-[2rem] px-[1rem] py-[1rem] sm:pt-[2rem] sm:pb-[2rem]">
        <Dialog.Title className="text-3xl text font-bold hidden md:block">
          Let's work together!
        </Dialog.Title>
        <div className="text-sm font-bold hidden lg:block">Email</div>
        <input
          className="text-lg bg-white justify-center pl-6 sm:py-3 py-1 rounded-xl border-2 border-solid items-start"
          placeholder="Your email"
          onChange={handleInputChange("email")}
        ></input>
        <div className=" text-sm font-bold mt-6 hidden lg:block">Message</div>
        <input
          className="text-lg bg-white pl-6 md:pb-28 sm:py-3 py-1 rounded-xl border-2 border-solid items-start"
          placeholder="Your message"
          onChange={handleInputChange("body")}
        ></input>
        <div className="text-sm font-bold mt-5 hidden lg:block">Name</div>
        <div className="items-stretch flex flex-col md:flex-row justify-between gap-2.5 mt-1.5">
          <input
            className="text-lg bg-white justify-center pl-6 sm:py-3 py-1 rounded-xl border-2 border-solid items-start"
            placeholder="Your name"
            onChange={handleInputChange("sender")}
          ></input>
          <div
            className="flex items-center justify-center bg-[#4b815c] hover:bg-[#5c9e72] text-white px-5 rounded-xl text-xl font-bold cursor-pointer py-[0.5rem]"
            onClick={sendEmail}
          >
            Send
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

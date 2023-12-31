"use client";
import { FormEvent, useState } from "react";
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [msg, setMsg] = useState("");

  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`/api/sendmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, mailto: mail, subject, msg, contactNum }),
    });

    const result = await res.json();

    if (result.message === "Failed") {
      alert(
        "Unable to send message right now, please try contacting using the available options"
      );
    }

    setName("");
    setMail("");
    setSubject("");
    setMsg("");
    setContactNum("");
  };

  return (
    <main className="sectionPadding py-20 text-base">
      <section className="flex flex-col gap-4 md:flex-row md:gap-0">
        <div className="flex basis-full flex-col gap-4">
          <h3>Contact Us</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div>
                <div className="flex items-center">
                  <MdLocationOn />
                  <p>Oaks Packaging Limited </p>
                </div>
                <div className="pl-4">
                  <p>Ferozepur Road,</p>
                  <p>Masjid Ibrahim St, Green Cap Housing Scheme</p>
                  <p>Lahore, Punjab 54760</p>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <p>oakspackaging@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone />
              <p>03323004835</p>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone />
              <p>03359254400</p>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone />
              <p>03312228141</p>
            </div>
          </div>
        </div>
        <div className="basis-full">
          <form onSubmit={(e) => sendMail(e)} className="flex flex-col gap-2">
            <label>
              Name:
              <br />
              <input
                required
                className="w-[80%] border border-black p-1"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Email:
              <br />
              <input
                required
                className="w-[80%] border border-black p-1"
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </label>
            <label>
              Phone Number:
              <br />
              <input
                required
                className="w-[80%] border border-black p-1"
                type="text"
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
              />
            </label>
            <label>
              Subject:
              <br />
              <input
                required
                className="w-[80%] border border-black p-1"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </label>
            <label>
              Message:
              <br />
              <textarea
                required
                className="w-[80%] border border-black p-1"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={10}
              />
            </label>
            <button
              type="submit"
              className="w-20 rounded-3xl border-2 border-black bg-primary p-2"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

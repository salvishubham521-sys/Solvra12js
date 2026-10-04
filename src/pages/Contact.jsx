import React, { useState } from "react";
import { Mail, MapPin, MessageSquare, Send, Zap } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (sending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mljgrgrd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);

        console.error("Formspree error:", data);

        alert(
          data?.errors?.[0]?.message ||
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      alert(
        "Unable to send your message. Please check your internet connection and try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="inner-hero contact-hero">
        <div className="hero-grid-pattern" />

        <div className="inner-hero-content">
          <span className="eyebrow">
            <span className="live-dot" />
            CONTACT
          </span>

          <h1>
            Let's talk about
            <br />
            <span>the next charge.</span>
          </h1>

          <p>
            Interested in the concept, a college project, a pilot discussion
            or future collaboration? Send a message.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="contact-layout">
          <div className="contact-info">
            <span className="eyebrow dark">GET IN TOUCH</span>

            <h2>
              Have an idea?
              <br />
              <span>Let's connect.</span>
            </h2>

            <p>
              Have a question about Solvra, our technology concept,
              collaboration opportunities, or future EV charging solutions?
              Send us a message and our team will get back to you.
            </p>

            <div className="contact-detail">
              <div>
                <Mail size={20} />
              </div>
              <span>salvishubham521@gmail.com</span>
            </div>

            <div className="contact-detail">
              <div>
                <MapPin size={20} />
              </div>
              <span>India • Concept Project</span>
            </div>

            <div className="contact-detail">
              <div>
                <MessageSquare size={20} />
              </div>
              <span>Technology • EV • Clean Energy</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {!submitted ? (
              <>
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="youremail@gmail.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  Organization
                  <input
                    type="text"
                    name="organization"
                    placeholder="College / Company / Organization"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell us what you would like to discuss..."
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="button button-black form-submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send message"}
                  {!sending && <Send size={17} />}
                </button>

                <small className="form-note">
                  😊 Thanks for your response. We will get back to you as soon
                  as possible.
                </small>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <Zap size={28} fill="currentColor" />
                </div>

                <h3>Message sent!</h3>

                <p>
                  Thank you 😊 Your message has been successfully received.
                  Our team will get back to you soon.
                </p>

                <button
                  type="button"
                  className="button button-yellow"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
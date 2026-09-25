import React, { useState } from "react";
import { Mail, MapPin, MessageSquare, Send, Zap } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
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
              This contact form is currently a front-end demonstration.
              Connect it to your preferred email or backend service when you
              are ready to make it live.
            </p>

            <div className="contact-detail">
              <div>
                <Mail size={20} />
              </div>
              <span>hello@solvra.example</span>
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
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  Organization
                  <input
                    type="text"
                    placeholder="College / Company / Organization"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    rows="6"
                    placeholder="Tell us what you would like to discuss..."
                    required
                  />
                </label>

                <button type="submit" className="button button-black form-submit">
                  Send message
                  <Send size={17} />
                </button>

                <small className="form-note">
                  Demo form — no message is actually sent yet.
                </small>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <Zap size={28} fill="currentColor" />
                </div>

                <h3>Message ready.</h3>

                <p>
                  The front-end demo has received your message. Connect this
                  form to an email or backend service to make it functional.
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
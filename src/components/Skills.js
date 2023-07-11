import React from "react";

export const Skills = () => {
  return (
    <section className="mx-auto max-w-5xl py-4" id="skills">
      <h2 className="text-4xl font-bold text-center py-7">My Skills</h2>
      <div className="chat chat-start">
        <div className="chat-bubble">
          Hi, Maria! <br /> Tell me about your skills.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Hi!</div>
        <div className="chat-bubble">I'm passionate about technology.</div>
        <div className="chat-bubble">
          I like to share knowledge and experiences.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          Great! <br /> What do you do in your free time?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">
          Well, I'm a technology communities' member.
        </div>
        <div className="chat-bubble">
          I love to participate in free software events.
        </div>
        <div className="chat-bubble">I like to travel and meet new places.</div>
      </div>
    </section>
  );
};

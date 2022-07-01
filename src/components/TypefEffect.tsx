import React from 'react'
import { TypeWriter } from '../contexts/typewriter';

const TypeEffect = () => {

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TypeWriter(elements[i], JSON.parse(toRotate), period);
    }
  }
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #00f;}";
//   document.body.appendChild(css);
};

  return (
    <h1 className='absolute bottom-0'>
      <p 
        className="typewrite text-xl"
        data-period="1000"
        data-type='[ "I am software developer", "I am Creative.", "I Like to learn new things", "I Love to Develop." ]'
      >
        <span className="wrap"></span>
      </p>
    </h1>
  );
}

export default TypeEffect
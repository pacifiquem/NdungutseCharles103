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
};

  return (
    <h1 className='absolute mt-6 flex items-center bottom-0'>
      <p className=' text-3xl'>I&nbsp;</p>
      <p 
        className="typewrite text-3xl"
        data-period="1000"
        data-type='[" am software developer", " am Creative.", " Like to learn new things", " Love to Develop." ]'
      >
        <span className="wrap"></span>
      </p>
      <p className='text-[2em] translate-y-[-3px] text-blue-900'>|</p>
    </h1>
  );
}

export default TypeEffect
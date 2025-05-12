// src/components/InfoSection.jsx
import React from 'react';

function InfoCards() {
  return (
    <>

      <section className="info-block block-1">
        <div className="container">
          <h2>cisc 1115? what’s that?</h2>
          <p>
            cisc 1115, “introduction to programming using java”, is the first class in the
            computer science degree at brooklyn college. the class is usually taken by
            freshmen – if ur a freshman btw, hi! welcome to brooklyn college. it’s a good
            school, trust me.
          </p>
        </div>
      </section>

      <section className="info-block block-2">
        <div className="container">
          <h2>what will i learn</h2>
          <p>
            cisc 1115 teaches foundational programming concepts using the java programming
            language. you will learn about arrays, methods, sorting, searching, strings, input & output, algorithims, loops,
            control structures, & more! this classes teaches you how to code & be a good coder. ur gonna have a great time! :D
          </p>
        </div>
      </section>

      <section className="info-block block-3">
        <div className="container">
          <h2>do i really need this class</h2>
          <p>
            yes!! i know someone might have told you about the ‘hot new framework’ that will
            earn you 100k total comp after 6 weeks. but before we can learn that stuff, we
            need to learn the basics. this class will give you the foundation needed to build
            massive projects in the future.
          </p>
        </div>
      </section>
    </>
  );
}

export default InfoCards
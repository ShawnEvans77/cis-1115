// src/components/Contact.jsx
import React from 'react';
import '../App.css';

export default function Contact() {
  return (
    <main className="contact-page">
      <h1>{'{'}contact{'}'}</h1>

      <ul className="contact-container">
        <li><b>website dev:</b> shawn evans {' '}
        <a href="mailto:shawn.evans75@bcmail.cuny.edu@brooklyn.cuny.edu">(shawn.evans75@bcmail.cuny.edu)</a>
        
        </li>

        <li><b>dep chair:</b> yedidyah langsam {' '}

        <a href="mailto:langsam@brooklyn.cuny.edu">(rudowsky@brooklyn.cuny.edu)</a>

        </li> 


        <li>
          <b>dep chair day:</b> ira rudowsky {' '}
          <a href="mailto:rudowsky@brooklyn.cuny.edu">(rudowsky@brooklyn.cuny.edu)</a>
        </li>

        <li>
          <b>dep chair evening:</b> joseph thurm {' '}
          <a href="mailto:thurm@sci.brooklyn.cuny.edu">(thurm@sci.brooklyn.cuny.edu)</a>
        </li>

        
        <li>
          <b>4900 professor:</b> katherine chuang {' '}
          <a href="mailto:chuang@sci.brooklyn.cuny.edu">(chuang@sci.brooklyn.cuny.edu)</a>
        </li>
   
        <li><b>room:</b> 2109 Ingersoll Hall</li>

        <li><b>phone:</b> 718.951.5657</li>

        <li><b>fax:</b> 718.951.4842</li>
      </ul>
    </main>
  );
}
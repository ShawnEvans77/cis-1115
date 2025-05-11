// src/components/Contact.jsx
import React from 'react';
import '../App.css';
import ContactList from './ContactList';

function Contact() {
  return (
    <main className="contact-page">
      <h1>{'{'}contact{'}'}</h1>
      <ContactList/>
    </main>
  );
}

export default Contact
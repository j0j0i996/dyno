// Impressum.js
import React from 'react';
import Header from "../partials/Header";
import Footer from "../partials/Footer";

const Impressum = () => {
  return (
    <div className="bg-primary-main flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <div className='mt-24 ml-12 text-neutral-main'>
          <div className='text-5xl'>Impressum</div>
          <div className='text-xl'>Die Website Dyno wird bereitgestellt von</div>
          <div className='text'>Jonathan Schulte</div>
          <div className='text'>50968 Köln</div>
          <div className='text'>Samariterstraße 15</div>
          <div className='text'>jonathan@dynocheck.de</div>
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  )
};

export default Impressum;

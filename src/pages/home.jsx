import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import FeaturedProducts from '../components/featuredProducts';
import Footer from '../components/Footer';
import LoginSignupModal from './AuthModal';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("login"); // "login" or "signup"

  return (
    <>
      <Navbar onAuthClick={(tab) => {
        setModalTab(tab);
        setModalOpen(true);
      }} />
      <Hero />
      <FeaturedProducts />
      <Footer />
      {modalOpen && (
        <LoginSignupModal
          open={modalOpen}
          tab={modalTab}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Home;

import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col antialiased selection:bg-secondary selection:text-white">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <Home />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom CTA Bar */}
      <MobileActionBar />
    </div>
  );
}

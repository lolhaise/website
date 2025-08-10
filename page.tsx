"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { X } from 'lucide-react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 59, seconds: 48 });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Popup Modal */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-md bg-white p-8">
          <DialogHeader>
            <DialogClose className="absolute right-4 top-4">
              <X className="h-4 w-4" />
            </DialogClose>
            <DialogTitle className="text-center text-2xl font-bold mb-2">
              WAIT, get %15 off your install
            </DialogTitle>
            <p className="text-center text-gray-600 mb-6">
              You will only see this ONE time, so take advantage!
            </p>
          </DialogHeader>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-pdx-red text-white px-4 py-3 rounded text-xl font-bold min-w-[80px] text-center">
              <div>{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs">Hours</div>
            </div>
            <div className="bg-pdx-red text-white px-4 py-3 rounded text-xl font-bold min-w-[80px] text-center">
              <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs">Minutes</div>
            </div>
            <div className="bg-pdx-red text-white px-4 py-3 rounded text-xl font-bold min-w-[80px] text-center">
              <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs">Seconds</div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name*</label>
              <input type="text" placeholder="Name*" className="w-full p-3 border rounded" />
            </div>
            <div>
              <label className="text-sm font-medium">email*</label>
              <input type="email" placeholder="Email*" className="w-full p-3 border rounded" />
            </div>
            <div>
              <label className="text-sm font-medium">number*</label>
              <input type="tel" placeholder="phone number*" className="w-full p-3 border rounded" />
            </div>
            <div>
              <label className="text-sm font-medium">address*</label>
              <input type="text" placeholder="address*" className="w-full p-3 border rounded" />
            </div>
            <Button className="w-full bg-pdx-red hover:bg-red-700 text-white py-3 text-lg font-semibold">
              GET FREE QUOTE
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://ext.same-assets.com/956994378/4116090928.svg"
              alt="PDX Holiday Lighting Logo"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-pdx-navy hover:text-pdx-red transition-colors">HOME</button>
            <button className="text-pdx-navy hover:text-pdx-red transition-colors">Locations</button>
            <button onClick={() => scrollToSection('about')} className="text-pdx-navy hover:text-pdx-red transition-colors">ABOUT</button>
            <button onClick={() => scrollToSection('contact')} className="text-pdx-navy hover:text-pdx-red transition-colors">CONTACT</button>
            <button onClick={() => scrollToSection('gallery')} className="text-pdx-navy hover:text-pdx-red transition-colors">GALLERY</button>
            <button className="text-pdx-navy hover:text-pdx-red transition-colors">More</button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-pdx-navy text-pdx-navy hover:bg-pdx-navy hover:text-white" onClick={() => window.open('tel:9712973443')}>
              CALL NOW
            </Button>
            <Button className="bg-pdx-red hover:bg-red-700 text-white" onClick={() => scrollToSection('contact')}>
              INSTANT QUOTE
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 26, 38, 0.7), rgba(22, 26, 38, 0.7)), url('https://ext.same-assets.com/956994378/1056742358.png')`
        }}
      >
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Christmas Light Installation in Portland OR
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-light">
            SAY HELLO TO STRESS FREE HOLIDAY LIGHTING IN PORTLAND OREGON
          </h2>

          {/* Service Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <img src="https://ext.same-assets.com/956994378/2379976334.svg" alt="We Provide" className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm font-semibold">WE PROVIDE</div>
            </div>
            <div className="text-center">
              <img src="https://ext.same-assets.com/956994378/491018449.svg" alt="We Maintain" className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm font-semibold">WE MAINTAIN</div>
            </div>
            <div className="text-center">
              <img src="https://ext.same-assets.com/956994378/4023012635.svg" alt="We Custom Cut" className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm font-semibold">WE CUSTOM CUT</div>
            </div>
            <div className="text-center">
              <img src="https://ext.same-assets.com/956994378/284341718.svg" alt="We Takedown/Store" className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm font-semibold">WE TAKEDOWN/STORE</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-pdx-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              GET A FREE QUOTE
            </Button>
            <Button className="bg-white text-pdx-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              %15 OFF OCTOBER INSTALLS
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-pdx-navy mb-8">How It Works</h2>

              {/* Process Steps */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-pdx-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg">Design & Consultation</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pdx-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg">Schedule Appointment</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pdx-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg">Install the Lights and Test for Perfection</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pdx-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-lg">Takedown & Label & Store</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pdx-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <h3 className="font-bold text-lg">Take Down Scheduled Before February 10 th</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pdx-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                  <div>
                    <h3 className="font-bold text-lg">Sit Back and Enjoy The Season</h3>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                PDX Holiday Lighting brings advanced control and custom design to your holiday
                light installation in Portland, OR. Our state-of-the-art timers allow you to manage your
                holiday display effortlessly—schedule, adjust, and enjoy your lights without lifting
                a finger. We're here to make your holiday season brighter, simpler, and completely
                hassle-free.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Every display is fully personalized to match your vision and the unique style of
                your home or business. Our experienced Portland team designs and installs lights with
                precision and creativity, ensuring your property stands out all season long. Safety
                and quality are always our top priorities—whether it's detailed roofline installations,
                elegant tree wrapping, or ground displays, we follow professional-grade safety
                protocols from start to finish.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From classic holiday charm to bold, modern designs, PDX Holiday Lighting is Portland's
                trusted choice for flawless holiday light installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-pdx-navy mb-4">
            #1 PROFESSIONAL CHRISTMAS LIGHT INSTALLATION PORTLAND OR
          </h2>
          <div className="w-24 h-1 bg-pdx-red mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-4xl font-bold text-pdx-navy mb-8 leading-tight">
                MAKE<br />YOUR HOME<br />THE TALK OF<br />THE NEIGHBORHOOD
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                PDX Holiday Lighting is here to turn your Christmas light installation dreams in Portland, OR into reality. Since 2021,
                our dedicated local team has been helping families, neighborhoods, and businesses across the Portland area
                create captivating, custom holiday displays. Every project starts with a personal design consultation to bring your
                vision to life with creativity and precision.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Our Christmas light hanging services in Portland use only top-tier, commercial-grade LED bulbs and heavy-duty
                socket wire, ensuring a bright, durable display that stands up to Oregon's wet winter weather. With years of hands-on
                experience and a passion for creating stunning holiday designs, we make every installation safe, efficient, and
                tailored to the unique character of Portland homes and businesses.
              </p>

              <Button className="bg-pdx-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                GET A FREE QUOTE
              </Button>
            </div>

            <div>
              <img
                src="https://ext.same-assets.com/956994378/200572941.webp"
                alt="Christmas light installation on house"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Promise Section */}
      <section id="promise" className="py-16 bg-pdx-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Always-On Holiday Promise</h2>
              <p className="text-lg leading-relaxed">
                At PDX Holiday Lighting, our Stay Lit Guarantee takes the stress out of the season. If a
                light goes out or something needs attention, we're on it—fast. You'll enjoy a brilliant,
                worry-free display backed by our promise of dependable service and lasting quality.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://ext.same-assets.com/956994378/1919105393.jpeg"
                alt="Santa with Christmas lights"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-16 bg-pdx-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/956994378/3093987022.png"
                alt="Team member"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-wider">WHO ARE WE?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Looking for professional Christmas light installation in Portland, Oregon? At PDX Holiday Lighting, we specialize in custom C9 roofline
                lighting, stake lights, tree wraps, and full holiday displays tailored to your home or business. Whether you're in Portland, Beaverton, or
                surrounding areas, our experienced team brings your vision to life with safe, efficient, and festive lighting. From start to finish, we
                handle everything—design, installation, maintenance, and take-down—so you can sit back and enjoy a bright, stress-free season.
              </p>
              <p className="text-lg leading-relaxed">
                PDX Holiday Lighting is Portland's trusted choice for holiday lighting services that combine elegance, safety, and holiday cheer. We offer
                complete Christmas light installation throughout Portland and nearby cities, using high-quality commercial-grade C9 bulbs and energy-
                efficient LED mini-lights. Our team works with homeowners, HOAs, and commercial properties to transform spaces into stunning winter
                displays. Book early for the best availability and discover why we're one of the top-rated Christmas light installers in Portland OR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-pdx-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">WELCOME TO OUR GALLERY</h1>
          <h2 className="text-xl md:text-2xl mb-12 font-light">TAKE A LOOK AND SEE WHAT YOU LIKE</h2>

          {/* Service Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <img src="https://ext.same-assets.com/956994378/2379976334.svg" alt="We Provide" className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm font-semibold">WE PROVIDE</div>
            </div>
            <div className="text-center">
              <img src="https://ext.same-assets.com/956994378/491018449.svg" alt="We Maintain" className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm font-semibold">WE MAINTAIN</div>
            </div>
            <div className="text-center">
              <img src="https://ext.same-assets.com/956994378/4023012635.svg" alt="We Custom Cut" className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm font-semibold">WE CUSTOM CUT</div>
            </div>
            <div className="text-center">
              <img src="https://ext.same-assets.com/956994378/284341718.svg" alt="We Takedown/Store" className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm font-semibold">WE TAKEDOWN/STORE</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-pdx-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              GET A FREE QUOTE
            </Button>
            <Button className="bg-white text-pdx-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              %15 OFF OCTOBER INSTALLS
            </Button>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <img src="https://ext.same-assets.com/956994378/388431945.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/3514821079.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/1087972361.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/618347366.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/205629372.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/1095356513.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/1591179008.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/1777687285.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/4250135653.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/379309404.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/2171382438.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
              <img src="https://ext.same-assets.com/956994378/758661472.jpeg" alt="Christmas Light Installation" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center text-2xl font-semibold text-gray-600 mb-12">Frequently asked questions</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">
                How much does Christmas light installation cost in Portland, Oregon?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                Pricing for Christmas light installation in Portland depends on the size of your home, the type of lights you choose, and the complexity
                of the design. At PDX Holiday Lighting, most residential installations range from $500 to $2,500, with custom quotes available. We offer all-
                inclusive packages that include installation, maintenance, takedown, and storage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">
                When should I book my Christmas light installation in Portland?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                We recommend booking your Christmas light installation as early as possible, ideally by September or October, to ensure the best availability and scheduling options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">
                What types of Christmas lights do you install?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                We specialize in commercial-grade C9 bulbs, LED mini-lights, icicle lights, and custom lighting solutions tailored to your specific needs and preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">
                Do you install Christmas lights for commercial buildings in Portland?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                Yes, we provide comprehensive Christmas light installation services for commercial properties, HOAs, and businesses throughout Portland and surrounding areas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">
                Why choose PDX Holiday Lighting over DIY installation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                Our professional installation ensures safety, uses commercial-grade materials, and includes full-service support including maintenance, takedown, and storage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">
                Where does PDX Holiday Lighting install lights?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                We serve Portland, Beaverton, and surrounding areas in Oregon with professional Christmas light installation services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-pdx-navy mb-2">
            BENEFITS OF OUR <span className="text-pdx-red">ALL INCLUSIVE</span>
          </h2>
          <h3 className="text-4xl font-bold text-pdx-navy mb-12">
            CHRISTMAS LIGHT INSTALLATION SERVICES
          </h3>

          <Button className="bg-pdx-red hover:bg-red-700 text-white px-12 py-4 text-xl font-bold mb-16">
            BOOK TODAY
          </Button>

          <div className="relative">
            <img
              src="https://ext.same-assets.com/956994378/4262503851.png"
              alt="Christmas decoration"
              className="w-full max-w-6xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://ext.same-assets.com/956994378/1484263528.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            See how we do it better than anyone else when we<br />
            install Christmas lights in Portland
          </h2>

          <Button className="bg-pdx-red hover:bg-red-700 text-white px-12 py-4 text-xl font-bold">
            GET A FAST QUOTE!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-pdx-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="https://ext.same-assets.com/956994378/4116090928.svg"
                  alt="PDX Holiday Lighting Logo"
                  className="h-16 w-auto"
                />
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold">Christmas Light Installation In Portland OR</div>
                <div>971-297-3443</div>
                <div>6540 sw norse hall road tualatin oregon 97062</div>
                <div>pdxholidaylighting@gmail.com</div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <a href="#" className="text-white hover:text-pdx-red transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-pdx-red transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.286-.744 2.840-.269 1.026-1.009 2.315-1.499 3.101C9.563 23.812 10.753 24.029 12.017 24.029c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            ©2024 by Pdx Holiday Lighting.
          </div>
        </div>
      </footer>
    </div>
  );
}

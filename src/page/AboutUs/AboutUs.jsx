const AboutUs = () => {
  return (
    <div className="max-w-[1200px] p-3  mx-auto mb-10">
      <div className="card card-body card-compact caret-red-700  text-2xl  text-center   w-full   font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff] relative border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-y-0 before:bg-[#00f7ff] before:transition-transform border-[#00f7ff]">
        <h3 className="font-bold text-red-500 text-4xl mb-2">
          About Our Debating Club
        </h3>
        <p className="p-2 text-lg lg:text-balance text-left md:text-center">
          Welcome to our debate club, where ideas collide and minds ignite! We
          are a passionate community dedicated to honing critical thinking
          skills, fostering respectful dialogue, and embracing diverse
          perspectives. Through spirited discourse, we cultivate empathy,
          understanding, and intellectual growth. Our members span a spectrum of
          backgrounds, united by a shared love for engaging in lively debates on
          topics ranging from politics and philosophy to science and culture.
          Whether you're a seasoned debater or just beginning your journey, our
          club provides a welcoming space to challenge assumptions, sharpen
          rhetoric, and forge lasting connections. Join us in shaping the
          future, one argument at a time!
        </p>
      </div>

      <div className="flex w-full gap-5 mt-10 flex-col md:flex-col lg:flex-row mb-12">

        <div className="card card-body caret-red-700  text-2xl leading-relaxed text-center  mx-auto  p-3 w-full font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff]  border-2 rounded-lg bg-transparent    text-[#00f7ff] border-[#00f7ff]">
          <h3 className="font-bold text-red-500 text-4xl mb-2">
            <div className="flex items-center justify-center flex-col">
              <img width="76" height="96" src="https://i.ibb.co/qRgVr7x/icons8-address-96.png" alt="address" />
              <span>
                Address
              </span>
            </div>
          </h3>
          <p>
            Govt Mohammadpur Model College, Dhaka <br />

          </p>
        </div>

        <div className="card card-body w-full card-compact caret-red-700  text-2xl text-center    mx-auto  p-3  font-bold bg-[#00f7ff] shadow-2xl shadow-[#00f7ff]  border-2 rounded-lg bg-transparent py-2.5 px-5  transition-colors before:absolute before:left-0 before:top-0 before:-z-10  text-[#00f7ff]  before:bg-[#00f7ff] before:transition-transform border-[#00f7ff] ">
          <h3 className="font-bold text-red-500 text-4xl mb-2">
            <div className="flex items-center justify-center flex-col">
              <img width="76" height="96" src="https://i.ibb.co/bRJ5B1M/icons8-call-65.pngin ta" alt="address" />
              <span>
                Contact
              </span>
            </div>
          </h3>
          <p>
            ++8801*******9898
          </p>
        </div>
      </div>
      <iframe className="w-full rounded-xl shadow-2xl bg-[#00f7ff] shadow-[#00f7ff]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4447005627007!2d90.36531957610975!3d23.767173678658985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a8e021199f%3A0x603243603e34140a!2sGovt.%20Mohammadpur%20Model%20School%20%26%20College!5e0!3m2!1sen!2sbd!4v1713022820846!5m2!1sen!2sbd" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default AboutUs;


const locationData = [
  {
    title: "Shopping Malls / Multiplexes",
    places: [
      ["Reliance Mall", "08 mins"],
      ["D-Mart Ravet", "10 mins"],
      ["Phoenix Market City", "26 mins"],
      ["Xion Mall, Hinjewadi", "15 mins"],
      ["E-square Multiplex", "17 mins"],
    ],
  },
  {
    title: "Restaurants / Hotels",
    places: [
      ["Subway", "02 mins"],
      ["McDonald’s", "03 mins"],
      ["Krishna Pure Veg", "06 mins"],
      ["Sentosa Resort", "08 mins"],
      ["Sayaji Hotel", "14 mins"],
    ],
  },
  {
    title: "Important Destinations",
    places: [
      ["Pune–Mumbai Expressway", "07 mins"],
      ["Ravet (Mukai Chowk)", "08 mins"],
      ["Wakad", "10 mins"],
      ["MCA Cricket Stadium", "14 mins"],
      ["Baner", "16 mins"],
      ["Aundh", "18 mins"],
      ["Pimple Saudagar", "16 mins"],
      ["Chinchwad", "18 mins"],
    ],
  },
  {
    title: "Adventure / Leisure Places",
    places: [
      ["JSPM College", "09 mins"],
      ["City Pride School", "09 mins"],
      ["Adhira Int. School", "11 mins"],
      ["SB Patil School / College", "12 mins"],
      ["Symbiosis Institute JSPM", "14 mins"],
      ["PCP College", "13 mins"],
      ["Indira College", "14 mins"],
      ["D Y Patil School", "16 mins"],
      ["Akshara Int. School", "18 mins"],
    ],
  },
  {
    title: "Work Hubs / IT Parks",
    places: [
      ["Hinjewadi IT Park", "15 mins"],
      ["Urse MIDC", "24 mins"],
      ["Chinchwad MIDC", "26 mins"],
      ["Talegaon MIDC", "32 mins"],
    ],
  },
  {
    title: "Hospitals",
    places: [
      ["Ojas Hospital", "12 mins"],
      ["Lokmanya Hospital", "14 mins"],
      ["Life Point Hospital", "18 mins"],
      ["Aditya Birla Hospital", "22 mins"],
      ["Niramaya Hospital", "20 mins"],
    ],
  },
];

const ProjectMapLocation = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24">
      {/* Map */}
      <div className="overflow-hidden rounded-[24px] shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.353154958774!2d73.82622427465587!3d18.681337364244733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7fe03b369d3%3A0x691a5b80b3c1e2fc!2sShakuntal%20Commercia!5e1!3m2!1sen!2sin!4v1778935195833!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>

      {/* Location Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-14">
        {locationData.map((section, index) => (
          <div key={index}>
            {/* Title */}
            <h3 className="text-[#062E2C] text-xl font-semibold font-raleway uppercase mb-7">
              {section.title}
            </h3>

            {/* Places */}
            <div className="space-y-4">
              {section.places.map((place, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 text-[#062E2C] text-lg"
                >
                  <span className="whitespace-nowrap font-poppins">
                    {place[0]}
                  </span>

                  <div className="flex-1 border-b border-dashed border-[#062E2C]"></div>

                  <span className="whitespace-nowrap font-poppins">
                    {place[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectMapLocation;
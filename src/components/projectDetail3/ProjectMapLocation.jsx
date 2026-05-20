
const locationData = [
  {
    title: "Shopping Malls / Multiplexes",
    places: [
      ["Reliance Mall", "12 mins"],
      ["D-Mart Ravet", "14 mins"],
      ["Phoenix Market City", "25 mins"],
      ["Xion Mall, Hinjewadi", "22 mins"],
      ["E-square Multiplex", "20 mins"],
    ],
  },
  {
    title: "Restaurants / Hotels",
    places: [
      ["Subway", "05 mins"],
      ["McDonald’s", "05 mins"],
      ["Krishna Pure Veg", "08 mins"],
      ["Sentosa Resort", "10 mins"],
      ["Sayaji Hotel", "18 mins"],
    ],
  },
  {
    title: "Important Destinations",
    places: [
      ["Pune–Mumbai Expressway", "10 mins"],
      ["Ravet (Mukai Chowk)", "12 mins"],
      ["Wakad", "15 mins"],
      ["MCA Cricket Stadium", "18 mins"],
      ["Baner", "22 mins"],
      ["Aundh", "24 mins"],
      ["Pimple Saudagar", "20 mins"],
      ["Chinchwad", "22 mins"],
    ],
  },
  {
    title: "Adventure / Leisure Places",
    places: [
      ["JSPM College", "12 mins"],
      ["City Pride School", "12 mins"],
      ["Adhira Int. School", "14 mins"],
      ["SB Patil School / College", "15 mins"],
      ["Symbiosis Institute JSPM", "18 mins"],
      ["PCP College", "17 mins"],
      ["Indira College", "18 mins"],
      ["D Y Patil School", "20 mins"],
      ["Akshara Int. School", "22 mins"],
    ],
  },
  {
    title: "Work Hubs / IT Parks",
    places: [
      ["Hinjewadi IT Park", "20 mins"],
      ["Urse MIDC", "28 mins"],
      ["Chinchwad MIDC", "30 mins"],
      ["Talegaon MIDC", "35 mins"],
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54724.181555399955!2d73.78432851196834!3d18.68589024511334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c982c46de357%3A0x2e5004df07e20f!2sShakuntal%20Forestia!5e1!3m2!1sen!2sin!4v1778934538788!5m2!1sen!2sin"
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
            <h3 className="text-[#062E2C] text-base md:text-lg lg:text-xl font-[700] font-semibold font-raleway uppercase mb-7">
              {section.title}
            </h3>

            {/* Places */}
            <div className="space-y-4">
              {section.places.map((place, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 text-[#062E2C] font[400] text-base md:text-lg lg:text-lg"
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
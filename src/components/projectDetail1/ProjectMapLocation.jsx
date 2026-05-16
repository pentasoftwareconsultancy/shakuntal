

const locationData = [
  {
    title: "Shopping Malls / Multiplexes",
    places: [
      ["Reliance Mall", "10 mins"],
      ["D-Mart Ravet", "12 mins"],
      ["Phoenix Market City", "28 mins"],
      ["Xion Mall, Hinjewadi", "18 mins"],
      ["E-square Multiplex", "19 mins"],
    ],
  },
  {
    title: "Restaurants / Hotels",
    places: [
      ["Subway", "04 mins"],
      ["McDonald’s", "04 mins"],
      ["Krishna Pure Veg", "07 mins"],
      ["Sentosa Resort", "09 mins"],
      ["Sayaji Hotel", "16 mins"],
    ],
  },
  {
    title: "Important Destinations",
    places: [
      ["Pune–Mumbai Expressway", "08 mins"],
      ["Ravet (Mukai Chowk)", "10 mins"],
      ["Wakad", "12 mins"],
      ["MCA Cricket Stadium", "15 mins"],
      ["Baner", "18 mins"],
      ["Aundh", "20 mins"],
      ["Pimple Saudagar", "18 mins"],
      ["Chinchwad", "20 mins"],
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
      ["Hinjewadi IT Park", "18 mins"],
      ["Urse MIDC", "25 mins"],
      ["Chinchwad MIDC", "28 mins"],
      ["Talegaon MIDC", "34 mins"],
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
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-16 lg:px-24">
      {/* Map */}
      <div className="overflow-hidden rounded-[24px] shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.2644221065216!2d73.822747374656!3d18.685732964109384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b787dcc4c7f1%3A0x2711725aa57ad2fd!2sDwarka%20BlueWater!5e1!3m2!1sen!2sin!4v1778931315888!5m2!1sen!2sin"
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
            <h3 className="text-[#18312b] text-xl font-semibold uppercase mb-7">
              {section.title}
            </h3>

            {/* Places */}
            <div className="space-y-4">
              {section.places.map((place, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 text-[#4f4f4f] text-lg"
                >
                  <span className="whitespace-nowrap">
                    {place[0]}
                  </span>

                  <div className="flex-1 border-b border-dashed border-[#7d7d7d]"></div>

                  <span className="whitespace-nowrap font-medium">
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
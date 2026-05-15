import React from "react";

const locationData = [
  {
    title: "Shopping Malls / Multiplexes",
    places: [
      ["SNBP International School", "500 Mtr"],
      ["Priyadarshani School", "1.5 Kms"],
      ["City Pride School Moshi", "1.4 Kms"],
      ["Sri Sri Ravishankar Vidya Mandir", "4.8 Kms"],
      ["Vishwakalyan English School", "4.0 Kms"],
      ["AHP School", "4.6 Kms"],
      ["Sadhu Vaswani International School", "7.4 Kms"],
    ],
  },
  {
    title: "Restaurants / Hotels",
    places: [
      ["Modern College", "2.8 Kms"],
      ["IIBM College of Hotel Management", "4.4 Kms"],
      ["D Y Patil College - Pimpri", "9.2 Kms"],
      ["MIT ACSC", "8.7 Kms"],
      ["(PCCOE)", "13 Kms"],
    ],
  },
  {
    title: "KEY PLACES",
    places: [
      ["Chikhali Bus Stop", "3.0 Kms"],
      ["Spine Road", "5.0 Kms"],
      ["Tata Motors", "5.4 Kms"],
      ["Proposed CC", "5.4 Kms"],
      ["KSB Chowk", "7.0 Kms"],
      ["Pune Nashik Highway", "7.8 Kms"],
      ["Telco Road", "7.7 Kms"],
      ["Thermax Chowk", "7.6 Kms"],
      ["Mumbai Pune Highway", "10.0 Kms"],
      ["Nigdi", "11.0 Kms"],
    ],
  },
  {
    title: "Hospitals",
    places: [
      ["Lotus Multispeciality Hospital", "3.4 Kms"],
      ["Sainath Hospital", "7.0 Kms"],
      ["SDH Hospital", "7.0 Kms"],
      ["YCM Hospital", "9.4 Kms"],
      ["Lokmanya Hospital", "9.5 Kms"],
      ["Aditya Birla Memorial Hospital", "12 Kms"],
    ],
  },
  {
    title: "MALLS / RETAIL MARKET",
    places: [
      ["D-Mart, Moshi", "2.4 Kms"],
      ["Prasanna Gold Fields Complex", "4.2 Kms"],
      ["Spine City Mall", "7 Kms"],
      ["City One Mall", "9.3 Kms"],
      ["El-Pro Chinchwad", "10 Kms"],
    ],
  },
  {
    title: "Entertainment",
    places: [
      ["Carnival Cinema, Chinchwad", "10.0 Kms"],
      ["PVR Cinema", "9.3 Kms"],
      ["Vishal E-Square, Pimpri", "9.7 Kms"],
      ["Akurdi", "9.9 Kms"],
      ["Nashik Phata", "13.0 Kms"],
    ],
  },
];

const ProjectMapLocation = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-16 lg:px-24">
      {/* Map */}
      <div className="overflow-hidden rounded-[24px] shadow-md">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
          alt="Map"
          className="w-full h-[260px] object-cover grayscale"
        />
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
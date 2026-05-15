import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Ajay Vijay",
    role: "Director & Founder",
    description:
      "Shakuntal Group is one of the leading group in the field of Construction and have 15 years of experience. We believe in Future Planning, Excellent Construction Quality, Best in Class Facilities,",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Ajay Vijay",
    role: "Director & Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Satish Gawade",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Arun Vijay",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

const StoryTeam = () => {
  return (
    <section className="bg-[#e8e2d4] py-20 px-6 md:px-16 lg:px-24">
      {/* Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left */}
        <div>
          <button className="border border-[#a88308] text-[#a88308] px-10 py-3 rounded-xl text-sm font-medium mb-8 hover:bg-[#a88308] hover:text-white transition duration-300">
            Our Team
          </button>

          <h2 className="text-5xl md:text-6xl leading-tight font-medium text-[#1f1f1f]">
            The People Behind <br />
            Every Space We Build
          </h2>
        </div>

        {/* Right */}
        <div>
          <p className="text-[#4f4f4f] text-lg leading-relaxed">
            Shakuntal Group is driven by a team focused on thoughtful planning,
            quality construction, and delivering spaces that offer long-term
            value and comfort. A dedicated team working together to deliver
            consistent quality and dependable developments.
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id}>
            {/* Featured Card */}
            {member.featured ? (
              <div className="bg-[#a88308] rounded-[24px] p-8 h-full min-h-[430px] flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-2xl font-medium">
                    {member.name}
                  </h3>

                  <p className="text-white/90 text-sm mt-1">
                    {member.role}
                  </p>
                </div>

                <p className="text-white/90 text-sm leading-relaxed mt-10">
                  {member.description}
                </p>
              </div>
            ) : (
              <>
                {/* Image */}
                <div className="overflow-hidden rounded-[24px] shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[430px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="pt-5">
                  <h3 className="text-[24px] font-medium text-[#1f1f1f]">
                    {member.name}
                  </h3>

                  <p className="text-[#4f4f4f] text-sm mt-1">
                    {member.role}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryTeam;
import hero from "../assets/career/hero.png";

const careers = [
  {
    id: 1,
    title: "Sales Executive",
    description:
      "We are looking for motivated professionals who can guide customers through the home buying journey and deliver excellent client experience.",
    experience: "Experience: 2–4 Years",
  },
  {
    id: 2,
    title: "Site Engineer",
    description:
      "Responsible for supervising construction activities, ensuring quality standards, and coordinating with project teams on site.",
    experience: "Experience: 3–5 Years",
  },
  {
    id: 3,
    title: "Customer Relationship Executive",
    description:
      "Manage customer communication, assist with documentation, and ensure a smooth experience from booking to possession.",
    experience: "Experience: 1–3 Years",
  },
  {
    id: 4,
    title: "Marketing Executive",
    description:
      "Assist in marketing campaigns, lead generation, and digital initiatives to strengthen project visibility.",
    experience: "Experience: 2–4 Years",
  },
  {
    id: 5,
    title: "Sales Manager",
    description:
      "We are looking for experienced professionals who can lead sales, drive revenue growth, and build strong client relationships.",
    experience: "Experience: 2–4 Years",
  },
  {
    id: 6,
    title: "Receptionist",
    description:
      "We seek friendly and organized individuals who can manage front desk operations and provide a welcoming experience to visitors and clients.",
    experience: "Experience: 1–3 Years",
  },
  {
    id: 7,
    title: "Sourcing Manager",
    description:
      "We are looking for professionals who can manage channel partners, generate leads, and strengthen business networks.",
    experience: "Experience: 2–5 Years",
  },
  {
    id: 8,
    title: "Digital Marketing Manager",
    description:
      "We are seeking creative and data-driven professionals to handle digital campaigns, branding, and online growth strategies.",
    experience: "Experience: 2–4 Years",
  },
  {
    id: 9,
    title: "Hospitality Manager",
    description:
      "We are looking for professionals who can ensure excellent customer service, manage guest relations, and maintain high hospitality standards.",
    experience: "Experience: 3–4 Years",
  },
];

const CareerPage = () => {
  return (
    <section className=" min-h-screen pb-16">

      {/* Hero Section */}
      <div
        className="relative h-[390px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >

        {/* Content */}
        <div className="relative z-10 px-6 md:px-14 pb-10">
          <h1 className="text-white text-5xl md:text-6xl font-medium leading-tight">
            Build Your <br />
            Career With Us
          </h1>

          <p className="text-white/80 text-sm md:text-base mt-4 max-w-2xl">
            Explore exciting opportunities and grow your career in an
            environment that values dedication, teamwork, and continuous
            learning.
          </p>
        </div>

        {/* Floating Badge */}

      </div>

      {/* Career List */}
      <div className="w-full px-4 md:px-8 lg:px-12 mt-16 space-y-5">
        {careers.map((career) => (
          <div
            key={career.id}
            className="w-full bg-white rounded-2xl shadow-md px-8 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-lg transition duration-300"
          >

            {/* Left Content */}
            <div className="max-w-5xl">
              <h3 className="text-2xl md:text-3xl font-medium text-[#2b2b2b]">
                {career.title}
              </h3>

              <p className="text-[#666] text-sm md:text-base leading-relaxed mt-3">
                {career.description}
              </p>

              <p className="text-[#8b8b8b] text-sm mt-4">
                {career.experience}
              </p>
            </div>

            {/* Button */}
            <button className="min-w-[160px] h-[50px] border border-[#b68b07] rounded-xl text-[#b68b07] text-base font-medium hover:bg-[#b68b07] hover:text-white transition duration-300">
              Join Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPage;
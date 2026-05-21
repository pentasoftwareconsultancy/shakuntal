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
        className="relative h-[390px] bg-cover bg-center flex items-end rounded-3xl"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >

        {/* Content */}
        <div className="relative z-10 px-6 md:px-20 pb-10">
          <h1 className="text-white text-4xl md:text-6xl font-[400] font-raleway leading-14">
            Build Your <br />
            Career With Us
          </h1>

          <p className="text-white text-sm mt-2 font-poppins font-[300] leading-6">
            Explore exciting opportunities and grow your career in an
            environment that values dedication, teamwork, and continuous
            learning.
          </p>
        </div>

        {/* Floating Badge */}

      </div>

      {/* Career List */}
      <div className="w-full px-4 md:px-20 mt-16 space-y-5">
        {careers.map((career) => (
          <div
            key={career.id}
            className="w-full bg-white rounded-xl shadow-md px-10 py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-10 hover:shadow-lg transition duration-300"
          >

            {/* Left Content */}
            <div className="max-w-5xl">
              <h3 className="text-xl md:text-2xl font-[400] leading-4 font-raleway text-[#181A20]">
                {career.title}
              </h3>

              <p className="text-[#181A20] text-sm leading-5 font-poppins font-[300] mt-2 max-w-3xl">
                {career.description}
              </p>

              <p className="text-[#8b8b8b] text-sm leading-5 font-poppins font-[400] mt-1">
                {career.experience}
              </p>
            </div>

            {/* Button */}
            <a
              href="https://forms.gle/2Er83YVyPcidBJR58"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[240px] h-[43px] border border-[#997708] rounded-xl text-[#997708] text-base font-medium hover:bg-[#997708] hover:text-white transition duration-300 flex items-center justify-center"
            >
              Join Us
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPage;
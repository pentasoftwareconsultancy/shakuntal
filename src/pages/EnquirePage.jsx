import { useState } from "react";
import hero from "../assets/enquire/hero.png";
import { sendEnquireEmail } from "../core/services/email.service";

const EnquirePage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    project: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  /* Handle Input Change */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* Submit Form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendEnquireEmail(formData);

      alert("Enquiry Sent Successfully");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        project: "",
        comments: "",
      });

    } catch (error) {
      console.log(error);
      alert("Failed To Send Enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-end px-6 md:px-16 py-17"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-[560px] bg-white/95 backdrop-blur-sm rounded-b-[24px] p-10 shadow-2xl ">

        {/* Heading */}
        <h2 className="text-3xl font-raleway leading-9 font-[400] text-[#2b2b2b] mb-6">
          Your Passage into opulent living begins now
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full h-[46px] bg-[#F2F2F2] px-4 outline-none border border-transparent focus:border-[#b68b07]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-[46px] bg-[#F2F2F2] px-4 outline-none border border-transparent focus:border-[#b68b07]"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile
            </label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full h-[46px] bg-[#F2F2F2] px-4 outline-none border border-transparent focus:border-[#b68b07]"
              required
            />
          </div>

          {/* Project */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Project Name
            </label>

            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Enter project name"
              className="w-full h-[46px] bg-[#F2F2F2] px-4 outline-none border border-transparent focus:border-[#b68b07]"
            />
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Comments
            </label>

            <textarea
              rows="3"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Write your comments"
              className="w-full h-[46px] bg-[#F2F2F2] px-4 outline-none resize-none border border-transparent focus:border-[#b68b07]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-[252px] h-[48px] rounded-xl border border-[#997708] text-[#997708] font-medium hover:bg-[#997708] hover:text-white transition duration-300"
          >
            {loading ? "Sending..." : "Enquire Now"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default EnquirePage;



// import { useState } from "react";
// import hero from "../assets/enquire/hero.png";
// import { sendEnquireEmail } from "../core/services/email.service";

// const EnquirePage = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     project: "",
//     comments: "",
//   });

//   const [loading, setLoading] = useState(false);

//   /* Handle Input Change */
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   /* Submit Form */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       await sendEnquireEmail(formData);

//       alert("Enquiry Sent Successfully");

//       setFormData({
//         name: "",
//         email: "",
//         mobile: "",
//         project: "",
//         comments: "",
//       });

//     } catch (error) {
//       console.log(error);
//       alert("Failed To Send Enquiry");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="relative h-screen w-full flex items-start justify-end overflow-hidden">
//       <img src={hero} alt="background" className="absolute inset-0 w-full h-full object-fill" />
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20"></div>

//       {/* Form Card */}
//       <div className="relative z-10 w-full max-w-[380px] md:max-w-[440px] lg:max-w-[480px] mx-4 md:mx-10 lg:mx-16 bg-white/95 backdrop-blur-sm rounded-b-[24px] p-6 shadow-2xl mt-17 ">

//         {/* Heading */}
//         <h2 className="text-xl font-raleway leading-7 font-[400] text-[#000000] mb-3 ">
//           Your Passage into opulent living begins now
//         </h2>

//         {/* Form */}
//         <form className="space-y-2" onSubmit={handleSubmit}>

//           {/* Name */}
//           <div>
//             <label className="block text-xs font-medium mb-0.5">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="w-full h-[36px] bg-[#F2F2F2] px-4 outline-none border border-transparent focus:border-[#b68b07]"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-xs font-medium mb-0.5">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full h-[36px] bg-[#F2F2F2] px-4 outline-none border border-transparent focus:border-[#b68b07]"
//               required
//             />
//           </div>

//           {/* Mobile */}
//           <div>
//             <label className="block text-xs font-medium mb-0.5">Mobile</label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               placeholder="Enter mobile number"
//               className="w-full h-[36px] bg-[#F2F2F2] px-4 outline-none border border-transparent focus:border-[#b68b07]"
//               required
//             />
//           </div>

//           {/* Project */}
//           <div>
//             <label className="block text-xs font-medium mb-0.5">Project Name</label>
//             <input
//               type="text"
//               name="project"
//               value={formData.project}
//               onChange={handleChange}
//               placeholder="Enter project name"
//               className="w-full h-[36px] bg-[#F2F2F2] px-4 outline-none border border-transparent focus:border-[#b68b07]"
//             />
//           </div>

//           {/* Comments */}
//           <div>
//             <label className="block text-xs font-medium mb-0.5">Comments</label>
//             <textarea
//               rows="2"
//               name="comments"
//               value={formData.comments}
//               onChange={handleChange}
//               placeholder="Write your comments"
//               className="w-full bg-[#F2F2F2] px-4 py-2 outline-none resize-none overflow-hidden border border-transparent focus:border-[#b68b07]"
//             ></textarea>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-[252px] h-[48px] rounded-xl border border-[#997708] text-[#997708] font-medium hover:bg-[#997708] hover:text-white transition duration-300"
//           >
//             {loading ? "Sending..." : "Enquire Now"}
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// };

// export default EnquirePage;
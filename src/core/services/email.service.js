// src/core/services/email.service.js

import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_y5ure2g";

const CONTACT_TEMPLATE_ID = "template_0zaflun";
const ENQUIRE_TEMPLATE_ID = "template_x7s77up";

const PUBLIC_KEY = "Il6gRm9ykLFKoNwLT";

/* Contact Form Email */
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      project: formData.project,
      bhk: formData.bhk,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.log("Contact Email Error:", error);
    throw error;
  }
};

/* Enquire Form Email */
export const sendEnquireEmail = async (formData) => {
  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      project: formData.project,
      comments: formData.comments,
      time: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      ENQUIRE_TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.log("Enquire Email Error:", error);
    throw error;
  }
};
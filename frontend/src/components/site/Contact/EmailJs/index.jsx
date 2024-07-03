import emailjs from "emailjs-com";

const sendEmail = async (templateParams) => {
  try {
    
    const serviceId = "service_mjrznsr";
    const templateId = "template_hkg267u";
    const userId = "6syqjYWFHVqrjyChH";

    await emailjs.send(serviceId, templateId, templateParams, userId);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
  }
};

export default sendEmail;
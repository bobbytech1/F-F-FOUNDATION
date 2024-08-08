import useValidation from "../../hooks/useValidation";
import emailjs from "@emailjs/browser"
import Contact from "./Contact";
const GetForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const { formData, errors, handleChange, validate } =
    useValidation(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      emailjs.sendForm('service_0wgibv9', 'template_kqjb6xk', e.target, 'n9xHCC31iDqB7BuV7')
      console.log("Form submitted", formData);
      alert('Form Submitted')
      
    }
  };

  return (
    <>
      <div  className="flex flex-col lg:flex-row justify-between gap-[10%] py-[5%] p-8 bg-gray-100">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="md:text-[40px] sm:text-[35px] text-[25px] font-[700] ">Get Involved</h2>
          <p className='font-Poppins text-[16px] font-[300] py-[20px]'>Join us in making a difference! Your support and participation can transform lives. Whether through volunteering, donating, or spreading awareness, every action counts towards creating a brighter future for women and children in need. Together, we can build stronger communities and pave the way for lasting change.</p>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-customorange text-white font-semibold rounded hover:bg-customblue"
            >
              Submit
            </button>
          </form>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default GetForm;

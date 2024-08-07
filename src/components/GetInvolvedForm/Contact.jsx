import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return ( 
        <>
         <div className="w-full lg:w-1/2 flex flex-col items-start mt-[8%]">
        <div className="flex items-center gap-[12px] mb-8">
          <FaMapMarkerAlt size="30px" className="text-black mr-2" />
          <div>
            <p className="font-[700] text-[20px] font-Poppins">Address:</p>
            <p className='font-Poppins text-[16px] font-[300]'>123 NGO Street, City, Country</p>
          </div>
        </div>
        <div className="flex items-center gap-[12px] mb-8">
          <FaPhone size="30px" className="text-black mr-2" />
          <div>
            <p className="font-[700] text-[20px] font-Poppins">Phone:</p>
            <p className='font-Poppins text-[16px] font-[300]'>+123 456 7890</p>
          </div>
        </div>
        <div className="flex items-center gap-[12px] mb-8">
          <FaEnvelope size="30px" className="text-black mr-2" />
          <div>
            <p className="font-[700] text-[20px] font-Poppins">Email:</p>
            <p className='font-Poppins text-[16px] font-[300]'>info@ngo.org</p>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default Contact;
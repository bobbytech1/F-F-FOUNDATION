import { useState } from "react";
const useValidation = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const validate = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      else if (!/^\d+$/.test(formData.phone)) newErrors.phone = 'Phone number is invalid';
      if (!formData.message) newErrors.message = 'Message is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    return {
      formData,
      errors,
      handleChange,
      validate
    };
}
 
export default useValidation;
import { useForm } from "react-hook-form";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export default function Contact() {

  const { 
    register, 
    handleSubmit,
    formState: {errors} 
  } = useForm();

  function onSubmit(formData) {
    const body = `Hi Linfeng,\n${formData.message}\nSincerely\n${formData.name}`;
    console.log(body);
    window.location.href = `mailto:james2012.shun@gmail.com?subject=${formData.subject}&body=${body}`;
  }

  return (
    <div className="border border-green-500 min-h-screen flex flex-col justify-center items-center">
      <h1>Contact</h1>
      <div className="flex">
        <div className="flex items-center justify-center m-3">
          <AiOutlinePhone className="mx-3"/>
          <p>+1 778 678 8035</p>
        </div>
        <div className="flex items-center justify-center m-3">
          <AiOutlineMail className="mx-3"/>
          <p>james2012.shun@gmail.com</p>
        </div>
      </div>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 bg-orange-100 p-5">
        <div className="space-x-3 flex">
          <div>
            <input 
              {...register("name", {required: "Please fill your name"})}
              type="text" 
              className="contactInput"
              placeholder="Name"></input>
            {errors.name?.message && 
            <p className="error-msg">{errors.name.message}</p>}
          </div>
          <div>
            <input 
              {...register("email", {required: "Please fill your email address"})}
              type="email" 
              className="contactInput"
              placeholder="Email"></input>
            {errors.email?.message &&
            <p className="error-msg">{errors.email.message}</p>}
          </div>
        </div>    
        <div className="flex flex-col space-y-3">
          <input
            {...register("subject", {required: "Please enter your email subject"})}
            type="text"
            className="contactInput"
            placeholder="Subject"></input>
          {errors.subject?.message &&
          <p className="error-msg">{errors.subject.message}</p>}
          <textarea 
            {...register("message", {required: "Please enter your message"})}
            className="contactInput" 
            placeholder="Message"></textarea>
          {errors.message?.message &&
          <p className="error-msg">{errors.message.message}</p>}
        </div>   
        <button 
          className="px-7 py-2 rounded-md bg-amber-300 mx-auto"
          type="submit">Submit</button>
      </form>
    </div>
  );
}
import { useForm } from "react-hook-form";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export default function Contact() {

  const { 
    register, 
    handleSubmit,
    formState: {errors} 
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="border border-green-500 min-h-screen flex flex-col justify-center items-center">
      <h1>Contact</h1>
      <div className="border border-pink-500 flex">
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
        <div className="space-x-3">
          <input 
            {...register("name", {required: "Please fill your name"})}
            type="text" 
            className="contactInput"
            placeholder="Name"></input>
          <input 
            {...register("email", {required: "Please fill your email address"})}
            type="email" 
            className="contactInput"
            placeholder="Email"></input>
        </div>       
        <textarea 
          {...register("message", {required: "Please enter your message"})}
          className="contactInput" 
          placeholder="Message"></textarea>
        <p>{errors.message?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
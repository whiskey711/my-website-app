import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function onSubmit(formData) {
    const body = `Hi Linfeng,\n${formData.message}\nSincerely\n${formData.name}`;
    console.log(body);
    window.location.href = `mailto:james2012.shun@gmail.com?subject=${formData.subject}&body=${body}`;
  }

  return (
    <div className="w-full min-h-screen bg-stone-400">
      <div className="mx-auto pt-14 w-[800px] text-center">
      <h1 className="text-4xl font-extrabold py-5 text-blue-500">Contact me and let's talk</h1>
      <div className="mx-10">
        <div className="flex justify-evenly drop-shadow-xl rounded-lg p-4">
          <div className="flex items-center shadow-lg rounded-md py-1 px-3 hover:scale-105 transition bg-white">
            <AiOutlinePhone size={24} />
            <p className="ml-2 ">+1 (778) 678-8035</p>
          </div>
          <a 
            className="flex items-center shadow-lg rounded-md py-1 px-3 hover:scale-105 transition bg-white"
            href="mailto:james2012.shun@gmail.com"
            title="Email">
            <AiOutlineMail size={24} />
            <p className="ml-2 ">james2012.shun@gmail.com</p>
          </a>
          <a 
            className="flex items-center shadow-lg rounded-md py-1 px-3 hover:scale-105 transition bg-white"
            href="https://www.linkedin.com/in/linfeng-xu-98b51a126/"
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn">
            <AiOutlineLinkedin size={24} />
            <p className="ml-2 ">Linfeng Xu</p>
          </a>
          
        </div>

        <div className="drop-shadow-xl rounded-lg p-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-5 p-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <input
                  {...register("name", { required: "Please fill your name" })}
                  type="text"
                  className="contactInput"
                  placeholder="Name"></input>
                {errors.name?.message &&
                  <p className="error-msg">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  {...register("email", { required: "Please fill your email address" })}
                  type="email"
                  className="contactInput"
                  placeholder="Email"></input>
                {errors.email?.message &&
                  <p className="error-msg">{errors.email.message}</p>}
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <input
                {...register("subject", { required: "Please enter your email subject" })}
                type="text"
                className="contactInput"
                placeholder="Subject"></input>
              {errors.subject?.message &&
                <p className="error-msg">{errors.subject.message}</p>}
              <textarea
                {...register("message", { required: "Please enter your message" })}
                className="contactInput"
                rows={8}
                placeholder="Message"></textarea>
              {errors.message?.message &&
                <p className="error-msg">{errors.message.message}</p>}
            </div>
            <button
              className="px-7 py-2 rounded-md text-white text-lg font-medium bg-blue-500 hover:bg-sky-400 hover:scale-110 duration-300 mx-auto"
              type="submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}
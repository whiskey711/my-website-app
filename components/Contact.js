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
    <div className="w-full min-h-screen bg-stone-100 p-16">
      <div className="mx-auto pt-14 w-[1000px] text-center">
        <h1 className="text-4xl font-extrabold py-5 text-blue-500">Contact me and let's talk</h1>
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-start space-y-10 mt-5 p-4">
            <div className="flex items-center py-2 px-4 hover:scale-105 duration-300">
              <AiOutlinePhone size={48} color="darkorange" />
              <div className="mx-auto">
                <h1 className="text-2xl font-bold">Call me</h1>
                <p className="text-sm text-neutral-600">+1 (778) 678-8035</p>
              </div>
            </div>
            <a
              className="flex items-center py-2 px-4 hover:scale-105 duration-300"
              href="mailto:james2012.shun@gmail.com"
              title="Email">
              <AiOutlineMail size={48} color="darkorange" />
              <div className="mx-auto">
                <h1 className="text-2xl font-bold">Email</h1>
                <p className="text-sm text-neutral-600">james2012.shun@gmail.com</p>
              </div>
            </a>
            <a
              className="flex items-center py-2 px-4 hover:scale-105 duration-300"
              href="https://www.linkedin.com/in/linfeng-xu-98b51a126/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn">
              <AiOutlineLinkedin size={48} color="darkorange" />
              <div className="mx-auto">
                <h1 className="text-2xl font-bold">LinkedIn</h1>
                <p className="text-sm text-neutral-600">Linfeng Xu</p>
              </div>
            </a>

          </div>

          <div className="p-4 col-span-2">
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
                    <p className="error-msg">
                      {errors.name? errors.name.message : ""}
                    </p>
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
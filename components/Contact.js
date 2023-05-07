import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin, AiOutlineSend } from "react-icons/ai";

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
      <div className="pt-14 text-center">
        <h1 className="text-5xl font-extrabold py-5 text-blue-500 text-shadow shadow-gray-400">Contact me and let&apos;s talk</h1>
        <div className="grid lg:grid-cols-3">
          <div className="flex flex-col justify-start space-y-10 mt-5 p-4">
            <div className="flex items-center py-2 px-4 hover:scale-105 duration-300">
              <AiOutlinePhone size={48} color="darkorange" />
              <div className="mx-auto">
                <h1 className="text-2xl font-semibold">Call me</h1>
                <p className="text-sm text-neutral-600">+1 (778) 678-8035</p>
              </div>
            </div>
            <a
              className="flex items-center py-2 px-4 hover:scale-105 duration-300"
              href="mailto:james2012.shun@gmail.com"
              title="Email">
              <AiOutlineMail size={48} color="darkorange" />
              <div className="mx-auto">
                <h1 className="text-2xl font-semibold">Email</h1>
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
                <h1 className="text-2xl font-semibold">LinkedIn</h1>
                <p className="text-sm text-neutral-600">Linfeng Xu</p>
              </div>
            </a>

          </div>

          <div className="p-4 lg:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-5 p-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="input"
                    placeholder="Name"></input>
                  <p className={"error-msg " +
                    (errors.name?.type === "required" ? "visible" : "invisible")
                  }>
                    Please fill your name
                  </p>
                </div>
                <div>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="input"
                    placeholder="Email"></input>
                  <p className={"error-msg " + 
                    (errors.email?.type === "required" ? "visible" : "invisible")  
                  }>
                    Please fill your email address
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <input
                  {...register("subject", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Subject"></input>
                  <p className={"error-msg " + 
                    (errors.subject?.type === "required" ? "visible" : "invisible")  
                  }>
                    Please enter your email subject
                  </p>
                <textarea
                  {...register("message", { required: true })}
                  className="input mt-5"
                  rows={8}
                  placeholder="Message"></textarea>
                <p className={"error-msg " + 
                  (errors.message?.type === "required" ? "visible" : "invisible")  
                }>
                  Please enter your message
                </p>
              </div>
              <button
                className="flex items-center px-7 py-2 rounded-md text-white text-lg font-medium bg-blue-500 hover:bg-sky-400 hover:scale-110 duration-300 mx-auto"
                type="submit">
                Submit
                <AiOutlineSend className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
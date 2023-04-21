import Head from 'next/head'
import About from '@/components/About'
import Projects from '@/components/Projects'
import HomeSec from '@/components/HomeSec'
import Image from 'next/image'
import Contact from '@/components/Contact'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
      </Head>
      <section id="home"><HomeSec /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      <section>
        <div className="w-full min-h-screen flex justify-center items-center bg-neutral-400">

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}></input>
            {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

            <input
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}></input>
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <input type="submit" />
          </form>

        </div>
      </section>
    </>
  )
}

import Image from "next/image";

export default function About() {
  const selfIntro = <div className="text-lg space-y-5">
    <p>I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</p>
    <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
    <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
  </div>;

  const skills = [
    {
      name: "HTML",
      url: "HTML"
    },
    {
      name: "CSS",
      url: "CSS"
    },
    {
      name: "Tailwind",
      url: "Tailwind"
    },
    {
      name: "JavaScript",
      url: "JavaScript"
    },
    {
      name: "React",
      url: "React"
    },
    {
      name: "Next",
      url: "Next"
    },
    {
      name: "Java",
      url: "Java"
    },
    {
      name: "Spring",
      url: "Spring"
    },
    {
      name: "C#",
      url: "CSharp"
    },
    {
      name: ".NET",
      url: "dotNET"
    },
    {
      name: "MySql",
      url: "MySql"
    },
    {
      name: "GitHub",
      url: "GitHub"
    },
  ];
  const skillsElement = skills.map((skill) => {
    return (
      <div className="py-3 px-3 bg-stone-50 rounded-md mr-3 mb-3 text-md shadow-lg hover:scale-110 duration-300 flex justify-evenly items-center" key={skill}>
          <Image src={"/skills/" + skill.url + ".svg"}
            width={40}
            height={40}
            alt="logo"
          />
          <p className="font-semibold">
            {skill.name}
          </p>
      </div>
    );
  });

  return (
    <div className="min-h-screen p-16 bg-stone-100">
      <div className="grid grid-cols-2 gap-28 mx-20 my-10">
        <div>
          <h1 className="text-4xl font-bold my-5">About me</h1>
          <div>{selfIntro}</div>
          <button
            className="px-7 py-2 text-white bg-blue-500 text-xl font-semibold mt-10 rounded-md shadow-lg hover:bg-sky-400 hover:scale-110 duration-300">
            Contact
          </button>
        </div>
        <div>
          <div className="mb-10">
            <h1>Profile</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-10">My Skills</h1>
            <div className="grid grid-cols-2 gap-3">
              {skillsElement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
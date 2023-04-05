import Image from "next/image";

export default function About() {
  const selfIntro = <div className="text-lg space-y-5">
    <p>I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</p>
    <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
    <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
  </div>;

  const skills = ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Next", "Java", "Spring", "CSharp", "dotNET", "MySql", "GitHub"];
  const skillsElement = skills.map((skill) => {
    return (
      <div className="py-2 px-3 bg-stone-50 rounded-md mr-3 mb-3 text-md drop-shadow-lg hover:scale-105 transition" key={skill}>
        <div className="flex justify-evenly">
          <Image src={"/skills/" + skill + ".svg"} 
            width={32}
            height={32}
            alt="logo"
          />
          {skill}
        </div>
      </div>
    );
  });

  return (
    <div className="border border-red-600 min-h-screen">
      <div className="grid grid-cols-2 gap-28 mx-20 my-10">
        <div>
          <h1 className="text-4xl font-bold my-5">About me</h1>
          <div>{selfIntro}</div>
          <button 
            className="px-10 py-3 bg-amber-400 text-xl mt-10 rounded-md drop-shadow-2xl hover:bg-amber-500">
            Contact
          </button>
        </div>
        <div>
          <div className="mb-10">
            <h1>Profile</h1>
            <div className="border border-green-600 w-52 h-52">
              Image
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-10">My Skills</h1>
            <div className="grid grid-cols-2">
              {skillsElement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
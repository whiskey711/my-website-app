export default function HomeSec() {
  return (
    <div className="border border-orange-600 min-h-screen flex justify-center items-center">
      <div className="border border-teal-500 relative mx-40 text-center">
        <h1 className="text-6xl font-black uppercase">Hi, I am Linfeng Xu</h1>
        <p className="text-xl text-gray-700 mt-4 mb-8">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <button className="px-10 py-3 bg-amber-400 text-2xl rounded-md drop-shadow-2xl hover:bg-amber-500">Projects</button>
      </div>
      <div className="border border-sky-500 absolute right-0">
        Side panel
        <div>Github</div>
        <div>LinkedIn</div>
        <div>Email</div>
        <div></div>
      </div>
    </div>
  );
}
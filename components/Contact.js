export default function Contact() {
  return (
    <div className="border border-green-500 min-h-screen flex flex-col justify-center items-center">
      <h1>Contact</h1>
      <form className="flex flex-col space-y-5 bg-orange-100 p-5">
        <div className="space-x-3">
          <input 
            type="text" 
            className="contactInput"
            placeholder="Name"></input>
          <input 
            type="email" 
            className="contactInput"
            placeholder="Email"></input>
        </div>
        
        <textarea className="contactInput" placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
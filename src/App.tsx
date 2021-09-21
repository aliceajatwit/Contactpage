import "tailwindcss/tailwind.css";
import "./App.css";
import { BeakerIcon, PhoneIcon } from "@heroicons/react/solid";

function App() {
  return (
    <main className="grid grid-cols-2  w-screen bg-gray-50">
      <div className="bg-green-400 p-10 max-w-2xl ">
        <div>
          <h1>Contact Information</h1>
        </div>
        <div>
          <label className="">
            nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa disctumst amet. Sapien tortor lacus arcu.
          </label>
        </div>
        <div>
          <label> +1(555)123-999</label>
        </div>
        <div>
          <label>support@workcation.com</label>
        </div>
      </div>
      <form className=" p-4 max-w-xl bg-gray-50">
        <div>
          <h2 className=" flex p-2 text-xl ">Send us a Message</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className=" text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input className=" rounded sm:border-0 md:border"></input>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking- text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input className="sm:border-0 md:border rounded"></input>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking- text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input className="sm:border-0 md:border rounded"></input>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input className="sm:border-0 md:border rounded"></input>
          </div>

          <div className=" col-span-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking- text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input className="sm:border-0 md:border rounded box-border w-96"></input>
          </div>

          <div className=" col-span-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking- text-gray-700 text-sm font-bold mb-2 ">
              Message
            </label>
            <input className="sm:border-0 md:border rounded box-border w-96 h-32"></input>
          </div>

          <div className="flex w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <button className="bg-green-400 border sm:border-0 md:border focus:underline">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default App;

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-800 h-screen">
      <div className="w-screen h-20 bg-gradient-to-t from-gray-700 via-rose-500 to-orange-400 flex">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="mr-auto bg-transparent mt-8 ml-8"
        />
        <button className="bg-blue-400 text-slate-800 font-bold h-8 mt-6 px-3 rounded-lg border-2 border-slate-800 ml-auto mr-10 hover:underline active:bg-blue-300">
          Login
        </button>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-5xl text-orange-400 font-bold ml-4">
          Welcome to Tier 4U!
        </h1>
        <h2 className="text-2xl text-rose-500 font-semibold ml-11 mt-4">
          Your own personal tier ranking tool
        </h2>
      </div>
      <div className="m-10">
        <p className="text-lg text-slate-100 text-center">
          Tier 4 U is a place where you can rank and keep track of all of your
          favourite (or least favourite!) things. Get started below by browsing
          available <br></br> templates by category or create your own template
          for everyone to use if you want to rank something that doesn&apos;t already
          have a template created!
        </p>
        <p className="text-lg text-slate-100 text-center mt-6">
          You must have an account to save your progress in any template, or to
          create your own template. <br></br>Press the login button to login or
          create an account if you don&apos;t have one.
        </p>
      </div>
      <div className="flex mt-20 place-content-center space-x-36 mx-12">
        <Link href= "http://localhost:3001/browse-avail" className="bg-cyan-900 text-slate-100 font-semibold rounded-xl border-2 border-slate-100 px-3 py-2 hover:underline active:bg-cyan-800">
            Browse available categories

          </Link>
        <Link
          href="http://localhost:3000/create-custom"
          className="bg-cyan-900 text-slate-100 font-semibold rounded-xl border-2 border-slate-100 px-3 py-2 hover:underline active:bg-cyan-800"
        >
          Create your own template
        </Link>
      </div>

          <Link href= "http://localhost:3000/create-custom" className="bg-cyan-900 text-slate-100 font-semibold rounded-xl border-2 border-slate-100 px-3 py-2 hover:underline active:bg-cyan-800">
            Create your own template
          </Link>
        </div>

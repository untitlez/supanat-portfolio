export default function IntroPage() {
    
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-primary text-white relative">
      <div className="hover:w-full cursor-pointer group animate">
            <img src="/icons/click.webp" className="w-10 h-10 invert animate-bounce absolute left-[41%] top-[42%] group-hover:hidden"/>
            <h1 className="group-hover:hidden">Portfolio .</h1>

        <div className="group-hover:h-screen group-hover:grid group-hover:place-content-center 
        group-hover:bg-white group-hover:text-primary animate">
            <h1 className="hidden group-hover:flex">Portfolio .</h1>
        </div>
      </div>

      </div>

    </>
  );
}

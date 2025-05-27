import AuroraBg from "@/app/components/AuroraBg";
import DecryptedText from "@/app/components/DecryptedText";

export default function Intro() {
  return (
    <>
      {/* Back Ground  */}
      <div className="absolute w-full h-3/4 z-10 bg-gradient-to-b from-base-100 to-transparent">
        <AuroraBg />
      </div>
      {/* Content  */}
      <section
        className="relative min-h-screen w-full max-w-screen-md lg:max-w-screen-2xl 
      grid place-content-center md:grid-cols-2 px-4 lg:px-24 z-20"
      >
        <div className="space-y-12 grid place-content-center text-center sm:text-start z-50">
          <div className="space-y-3">
            <h1 className="md:w-1/2">
              <DecryptedText
                animateOn="view"
                text="SUPANAT CHAISRI"
                sequential={true}
              />
            </h1>

            <h2>
              <DecryptedText
                animateOn="view"
                text="Frontend Developer"
                sequential={true}
              />
            </h2>
          </div>

          <p className="text-base lg:text-lg opacity-60">
            <DecryptedText
              animateOn="view"
              text="Progress through practice and preparing for the next opportunity."
              maxIterations={40}
            />
          </p>
        </div>
        <figure className="hidden md:grid place-content-center">
          <img src="/3D.png" alt="Image Cover" className="h-96 spin" />
        </figure>
      </section>
    </>
  );
}

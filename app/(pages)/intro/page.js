import Image from "next/image";
import AuroraBg from "@/components/AuroraBg";
import DecryptedText from "@/components/DecryptedText";
import { ButtonLink } from "@/components/ButtonLink";

export default function Intro() {
  return (
    <section className="hidden relative min-h-screen w-full lg:grid grid-cols-2 place-items-center px-4 lg:px-24 z-20">
      {/* Back Ground  */}
      <div className="absolute left-0 top-0 w-full h-3/4 z-10 bg-gradient-to-b from-base-100 to-transparent">
        <AuroraBg />
      </div>
      {/* Content  */}
      <div className="space-y-16 max-w-md z-50">
        <div className="space-y-3">
          <h1 className="w-2/3">
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

        <ButtonLink />
      </div>
      <figure className="relative aspect-square h-[50vh] z-50">
        <Image
          src="/3D.webp"
          alt="Image Cover"
          className="spin"
          sizes="100vw"
          fill
        />
      </figure>
    </section>
  );
}

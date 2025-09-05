import Link from "next/link";
import Image from "next/image";
import { Github, Download } from "lucide-react";

import { profile } from "@/lib/profile";

import DecryptedText from "@/components/DecryptedText";

export default function Intro() {
  return (
    <section className="min-h-screen w-full overflow-hidden flex flex-col-reverse justify-end lg:grid lg:grid-cols-2 place-items-center gap-8 lg:gap-0 px-4 lg:px-24 z-0">
      {/* Title  */}
      <div className="max-w-md flex flex-col gap-16">
        <div className="space-y-3 text-center lg:text-start">
          <h1 className="lg:w-2/3">
            <DecryptedText
              animateOn="view"
              text={profile.fullName}
              sequential={true}
            />
          </h1>

          <h2>
            <DecryptedText
              className="text-primary/80 font-normal"
              animateOn="view"
              text={profile.position}
              sequential={true}
            />
          </h2>
        </div>

        {/* Link  */}
        <div className="flex flex-wrap gap-3">
          <Link
            href={profile.contacts.github}
            target="_blank"
            className="btn btn-outline flex-1 lg:flex-none lg:px-8"
          >
            <Github className="size-4" />
            Github
          </Link>
          <Link
            href={profile.contacts.resume}
            target="_blank"
            className="btn btn-outline flex-1 lg:flex-none lg:px-8"
          >
            <Download className="size-4" />
            Download CV
          </Link>
        </div>
      </div>

      {/* Image  */}
      <figure className="relative aspect-square h-[50vh] bg-transparent">
        <Image
          src="/3D.webp"
          alt="Image Cover"
          className="spin bg-transparent"
          sizes="100vw"
          priority={true}
          fill
        />
      </figure>
    </section>
  );
}

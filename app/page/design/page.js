import { designData } from "@/app/data/DesignData";
import Link from "next/link";

export default function DesignPage() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8">
        {designData.map((data) => (
          <div key={data.id} className="mockup-phone relative">
            <div className="camera"></div>
            <div className="display">
              <div className={`artboard artboard-demo phone-1 gap-8 group opacity-90 ${data.bgColor} `}>
                <img
                  src={data.src}
                  alt="project image"
                  className="object-cover group-hover:opacity-30"
                />
                  <p className="text-white">{data.title}</p>

                <div className="hidden absolute top-60 text-base-100 w-1/2 gap-8 items-center flex-col group-hover:flex">
                  <Link
                    href={`/page/design/${data.id}`}
                    className="btn btn-accent w-full"
                  >
                    View 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

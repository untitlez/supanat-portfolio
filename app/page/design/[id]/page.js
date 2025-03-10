import { designData } from "@/app/components/data/DesignData";

export default function DesignIdPage({ params }) {
  const { id } = params;
  const data = designData.find((item) => item.id === id);

  return (
    <>
      <div className="main md:flex-row">
        <div className="content md:w-[60%]">
          <div className="mockup-phone relative">
            <div className="camera"></div>
            <div className="display">
              <div
                className={`artboard artboard-demo phone-1 gap-8 group opacity-90 ${data.bgColor} `}
              >
                <img
                  src={data.src}
                  alt={`${data.title} image`}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
 
        <div className="content bg-base-100 rounded-xl gap-12 p-8 fr">
          <div className="flex gap-3 justify-end">
            <a
              href={data.link01}
              target="_blank"
              className="inline-flex gap-2 btn btn-sm btn-accent"
            >
              <img
                src="/icons/figma.png"
                alt="icon figma"
                className="h-4 w-4"
              />
              Preview
            </a>
            {data.link02 ? (
              <a
                href={data.link02}
                target="_blank"
                className="inline-flex gap-2 btn btn-sm btn-accent"
              >
                <img
                  src="/icons/figma.png"
                  alt="icon figma"
                  className="h-4 w-4"
                />
                Preview
              </a>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <ul
              className="size-palette text-white"
              style={{ backgroundColor: data.primary }}
            >
              <li>Primary Color</li>
              <li>{data.primary}</li>
            </ul>

            <ul
              className="size-palette text-white"
              style={{
                backgroundColor: data.secondary,
                display: data.secondary ? "flex" : "none",
              }}
            >
              <li>Secondary Color</li>
              <li>{data.secondary}</li>
            </ul>
            <ul
              className="size-palette text-white border"
              style={{ backgroundColor: data.textColor01 }}
            >
              <li>Text Color</li>
              <li>{data.textColor01}</li>
            </ul>
            <ul
              className="size-palette text-black"
              style={{ backgroundColor: data.textColor02 }}
            >
              <li>Text Color</li>
              <li>{data.textColor02}</li>
            </ul>
            <div className="w-full my-6">
              <ul className="flex justify-between">
                <p>Time Frame :</p>
                <li className="justify-end">{data.timeFrame}</li>
              </ul>
              <ul className="flex justify-between">
                <p>Role :</p>
                <li className="justify-end">{data.role}</li>
              </ul>
              <ul className="flex justify-between">
                <p>Font Family :</p>
                <li className="justify-end">{data.font}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

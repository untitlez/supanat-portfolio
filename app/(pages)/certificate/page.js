import { certificate } from "@/data/Certificate";

export default function Certificate() {
  return (
    <>
      <div className="tab-contents fd">
        {certificate.map((item, i) => (
          <div key={i} className="card border shadow-md bg-base-100">
            <figure className="shadow-md">
              <img src={item.src} alt={item.name} className="object-contain " />
            </figure>
            <div className="card-body p-4 sm:p-6 lg:p-8 flex-row justify-between items-center">
              <div>
                <h3 className="card-title">{item.name}</h3>
                <p>{item.course}</p>
              </div>
              <a href={`/${item.link}`} className="btn btn-accent">
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

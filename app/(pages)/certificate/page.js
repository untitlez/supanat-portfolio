import { certificate } from "@/data/Certificate";

export default function Certificate() {
  
    return (
      <>
        <div className="main sm:grid-cols-2">
          {certificate.map((item, i) => (
            <div key={i} className="col-span-1 card border shadow-md">
              <figure className="aspect-[3/4 shadow">
                <img src={item.src} alt={item.name} className="object-contain" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.course}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  
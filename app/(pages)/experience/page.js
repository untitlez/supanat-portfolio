import { Header } from "@/components/Header";

const experience = [
  {
    job: "BARISTA",
    time: "DEC 2020 - JUL 2024 (3 years 8 months)",
    place: "Doi Chaang Coffee (Chiang Mai international Airport)",
    job_description:
      "Preparing and serving meals and drinks / Cleaning work area, coffee machine and equipment / Describe menu items and suggest products to customers / Cashier duties / Inventory duties",
    position: "timeline-start md:text-end",
  },

  {
    job: "PURCHASING",
    time: "JAN 2019 - OCT 2020 (1 years 10 months)",
    place: "AnLao Lao Restaurant (Chiang Rai)",
    job_description:
      "Purchase and provision of goods and ingredient / Customer service / Take orders and serving foods and beverages / Assisting in the bar making cocktails, mixed drinks, wine and beer / ",
    position: "timeline-end",
  },

  {
    job: "PART TIME",
    time: "2014 - 2017 (3 Years)",
    place: "SF Cinema City (Promenada Chiang Mai)",
    job_description: "Operation, Coordinate, services",
    position: "timeline-start md:text-end",
  },
  {
    job: "PART TIME",
    time: "2014 (6 months)",
    place: "The Pizza Company (Chiang Mai)",
    job_description: "Driver, Made to order, Cleaning",
    position: "timeline-end",
  },
];

export default function Experience() {
  return (
    <div className="lg:min-h-screen text-primary">
      <Header label="experience" />

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical gap-2 md:gap-0 col-span-6 md:scale-90">
        {experience.map((exp, i) => (
          <li key={i}>
            <div className="timeline-middle md:mx-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`md:bg-base-100 md:border border-base-content/50 rounded-3xl md:shadow-xl hover:shadow-base-content/20 py-4 md:p-8 animate ${exp.position}`}
            >
              <div>
                <time className="font-mono italic">{exp.time}</time>
                <h3 className="font-bold">{exp.job}</h3>
                <h4 className="mb-2">{exp.place}</h4>
                <p className="text-base-content">{exp.job_description}</p>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

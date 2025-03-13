export default function Experience() {
  const experience = [
    {
      job: "BARISTA",
      time: "JAN 2017 - OCT 2019",
      place: "Doi Chaang Coffee (Chiangmai international Airport)",
      job_description:
        "Preparing and serving meals and drinks / Cleaning work area, coffee machine and equipment / Describe menu items and suggest products to customers / Cashier duties / Inventory duties",
      position: "timeline-start md:text-end",
    },

    {
      job: "PURCHASING",
      time: "JAN 2017 - OCT 2019",
      place: "AnLao Lao Restaurant (Chiang Rai)",
      job_description:
        "Purchase and provision of goods and ingredient / Customer service / Take orders and serving foods and beverages / Assisting in the bar making cocktails, mixed drinks, wine and beer / ",
      position: "timeline-end",
    },

    {
      job: "PART TIME",
      time: "2014 - 2016",
      place: "SF Cinema City (Promenada Chiang Mai)",
      job_description: "Operation, Coordinate, services",
      position: "timeline-start md:text-end",
    },
    {
      job: "PART TIME",
      time: "2014",
      place: "The Pizza Company (Chiang Mai)",
      job_description: "Driver, Made to order, Cleaning",
      position: "timeline-end",
    },
  ];

  return (
    <>
      <div className="main animate-viewpoint">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical col-span-4">
        {experience.map((exp, i) => (
          <li key={i}>
            <div className="timeline-middle">
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
            <div className={`md:mb-10 ${exp.position}`}>
              <time className="font-mono italic">{exp.time}</time>
              <h3 className="font-black">{exp.job}</h3>
              <h3 className="font-bold text-base-content/70 mb-1">
                {exp.place}
              </h3>
              <p>{exp.job_description}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

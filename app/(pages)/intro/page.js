export default function Intro() {
  const text = "PORTFOLIO.".split("");
  return (
    <>
      <div className="h-screen grid place-items-center bg-primary">
        <ul className="flex gap-[1px] text-white ">
        {text.map((letter, index) => (
          <li
          key={index}
          className="BlurInTop"
          style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h1>{letter}</h1>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}

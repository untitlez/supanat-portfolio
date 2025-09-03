export const Header = ({ label }) => {
  return (
    <div className="w-full btn btn-lg btn-primary lg:btn-ghost pointer-events-none flex items-center lg:gap-16 my-6 lg:my-24">
      <span className="h-0 lg:h-1 bg-base-content/50 flex-1" />
      <h2 className="uppercase font-semibold text-base-100 lg:text-primary">
        {label}
      </h2>
      <span className="h-0 lg:h-1 bg-base-content/50 flex-1" />
    </div>
  );
};

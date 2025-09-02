export const StackSkill = ({ title, stacks }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="capitalize">{title ?? ""}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {stacks?.map((item, i) => (
          <div key={i} className="tooltip" data-tip={item.label}>
            <div className="btn btn-sm btn-square btn-outline border-transparent bg-white pointer-events-none">
              <img src={item.icon} alt="icon" className="size-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

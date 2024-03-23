function Filters() {
  return (
    <div className="font-semibold">
      <label className="mb-2 block text-[12px]">sort by</label>
      <select className="w-64 cursor-pointer px-2 py-2 bg-inherit border-[2px] border-[#2f3237] text-[#D2D5DA] outline-none text-[13px] rounded-lg">
        <option className="" value="population">
          Population
        </option>
        <option className="" value="name">
          Name
        </option>
        <option className="" value="population">
          Population
        </option>
      </select>
    </div>
  );
}

export default Filters;

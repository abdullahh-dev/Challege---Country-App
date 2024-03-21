import search_icon from '../assets/images/Search.svg';

function SearchBar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[14px] font-semibold">Found 286 countries</h1>
      <div className="relative">
        <img
          className="absolute top-[6px] left-[4px] w-5"
          src={search_icon}
          alt="wds"
        />
        <input
          placeholder="Search by Name, Region, Subregion"
          className="w-72 placeholder:text-[12px] pl-8 h-8 rounded-md bg-[#282B30] focus:outline-none"
          type="search"
        />
      </div>
    </div>
  );
}

export default SearchBar;

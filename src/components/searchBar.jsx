import search_icon from "../search-icon.svg";

export function SearchBar({ setCity, search, setSearch }) {
  function formSubmit(e) {
    e.preventDefault();
    setCity(search.charAt(0).toUpperCase() + search.slice(1));
    setSearch("");
  }
  return (
    <section className="bg-black bg-opacity-40 max-w-fit rounded-lg p-2 px-3 mx-auto mt-20 flex flex-row">
      <img
        src={search_icon}
        alt="search icon"
        className=" h-7 mr-2 cursor-pointer"
        onClick={() => {
          setCity(search.charAt(0).toUpperCase() + search.slice(1));
          setSearch("");
        }}
      />
      <form
        onSubmit={formSubmit}
        className=""
      >
        <input
          className="text-xl text-white bg-transparent text-left xl:ml-20 xl:w-60"
          placeholder="Search a city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </section>
  );
}

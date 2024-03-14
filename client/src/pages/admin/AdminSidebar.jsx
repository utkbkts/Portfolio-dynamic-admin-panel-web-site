const AdminSidebar = ({ tabs, setTabs }) => {
  return (
    <section className="w-full text-center">
      <div>
        <h1 className="font-title text-gray-950 uppercase py-16 text-2xl">
          AdminSidebar
        </h1>
        <div>
          <ul className="flex items-center justify-center flex-col gap-4">
            <li
              onClick={() => setTabs(1)}
              className={`${
                tabs === 1 ? "bg-gray-700" : ""
              } w-full py-2 cursor-pointer`}
            >
              ABOUT
            </li>
            <li
              onClick={() => setTabs(2)}
              className={`${
                tabs === 2 ? "bg-gray-700" : ""
              } w-full py-2 cursor-pointer`}
            >
              PORTFOLIO
            </li>
            <li
              onClick={() => setTabs(3)}
              className={`${
                tabs === 3 ? "bg-gray-700" : ""
              } w-full py-2 cursor-pointer`}
            >
              BLOG
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminSidebar;

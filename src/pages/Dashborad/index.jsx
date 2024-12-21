import Layout from "../../Components/Layout.jsx";
import { ArrowPathIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { dummyData } from "../../static/mockData.js";
import RepositoryItem from "./RepositoryItem.jsx";
import { ThemeContext } from "../../Context/ThemeProvider/index.jsx";

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(dummyData);
  const {isSideBarVisible}  = useContext(ThemeContext)

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = dummyData.filter(({ title, language }) =>
        title.toLowerCase().includes(searchTerm) || language.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  return (
    <Layout>
      <div className="p-2">
        <div className="bg-white w-full rounded-xl border">
          <div className={`border-b p-4 space-y-4  ${isSideBarVisible? 'bg-gray-200' : '' }`}>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h2 className="font-semibold text-xl">Repositories</h2>
                <p className="font-light text-sm">33 total repositories</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center text-xs p-2 px-4 gap-2 border rounded-md">
                  <ArrowPathIcon className="w-4 h-4" />
                  Refresh All
                </button>
                <button className="flex items-center text-xs p-2 px-4 gap-2 bg-slate-200 text-white rounded-md">
                  <PlusIcon className="w-4 h-4" />
                  Add Repository
                </button>
              </div>
            </div>
            <label htmlFor="inputSearch" className="flex items-center border rounded-md gap-2 px-2 py-2 w-fit">
              <MagnifyingGlassIcon className="w-4 h-4 stroke-2" />
              <input
                id="inputSearch"
                type="text"
                placeholder="Search Repositories"
                onChange={handleFilter}
                className="text-xs w-[200px] placeholder:text-gray-700 outline-none"
              />
            </label>
          </div>
          <div className={`${isSideBarVisible? 'bg-gray-200' : '' }`}>
            {filteredData.length ? (
              filteredData.map((repo, index) => (
                <RepositoryItem
                  key={index}
                  title={repo.title}
                  type={repo.type}
                  language={repo.language}
                  size={repo.size}
                  updatedAt={repo.updatedAt}
                  isLast={index === filteredData.length - 1}
                />
              ))
            ) : (
              <div className="p-4 text-gray-500 text-center">
                No matching repositories found.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

import {
    ArrowRightStartOnRectangleIcon,
    Bars4Icon,
    BookOpenIcon,
    ChevronDownIcon,
    CloudIcon,
    CodeBracketIcon,
    Cog6ToothIcon,
    HomeIcon,
    PhoneIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

import Logo from '../static/svgLogos/logo.svg'

const topNaviationContent = [
    { id: 1, icon: HomeIcon, label: "Repositories", active: true },
    { id: 2, icon: CodeBracketIcon, label: "AI Code Review" },
    { id: 3, icon: CloudIcon, label: "Cloud Security" },
    { id: 4, icon: BookOpenIcon, label: "How to Use" },
    { id: 5, icon: Cog6ToothIcon, label: "Settings" },
]

const bottomNavigationContent = [
    { id: 1, icon: PhoneIcon, label: "Support" },
    { id: 2, icon: ArrowRightStartOnRectangleIcon, label: "Logout" },
]

const SideBarContent = ({ handleClick, topNaviLinks, bottomNaviLinks }) => {
    return (<>
        <nav className="flex-1 px-4 py-2 space-y-2">
            {topNaviLinks.map(({ id, icon: Icon, label, active }) => (
                <div
                    key={id}
                    onClick={() => handleClick(id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg 
                        ${active ? "bg-slate-200 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                >
                    <Icon className="w-6" />
                    <span className="ml-3 font-medium">{label}</span>
                </div>
            ))}
        </nav>
        <div className="px-4 py-4 space-y-2">
            {bottomNaviLinks.map(({ id, icon: Icon, label }) => (
                <div
                    key={id}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                >
                    <Icon className="w-5" />
                    <span className="ml-3">{label}</span>
                </div>
            ))}
        </div>
    </>)
}

const SideBar = () => {
    const { isSideBarVisible, setIsSideBarVisible } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(false);
    const [topNaviLinks, setTopNaviLinks] = useState(topNaviationContent)
    const [bottomNaviLinks] = useState(bottomNavigationContent)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = (id) => {
        const updatedTopLinks = topNaviLinks.map(link => {
            return link.id === id ? { ...link, active: true } : { ...link, active: false }
        })
        setTopNaviLinks(updatedTopLinks)
    }
    return (
        <div className="flex flex-col w-full md:w-64 bg-white md:h-screen border-r relative">
            {!isMobile ?
                <>
                    <div className="flex justify-between md:justify-around w-full px-4 items-center h-16">
                        <div className="flex items-center gap-4">
                            <img src={Logo} alt="logo" className="w-6" />
                            <h1 className="text-lg font-semibold">CodeAnt AI</h1>
                        </div>
                    </div>
                    <div className={`absolute md:static bottom-0 w-full transition-all h-full bg-black/10 md:bg-transparent overflow-hidden`}>
                        <div className="bg-white w-full h-full flex flex-col">
                            <div className="flex flex-col items-center py-4">
                                <span className="mt-2 text-sm border p-2 rounded-xl flex gap-2 items-center">
                                    <span>UtkarshDhairyaPanwar...</span>
                                    <ChevronDownIcon className="w-5" />
                                </span>
                            </div>
                            <SideBarContent handleClick={handleClick} bottomNaviLinks={bottomNaviLinks} topNaviLinks={topNaviLinks} />
                        </div>
                    </div> </>
                :
                <>
                    <div className="flex justify-between md:justify-around w-full px-4 items-center h-16">
                        <div className="flex items-center gap-4">
                            <img src={Logo} alt="logo" className="w-6" />
                            <h1 className="text-lg font-semibold">CodeAnt AI</h1>
                        </div>
                        <button onClick={() => setIsSideBarVisible((prev) => !prev)}>
                            <Bars4Icon className="w-6 h-6" />
                        </button>
                    </div>
                    <div
                        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 transform transition-transform duration-700 
                            ${isSideBarVisible ? "translate-y-0" : "-translate-y-full"}`}
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <div className="flex items-center gap-4">
                                <img src={Logo} alt="logo" className="w-6" />
                                <h1 className="text-lg font-medium">CodeAnt AI</h1>
                            </div>
                            <button onClick={() => setIsSideBarVisible(false)} className="text-gray-600 hover:text-gray-800">
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col items-center py-4">
                                <span className="mt-2 w-11/12  text-sm border p-2 rounded-md flex gap-2 justify-between">
                                    <span>UtkarshDhairyaPanwar</span>
                                    <ChevronDownIcon className="w-5" />
                                </span>
                            </div>
                            <SideBarContent handleClick={handleClick} bottomNaviLinks={bottomNaviLinks} topNaviLinks={topNaviLinks} />
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default SideBar;

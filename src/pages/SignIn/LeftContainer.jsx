import { ArrowLongUpIcon } from "@heroicons/react/16/solid";
import  Logo  from '../../static/svgLogos/logo.svg'
import  LogoFaded  from '../../static/images/logoFaded.png'
import  LogoGraph  from '../../static/images/GrapgAuth.png'


const CommonTextContainer = ({ label, text }) => {
    return <div className="flex flex-col items-center">
        <span className="font-bold">{label}</span>
        <span className="text-sm">{text}</span>
    </div>
}

const LeftContainer = () => {
    return (
        <div className="hidden md:flex h-full w-1/2 bg-white border-r relative flex-col justify-center items-center">
            <div className="w-full h-[100vh] relative">
                <img src={LogoFaded} alt="logo"
                    className="absolute left-0 bottom-0 w-[280px] h-[320px] aspect-square" />

                <div className="rounded-xl flex-col w-[100%] h-[100%] -mt-10">
                    <div className="w-[100%] m-auto h-[100%] flex justify-center items-center flex-col ">
                        <div className="max-w-[480px] shadow-primary rounded-2xl p-4 ">
                            <div className="flex gap-2 items-center border-b p-4">
                                <img src={Logo} alt={'logo'} className="w-6 h-6" />
                                <span className="font-bold">AI to Detect & Autofix Bad Code</span>
                            </div>
                            <div className="flex gap-6 justify-between items-center p-6 cursor-pointer">
                                <CommonTextContainer label={'30+'} text="Language Support" />
                                <CommonTextContainer label={'10K+'} text="Developers" />
                                <CommonTextContainer label={'100K+'} text="Hours Saved" />
                            </div>
                        </div>

                        <div
                            className="flex rounded-2xl shadow-primary flex-col gap-2 p-4 px-8 translate-x-[50%] -translate-y-[10px] bg-white rounded-xl cursor-pointer">
                            <div className="flex justify-between min-w-40">
                                <img src={LogoGraph} alt="graph-logo" />
                                <div className="flex flex-col">
                                    <div className="flex items-center text-slate-100">
                                        <ArrowLongUpIcon className="w-5" />
                                        14%
                                    </div>
                                    <div className="font-light text-xs">
                                        This week
                                    </div>
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="flex flex-col">
                                    <span className="font-semibold">Issues Fixed</span>
                                    <span className="font-bold text-2xl">500K+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftContainer;
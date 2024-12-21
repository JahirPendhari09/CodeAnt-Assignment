import { useState } from "react";
import { Link } from "react-router-dom";
import { KeyIcon } from "@heroicons/react/16/solid";
import  Logo  from '../../static/svgLogos/logo.svg'
import GithubLogo from '../../static/svgLogos/github.svg'
import BitbucketLogo from '../../static/svgLogos/bitbucket.svg'
import AzureLogo from '../../static/svgLogos/azure-devops.svg'
import GitlabLogo from '../../static/svgLogos/gitlab.svg'

const AuthHeader = () => (
  <div className="border-b flex flex-col p-5 w-full gap-4">
    <div className="flex items-center justify-center gap-4">
      <img src={Logo} alt="logo" />
      <span className="font-medium">CodeAnt AI</span>
    </div>
    <div className="flex justify-center text-2xl font-semibold mt-2">
      Welcome to CodeAnt AI
    </div>
  </div>
);

const AuthSwitcher = ({ isSaasChecked, setIsSaasChecked }) => (
  <div className="bg-gray-100/70 border rounded-xl font-bold">
    <button
      className={`p-3 rounded-md w-1/2 ${isSaasChecked ? "bg-slate-200 text-white" : ""}`}
      onClick={() => setIsSaasChecked(true)}
    >
      SAAS
    </button>
    <button
      className={`p-3 rounded-md w-1/2 ${isSaasChecked ? "" : "bg-slate-200 text-white"}`}
      onClick={() => setIsSaasChecked(false)}
    >
      Self Hosted
    </button>
  </div>
);

const SignInOptions = ({ isSaasChecked }) => {
  const saasOptions = [
    { src: GithubLogo, alt: "Github", label: "Sign in with Github" },
    { src: BitbucketLogo, alt: "Bitbucket", label: "Sign in with Bitbucket" },
    { src: AzureLogo, alt: "Azure DevOps", label: "Sign in with Azure DevOps" },
    { src: GitlabLogo, alt: "GitLab", label: "Sign in with GitLab" }
  ];

  const selfHostedOptions = [
    { src: GitlabLogo, alt: "GitLab", label: "Sign in with GitLab" },
    { icon: <KeyIcon className="w-5" />, label: "Sign in with SSO" },
    { src: BitbucketLogo, alt: "Bitbucket", label: "Sign in with Bitbucket" },
    { src: AzureLogo, alt: "Azure DevOps", label: "Sign in with Azure DevOps" },
  ];

  const options = isSaasChecked ? saasOptions : selfHostedOptions;

  return (
    <div className="flex items-center  flex-col justify-center w-full gap-2 m-auto max-w-[400px] ">
      {options.map((option, index) => {
        return <>
          {
            isSaasChecked ? (
              <Link
                to="/dashboard"
                key={index}
                className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center"
              >
                {option.src ? <img src={option.src} alt={option.alt} className="w-5" /> : option.icon}
                {option.label}
              </Link>
            ) : index < 2 ? (
                <Link
                  to="/dashboard"
                  key={index}
                  className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center"
                >
                  {option.src ? <img src={option.src} alt={option.alt} className="w-5" /> : option.icon}
                  {option.label}
                </Link>
            ) : <div className="w-32 h-10"></div>
          }
        </>
      })}
    </div>
  );
};

const RightContainer = () => {
  const [isSaasChecked, setIsSaasChecked] = useState(true);

  return (
    <div className="flex mt-[50px] w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4">
      <div className="bg-white flex flex-col rounded-xl w-full border">
        <AuthHeader />
        <div className="p-5">
          <AuthSwitcher isSaasChecked={isSaasChecked} setIsSaasChecked={setIsSaasChecked} />
        </div>
        <div className="p-5">
          <SignInOptions isSaasChecked={isSaasChecked} />
        </div>
      </div>
      <div>
        <span> By signing up you agree to the <b>Privacy Policy.</b> </span>
      </div>
    </div>
  );
};

export default RightContainer;

import Image from "next/image";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Link from "next/link";
import "react-phone-input-2/lib/style.css";
import LogInForm from "./LogInForm";
import { PRIVACY_POLICY, SIGN_UP, TERM_OF_USE } from "@/src/utils/constants";
const LogIn = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-signUpBg bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col relative">
        <div className="container pb-8 pt-16 md:pt-20 lg:pt-24 xl:pt-24 overflow-y-scroll">
          <div className="border border-black bg-white/15 w-full max-w-[560px] min-h-[460px] lg:min-h-[500px] mx-auto rounded-2.5 md:rounded-5 px-5 p-6 sm:py-8 md:p-8 backdrop-filter backdrop-blur-md">
            <div className="pb-5 md:pb-6 lg:pb-8">
              <Image
                className="w-[115px] h-[30px] mx-auto pointer-events-none"
                src="/assets/images/homepage/png/nav-logo.png"
                height={30}
                width={114}
                alt="nav-logo"
                sizes="100vw"
              />
            </div>
            <div className="pb-5 md:pb-6 lg:pb-8">
              <PrimaryHeading
                maxFontSize={24}
                minFontSize={20}
                reduceBelow={1200}
                className="text-center leading-130"
              >
                Welcome to FlipVault
              </PrimaryHeading>
              <Paragraph
                maxFontSize={12}
                minFontSize={14}
                className="opacity-80 leading-140 pt-1 md:pt-2 text-center"
              >
                Join our growing community for free!
              </Paragraph>
            </div>
            <LogInForm />
            <div className="text-center">
              <Paragraph
                maxFontSize={14}
                minFontSize={16}
                className="opacity-80 leading-160 md:pt-2 text-center inline-block mx-auto"
              >
                If You Have an Account?
                <Link
                  href={SIGN_UP}
                  className="text-blue hover:text-white common-transition"
                >
                  &nbsp;Sign up
                </Link>
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-16 md:pt-6 md:pb-20 lg:py-8 px-5">
          <Paragraph center className="text-white/65 !text-xs">
            By creating an account, you automatically agree to our
            <Link
              href={TERM_OF_USE}
              className="text-blue hover:text-white common-transition"
            >
              &nbsp;terms of use&nbsp;
            </Link>
            and
            <Link
              href={PRIVACY_POLICY}
              className="text-blue hover:text-white common-transition"
            >
              &nbsp;privacy policy
            </Link>
            .
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default LogIn;

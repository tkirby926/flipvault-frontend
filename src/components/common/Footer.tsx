import Image from "next/image";
import Link from "next/link";
import Paragraph from "../custom-ui/Paragraph";
import Icons from "../common/Icons";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../utils/helper";
import { HOME, MAIL } from "@/src/utils/constants";

interface SocialLink {
  url: string;
  icon: string;
}

interface FooterLink {
  title: string;
  links: any;
}

const Footer = () => {
  return (
    <div className="sm:pt-20 pt-14 bg-steel-gray sm:pb-7 pb-4 relative overflow-hidden">
      <div className="bg-off-green w-[200px] h-[200px] rounded-full hidden lg:block absolute right-[-10%] bottom-[-25%] blur-[60px] sm:bg-opacity-20 z-0 pointer-events-none bg-opacity-10"></div>
      <div className="absolute h-[300px] w-[500px] bg-blue opacity-20 bottom-0 translate-y-[70%] hidden lg:block left-[10%] blur-[70px] pointer-events-none z-0"></div>
      <div className="container pb-0.5">
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-3/12 sm:w-4/12">
            <Link className="cursor-pointer inline-block" href={HOME}>
              <Image
                height={30}
                width={114}
                src="/assets/images/homepage/png/nav-logo.png"
                alt="logo"
                className="pointer-events-none"
              />
            </Link>
            <Paragraph
              maxFontSize={14}
              minFontSize={16}
              className="!text-off-white sm:max-w-[300px] leading-156 pt-5">
              The world’s safest place for web3 users to trade anything,
              anywhere, anytime
            </Paragraph>
          </div>
          <div className="lg:w-3/12 sm:w-6/12 md:hidden pt-5 sm:pt-0">
            <h3 className="text-white text-lg mb-2">Follow Us On</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((data: SocialLink, index: number) => (
                <Link
                  key={index}
                  className="size-8 group flex justify-center hover:bg-white common-transition items-center border border-martinique hover:border-white rounded-full"
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icons icon={data.icon} />
                </Link>
              ))}
            </div>
            <h3 className="text-white text-lg md:pt-8 sm:pt-5 pt-4 pb-1 sm:pb-3 mg:pb-4">
              Contact Us
            </h3>
            <Link href={MAIL} className="flex items-center gap-2">
              <span className="mb-1">
                <Image
                  height={12}
                  width={16}
                  src="/assets/images/homepage/svg/mail-box.svg"
                  alt="mail"
                  className="pointer-events-none"
                />
              </span>
              <span className="text-transparent bg-clip-text bg-blueGradient">
                info@flipvault.io
              </span>
            </Link>
          </div>
          <div className="xl:w-5/12 w-full flex-wrap pt-5 md:pt-0 lg:pt-0 md:w-7/12 lg:w-6/12 flex lg:justify-between sm:justify-end gap-x-5 sm:gap-x-10 lg:pr-8 xl:pr-10 2xl:pr-16 custom-2xl:pr-20 lg:pl-24">
            {FOOTER_LINKS.map((data: FooterLink, index: number) => (
              <div key={index}>
                <h3
                  className={`text-white text-lg sm:mb-4 xl:mb-7 pb-1 pe-3 ${
                    index === 2 && "max-[430px]:pt-5"
                  }`}>
                  {data.title}
                </h3>
                <ul className="gap-y-2 flex flex-col  xl:gap-y-4 md:gap-y-3">
                  {data.links.map((link: any, linkIndex: number) => (
                    <li key={linkIndex} className="pe-3">
                      <Link
                        href={{
                          pathname: `/${link.url}`,
                          query: `${link.url !== "/" ? `on=${link.url}` : ""}`,
                        }}
                        className="text-dim-gray hover:text-white common-transition">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-end lg:w-2/12 w-6/12">
          <div className="w-full hidden md:block">
            <h3 className="text-white text-lg mb-5 xl:mb-9">Follow Us On</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((data: SocialLink, index: number) => (
                <Link
                  key={index}
                  className="h-8 group flex justify-center hover:bg-white common-transition items-center w-8 border border-martinique hover:border-white rounded-full"
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icons icon={data.icon} />
                </Link>
              ))}
            </div>
            <h3 className="text-white text-lg xl:pt-8 pt-5 pb-4">Contact Us</h3>
            <Link href={MAIL} className="flex items-center gap-2">
              <span className="mb-1">
                <Image
                  height={12}
                  width={16}
                  src="/assets/images/homepage/svg/mail-box.svg"
                  alt="mail"
                  className="pointer-events-none"
                />
              </span>
              <span className="text-transparent bg-clip-text bg-blueGradient">
                info@flipvault.io
              </span>
            </Link>
          </div>
          </div>
        </div>
        <p className="text-off-white text-center pt-8 lg:pt-14 lg:mt-1">
          © {new Date().getFullYear()} FlipVault
        </p>
      </div>
    </div>
  );
};

export default Footer;

import Link from "next/link";

type CTA_PROPS = {
  children: React.ReactNode;
  transparent?: boolean;
  className?: string;
  disableDefaultSpacing?: boolean;
  url?: string;
  target?: "_blank" | "_self";
  enableScroll?: boolean;
  label?: boolean;
  labelId?: string;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CTA_CLASSES = {
  transparent:
    "border border-white border-solid hover:border-transparent hover:shadow-blue before:blue-gradient-bg hover-before_translate_y_0 ",
  default:
    "border-0 border-transparent border-solid hover:text-blue after:blue-gradient-bg hover-after_translate_y_100 before:bg-white hover-before_translate_y_0 hover:text-blue-500",
};

const Cta = ({
  children,
  transparent,
  className = "",
  disableDefaultSpacing,
  target,
  enableScroll,
  url,
  onClick,
  label,
  labelId,
  type,
}: CTA_PROPS) => {
  return (
    <>
      {label}
      {url ? (
        <Link
          href={`${url}`}
          scroll={enableScroll}
          target={`${target}`}
          className={`${
            transparent ? CTA_CLASSES.transparent : CTA_CLASSES.default
          } ${className} ${
            !disableDefaultSpacing && "py-[14.5px] px-[52.5px]"
          } common-transition rounded-2.5 relative after:absolute inline-block after:h-full after:w-full after:top-0 after:left-0 after:-z-10 z-10 after:common-transition before:absolute before:h-full before:w-full before:top-0 before:translate-y-full before:left-0 before:-z-10 before:common-transition overflow-hidden text-white`}>
          {children}
        </Link>
      ) : label ? (
        <label
          htmlFor={`${labelId}`}
          className={`${
            transparent ? CTA_CLASSES.transparent : CTA_CLASSES.default
          } ${className} ${
            !disableDefaultSpacing && "py-[14.5px] px-[52.5px]"
          } common-transition rounded-2.5 relative after:absolute after:h-full after:w-full after:top-0 after:left-0 after:-z-10 z-10 after:common-transition before:absolute before:h-full before:w-full before:top-0 before:translate-y-full before:left-0 before:-z-10 before:common-transition overflow-hidden text-white inline-block text-center cursor-pointer`}>
          {children}
        </label>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`${
            transparent ? CTA_CLASSES.transparent : CTA_CLASSES.default
          } ${className} ${
            !disableDefaultSpacing && "py-[14.5px] px-[52.5px]"
          } common-transition rounded-2.5 relative after:absolute after:h-full after:w-full after:top-0 after:left-0 after:-z-10 z-10 after:common-transition before:absolute before:h-full before:w-full before:top-0 before:translate-y-full before:left-0 before:-z-10 before:common-transition overflow-hidden text-white`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Cta;

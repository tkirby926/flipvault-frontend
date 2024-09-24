type PRIMARY_HEADING_PROPS = React.InputHTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  reduceBelow?: number | undefined;
  maxFontSize?: number | undefined;
  minFontSize?: number | undefined;
  className?: string;
  center?: boolean;
  right?: boolean;
};
const PrimaryHeading = ({
  children,
  reduceBelow,
  maxFontSize,
  minFontSize,
  className = "",
  center,
  right,
  ...props
}: PRIMARY_HEADING_PROPS) => {
  const minText: number = minFontSize ?? 32;
  const maxText: number = maxFontSize ?? 64;
  const reduceBefore: number = reduceBelow ?? 768;
  const sizeReducer: number = (100 / reduceBefore) * maxText;
  return (
    <h2
      {...props}
      style={{
        fontSize: `clamp(${minText}px, ${sizeReducer}vw, ${maxText}px)`,
      }}
      className={`${className} ${
        center
          ? "mx-auto text-center"
          : right
          ? "ml-auto mr-0 text-right"
          : "ml-0 mr-auto text-left"
      } font-extrabold leading-140 text-white`}>
      {children}
    </h2>
  );
};

export default PrimaryHeading;

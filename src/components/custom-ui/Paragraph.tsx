type PARAGRAPH_PROPS = React.InputHTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
  reduceBelow?: number | undefined;
  maxFontSize?: number | undefined;
  minFontSize?: number | undefined;
  className?: string;
  center?: boolean;
  right?: boolean;
};
const Paragraph = ({
  children,
  reduceBelow,
  maxFontSize,
  minFontSize,
  className = "",
  center,
  right,
  ...props
}: PARAGRAPH_PROPS) => {
  const minText: number = minFontSize ?? 14;
  const maxText: number = maxFontSize ?? 18;
  const reduceBefore: number = reduceBelow ?? 1024;
  const sizeReducer: number = (100 / reduceBefore) * maxText;
  return (
    <p
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
      } text-white font-normal leading-150`}>
      {children}
    </p>
  );
};

export default Paragraph;
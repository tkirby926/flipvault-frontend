import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Icons from "./Icons";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const param = useSearchParams();
  const pageParam: any = param.get("page") || 1;
  const getPages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (pageParam <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    } else if (pageParam >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      return [
        1,
        "...",
        Number(pageParam) - 1,
        Number(pageParam),
        Number(pageParam) + 1,
        "...",
        totalPages,
      ];
    }
  };

  const tabArrowRightIcon = <Icons icon="tabArrowRight" />;

  return (
    <div className="flex items-center justify-center gap-1.5 max-[480px]:mb-12 relative common-transition">
      <Link
        href={`?page=${pageParam - 1}`}
        target="_self"
        scroll={false}
        className={`border-[0.5px] flex cursor-pointer group hover:border-white justify-center items-center hover:bg-white min-[480px]:static absolute -bottom-3 max-[480px]:translate-y-full left-2.5 duration-300 group rounded-2.5 border-light-sky sm:w-[51px] h-10 sm:h-[51px] w-10 rotate-180 ${
          parseInt(pageParam) === 1 ? "opacity-50" : ""
        }`}
        style={{
          pointerEvents: pageParam > 1 ? "auto" : "none",
        }}>
        {tabArrowRightIcon}
      </Link>
      {getPages().map((page, index) => (
        <Link
          key={index}
          href={`?page=${page}`}
          scroll={false}
          className={`pt-0,5 border cursor-pointer flex justify-center items-center duration-300 group rounded-2.5 border-light-sky sm:w-[51px] h-10 sm:h-[51px] w-10 ${
            page === "..." && "pointer-events-none"
          } ${
            parseInt(pageParam) == page
              ? "bg-white !text-dark-black"
              : "bg-dark-black text-white"
          }`}>
          <p className={`pt-0,5 text-base leading-100 font-extrabold px-6`}>
            {page}
          </p>
        </Link>
      ))}
      <Link
        href={`?page=${parseInt(pageParam) + 1}`}
        scroll={false}
        target="_self"
        className={`pt-0,5 border hover:border-white cursor-pointer flex justify-center items-center hover:bg-white min-[480px]:static absolute -bottom-3 max-[480px]:translate-y-full right-2.5 duration-300 group rounded-2.5 border-light-sky sm:w-[51px] h-10 sm:h-[51px] w-10 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={{
          pointerEvents: pageParam < totalPages ? "auto" : "none",
        }}>
        {tabArrowRightIcon}
      </Link>
    </div>
  );
};

export default Pagination;

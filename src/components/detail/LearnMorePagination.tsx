import React, { Suspense } from "react";
import Pagination from "../common/Pagination";
import Cta from "../custom-ui/Cta";

interface LearnMorePaginationProps {
  data: any[];
  totalPages: number;
  currentPage: number;
  PAGE_CHANGE_HANDLER: (page: number) => void;
  LEARN_MORE_HANDLER: () => void;
  loading: boolean;
  showCards: number;
}

const LearnMorePagination: React.FC<LearnMorePaginationProps> = ({
  data,
  totalPages,
  currentPage,
  PAGE_CHANGE_HANDLER,
  LEARN_MORE_HANDLER,
  loading,
  showCards,
}) => {
  return (
    <>
      {data.length > 12 && (
        <div className="flex sm:flex-row flex-col justify-center sm:gap-0 pt-6 relative z- sm:justify-between custom-2xl:px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={PAGE_CHANGE_HANDLER}
            />
          </Suspense>
          <Cta
            className="font-extrabold leading-140 text-base mx-auto flex items-center justify-center sm:mx-0 !px-5 !h-[44px] sm:!h-[51px] w-[133px] pb-1 mt-4 sm:mt-0 !pt-1 "
            transparent
            onClick={LEARN_MORE_HANDLER}>
            {loading === true ? "Loading..." : "Load More"}
          </Cta>
        </div>
      )}
    </>
  );
};

export default LearnMorePagination;

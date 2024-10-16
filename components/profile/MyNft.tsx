"use client";
import { Suspense, useEffect, useState } from "react";
import PrimaryHeading from "@/components/custom-ui/PrimaryHeading";
import { NFT_ITEMS_DATA as initialNFTItemsData } from "@/utils/helper";
import Image from "next/image";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";
import Pagination from "../common/Pagination";
import LikeButton from "../common/LikeButton";
import { useSearchParams } from "next/navigation";

const ITEMS_PER_PAGE = 12; // Set the number of items per page

const MyNft = () => {
  const [nftItems, setNftItems] = useState(initialNFTItemsData);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showCards, setShowCards] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const totalPages = Math.ceil(nftItems.length / ITEMS_PER_PAGE);
  const pencilIcon = <Icons icon="pencilIcon" />;
  const param = useSearchParams();
  const pageParam: any = param.get("page") || 1;

  // Update current page from URL parameter
  useEffect(() => {
    setCurrentPage(Number(pageParam));
  }, [pageParam]);

  // Slice the data based on current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = nftItems.slice(startIndex, endIndex + showCards);
  const PAGE_CHANGE_HANDLER = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const SEARCH_DATA_HANDLER = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const EDIT_HANDLER = (index: number, currentCompany: string) => {
    setEditIndex(index);
    setInputValue(currentCompany);
  };
  const INPUT_CHANGE_HANDLER = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setHoverIndex(index);
    setInputValue(e.target.value);
  };
  const KEY_PRESS_HANDLER = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (inputValue !== "" && e.key === "Enter") {
      const updatedData = [...nftItems];
      updatedData[index].company = inputValue;
      setNftItems(updatedData);
      setHoverIndex(null);
      setEditIndex(null);
    }
  };

  // FILTER DATA FUNCTION
  const NFT_FILTERED_DATA = nftItems.filter((data: any) =>
    data.company?.toLowerCase().includes(search.toLowerCase())
  );
  const LEARN_MORE_HANDLER = () => {
    setLoading(true);
    setTimeout(() => {
      setShowCards(showCards + 12);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="relative">
      <div className="container mx-auto mx-auto custom-2xl:max-w-[1600px] relative pb-10">
        <div className="pt-6 relative -z-0">
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between items-center mb-6">
            <PrimaryHeading
              maxFontSize={22}
              minFontSize={16}
              reduceBelow={1200}>
              My NFTs
            </PrimaryHeading>
            <div className="flex">
              <div className="flex px-3 items-center border border-charcoal-gray relative z-10 h-[44px] rounded-2 bg-transparent w-[220px]">
                <Icons className="me-2.5" icon="search" />
                <input
                  placeholder="Search..."
                  className="text-white ps-[10px] w-full placeholder:opacity-40 rounded-2 bg-transparent outline-none border-0"
                  type="search"
                  value={search}
                  onChange={SEARCH_DATA_HANDLER}
                />
              </div>
              <div className="flex px-3 ms-3 items-center border relative after:absolute after:top-0 after:left-0 after:right-0 after:h-full after:common-transition after:z-0 after:bg-blueGradient after:translate-y-[110%] hover:after:translate-y-0 overflow-hidden cursor-pointer border-charcoal-gray z-10 h-[44px] rounded-2 bg-transparent w-[100px]">
                <div className="relative z-10 flex items-center">
                  <Icons icon="filter" />
                  <p className="ms-2.5 font-normal text-white text-base">
                    Filters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nft" className="flex flex-wrap gap-y-4 justify-center">
          {currentData.length > 0 ? (
            <>
              {currentData.map((data: any, index) => (
                <div
                  key={index}
                  className="flex xl:h-[328px] xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full sm:max-w-full max-w-[317px] items-center rounded-5 sm:px-2 currency_card group common-transition sm:justify-center relative"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}>
                  <div className="rounded-5 border border-black w-full">
                    <div className="rounded-5 relative h-[328px]">
                      <div className="h-[220px] w-full relative">
                        <LikeButton
                          className="bottom-3 end-4"
                          likes={data.like}
                        />
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                          {(index === 1 || index === 9) && (
                            <Icons icon="fireEllipse" />
                          )}
                          <p className="text-dark-black max-w-[76px] h-[26px] rounded-full flex items-center justify-centers w-full text-xs font-normal px-3.5 py-1.5 leading-100 bg-white">
                            {data.category}
                          </p>
                        </div>
                        <Image
                          alt="mike-smith"
                          src={data.image}
                          height={220}
                          width={314}
                          className="!h-[250px] rounded-t-5 object-cover duration-300 max-h-[250px] w-full"
                        />
                      </div>
                      <div
                        className={`bg-baltic-sea absolute bottom-0 border-b-black border-b rounded-b-5 left-0 max-h-[155px] right-0 w-full z-20 grey-car duration-300 p-4 ${hoverIndex === index ? "-mb-12" : "-mb-0"
                          }`}>
                        <p className="mb-2 flex items-center capitalize gap-2 font-extrabold text-white text-xl leading-120">
                          <span
                            className={`flex items-center w-full gap-2 ${data.company.toLowerCase() === "xrp"
                                ? "uppercase"
                                : "capitalize"
                              }`}>
                            {editIndex === index ? (
                              <input
                                title="text"
                                type="text"
                                value={inputValue}
                                onChange={(e) => INPUT_CHANGE_HANDLER(e, index)}
                                onKeyDown={(e) => KEY_PRESS_HANDLER(e, index)}
                                onBlur={() => setEditIndex(null)}
                                autoFocus
                                className="bg-transparent rounded-2 text-white focus-visible:outline-0 focus-visible:border-white border-transparent border w-full p-1"
                              />
                            ) : (
                              <>
                                <span className="truncate max-w-[80%]">
                                  {/* {data.company} */}
                                  NFT {index + 1}
                                </span>
                                <span
                                  className="cursor-pointer"
                                  onClick={() =>
                                    EDIT_HANDLER(index, data.company)
                                  }>
                                  {pencilIcon}
                                </span>
                              </>
                            )}
                          </span>
                        </p>
                        <div className="flex items-center gap-2">
                          <Image
                            alt="john doe"
                            src={data.profileImage}
                            height={16}
                            width={16}
                          />
                          <p className="text-french-gray text-xs font-normal leading-140">
                            Owned by {data.owner}
                          </p>
                        </div>
                        <div
                          className={`text-center whitespace-nowrap common-transition ${hoverIndex === index
                              ? "h-[44px] z-40 opacity-100"
                              : "!-z-0 h-0 relative opacity-0"
                            }`}>
                          <Cta
                            className="font-extrabold w-full mt-5 sm:text-base text-sm min-h-[44px] whitespace-nowrap flex items-center justify-center px-2 py-2.5 sm:pb-2 bg-blueGradient border-0"
                            disableDefaultSpacing>
                            Withdraw
                          </Cta>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="h-[50vh] bg-baltic-sea w-full flex items-center justify-center rounded-10">
              <p className="text-xl leading-100 text-white font-extrabold">
                NFTs not found
              </p>
            </div>
          )}
        </div>
        <div className="flex sm:flex-row flex-col justify-center sm:gap-0 pt-6 relative z- sm:justify-between custom-2xl:px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={PAGE_CHANGE_HANDLER}
            />
          </Suspense>
          <Cta
            className={`font-extrabold leading-140 text-base mx-auto flex items-center justify-center sm:mx-0 !px-5 !h-[44px] sm:!h-[51px] w-[133px] pb-1 mt-4 sm:mt-0 !pt-1 ${NFT_FILTERED_DATA.length <= showCards && "hidden"
              }`}
            transparent
            onClick={LEARN_MORE_HANDLER}>
            {loading === true ? "Loading..." : "Load More"}
          </Cta>
        </div>
      </div>
      <div className="absolute h-[300px] w-[800px] bg-blue opacity-20 bottom-[-1%] hidden lg:flex left-[-5%] blur-[70px] pointer-events-none z-0"></div>
    </div>
  );
};

export default MyNft;

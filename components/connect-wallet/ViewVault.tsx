"use client";
import { useState, useEffect } from "react";
import VaultGiveGallery from "./GiveGallery";
import VaultReceiveGallery from "./ReceiveGallery";
import UserProfileDoe from "./UserProfileDoe";
import UserProfileKate from "./UserProfileKate";
import { VAULT_RECEIVE_DATA_LIST } from "@/utils/helper";
import { VAULT_GIVE_DATA_LIST } from "@/utils/helper";
const ViewVault = () => {
  const [showDataGive, setShowDataGive] = useState(false);
  const [showDataReceive, setShowDataReceive] = useState(false);
  const [tradeDetails, setTradeDetails] = useState<any>([])
  const [hasRendered, setHasRendered] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<any[]>(
    VAULT_GIVE_DATA_LIST.slice(0, 3)
  );
  const [receivedItems, setReceivedItems] = useState<any[]>(
    VAULT_RECEIVE_DATA_LIST.slice(0, 5)
  );
  useEffect(() => {
    if (!hasRendered) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' as RequestCredentials,
      }
      fetch('http://localhost:5000/api/v1/trans/find_trans', requestOptions)
      .then(response => response.json())
      .then((data) => {
        if (data.status != null) {
          // TRIGGER EVENT LISTENER HERE
        }
        else {
          // MAY HAVE TO DO THIS LOOKUP IN CHILD COMPONENT
        }
      });
      setHasRendered(true)
    }
})

  const handleItemSelection = (item: any) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };
  const handleItemReceived = (item: any) => {
    setReceivedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const handleItemRemoval = (item: any) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((i) => i !== item)
    );
  };

  const handleReceivedItemRemoval = (item: any) => {
    setReceivedItems((prevSelectedItems) =>
      prevSelectedItems.filter((i) => i !== item)
    );
  };

  const iGiveHandleChange = () => {
    setShowDataGive(!showDataGive);
  };
  const iReceiveHandleChange = () => {
    setShowDataReceive(!showDataReceive);
  };
  return (
    <div className="mx-auto custom-2xl:max-w-[1600px] xl:min-h-[calc(100vh-133px)] flex justify-center items-center">
      <div className="min-[1300px]:flex justify-center max-lg:flex-col gap-[10px] container min-[1366px]:px-0 py-6">
        <UserProfileDoe
          pushSelectedArray={handleItemSelection}
          selectedItems={selectedItems}
        />
        <div
          className={`flex custom-xxl:flex-col md:flex-row flex-col gap-[10px] mx-auto w-full lg:max-w-[900px] min-[1300px]:max-w-[493px] my-3 min-[1300px]:my-0 custom-2xl:max-w-[660px] custom-2xl:mx-auto ${
            showDataGive && "lg:!max-w-[903px]"
          } ${showDataReceive && "lg:!max-w-[903px]"}`}>
          <VaultGiveGallery
            FILTERED_ARRAY={selectedItems}
            VaultGiveGalleryClass={`${showDataReceive ? "hidden" : "block"}`}
            handleChange={() => iGiveHandleChange()}
            showData={showDataGive}
            removeItem={handleItemRemoval}
          />
          <VaultReceiveGallery
            FILTERED_ARRAY={receivedItems}
            disabled
            VaultReceiveGalleryClass={`${showDataGive ? "hidden" : "block"}`}
            handleChange={() => iReceiveHandleChange()}
            showData={showDataReceive}
            removeItem={handleReceivedItemRemoval}
          />
        </div>
        <UserProfileKate
          pushSelectedArray={handleItemReceived}
          selectedItems={receivedItems}
          profileCardClassName={`${showDataGive && "hidden"} ${
            showDataReceive && "hidden"
          }`}
        />
      </div>
      <span className="absolute bg-blue flex h-[300px] rounded-full blur-[180px] opacity-70 w-[300px] left-0 -translate-x-1/2 -top-1/2 -z-10 max-md:hidden"></span>
      <span className="absolute bg-blue flex h-[300px] rounded-full blur-[180px] opacity-70 w-[300px] right-0 -top-1/2 -z-10 max-md:hidden"></span>
    </div>
  );
};

export default ViewVault;

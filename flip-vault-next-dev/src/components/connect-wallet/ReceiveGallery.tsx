import GiveReceiveLayout from "./GiveReceiveLayout";
import { VAULT_RECEIVE_DATA_LIST } from "@/src/utils/helper";

const VaultReceiveGallery = ({
  showData,
  handleChange,
  VaultReceiveGalleryClass,
  disabled,
  FILTERED_ARRAY,
  removeItem,
}: any) => {
  return (
    <div
      className={`min-[1366px]:min-h-[324px] h-full custom-xxl:w-full w-full ${VaultReceiveGalleryClass}`}>
      <GiveReceiveLayout
        disabled={disabled}
        handleChange={handleChange}
        showData={showData}
        removeItem={removeItem}
        title="I Receive"
        DATA_LIST={FILTERED_ARRAY}
      />
    </div>
  );
};

export default VaultReceiveGallery;

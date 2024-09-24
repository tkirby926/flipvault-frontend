import VaultGiveReceiveLayout from "./GiveReceiveLayout";

interface VaultGiveGalleryProps {
  showData: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  VaultGiveGalleryClass?: string;
  FILTERED_ARRAY: Array<any>;
  removeItem: any;
}

const GiveGallery: React.FC<VaultGiveGalleryProps> = ({
  showData,
  handleChange,
  FILTERED_ARRAY,
  removeItem,
  VaultGiveGalleryClass = "",
}) => {
  return (
    <div className={`relative h-full w-full ${VaultGiveGalleryClass}`}>
      <VaultGiveReceiveLayout
        handleChange={handleChange}
        showData={showData}
        removeItem={removeItem}
        title="I give"
        DATA_LIST={FILTERED_ARRAY}
      />
      <span className="absolute hidden min-[1366px]:flex bg-blue h-[300px] rounded-full blur-[150px] opacity-70 w-[300px] left-1/2 -translate-x-1/2 -top-1/2 -z-10 max-md:hidden"></span>
    </div>
  );
};

export default GiveGallery;

import CryptoCurrencies from "@/src/components/profile/CryptoCurrencies";
import MyNft from "@/src/components/profile/MyNft";
import ConnectWalletCards from "@/src/components/profile/ConnectWalletCards";
import ProfileDetails from "@/src/components/profile/ProfileDetails";
import ProposedTrades from "@/src/components/profile/ProposedTrades";
import AddFile from "@/src/components/profile/AddFile";
import MyFriend from "@/src/components/profile/MyFriend";

const page = () => {
  return (
    <>
      <ProfileDetails />
      <ConnectWalletCards />
      <ProposedTrades />
      <CryptoCurrencies />
      <MyNft />
      <AddFile />
      <MyFriend />
    </>
  );
};

export default page;

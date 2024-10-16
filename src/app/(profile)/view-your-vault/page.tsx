"use client";
import CryptoCurrencies from "@/src/components/profile/CryptoCurrencies";
import MyNft from "@/src/components/profile/MyNft";
import ConnectWalletCards from "@/src/components/profile/ConnectWalletCards";
import ProfileDetails from "@/src/components/profile/ProfileDetails";
import ProposedTrades from "@/src/components/profile/ProposedTrades";
import AddFile from "@/src/components/profile/AddFile";
import MyFriend from "@/src/components/profile/MyFriend";
import { useEffect, useState } from "react";


const page = () => {
  const [prof, setProf] = useState<any>([]);
  const [friends, setFriends] = useState<any>([]);
  const [files, setFiles] = useState<any>([]);
  const [reqs, setReqs] = useState<any>([]);
  const [hasrendered, setHasRendered] = useState<boolean>(false);
  useEffect(() => {
    if (!hasrendered) {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' as RequestCredentials,
      }
      fetch('http://localhost:5000/api/v1/misc/get_prof', requestOptions)
        .then(response => response.json())
        .then((data) => {
          if (data.status != null) {
            setProf([{
              name: "Not signed in",
              username: "",
              img: "/assets/images/profile/png/profile.png",
              detail: [{ trades: "0", live_transactions: "0", assets: "0", friends: "0"}],
            }])
            setFriends(new Array());
          }
            setFriends(data.friends);
            setProf([{
              name: data.prof[0],
              username: data.prof[1],
              img: "/assets/images/profile/png/profile.png",
              detail: [{ trades: data.prof[5].toString(), live_transactions: data.prof[4].toString(), assets: "290", friends: data.prof[2].toString()}],
            }])
            setFiles(data.files);
            setReqs(data.trade_reqs)
        });
        setHasRendered(true)
    }
  });
  
  return (
    <>
      <ProfileDetails profile={prof}/>
      <ConnectWalletCards />
      <ProposedTrades reqs={reqs}/>
      <CryptoCurrencies />
      <MyNft />
      <AddFile />
      <MyFriend friends={friends}/>
    </>
  );
};

export default page;

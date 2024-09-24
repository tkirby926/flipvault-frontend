import Icons from "../common/Icons";
import Paragraph from "../custom-ui/Paragraph";

interface PopUpProps {
  inviteWaitingPopup: boolean;
  children: React.ReactNode;
  setInviteWaitingPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const WaitingPopup: React.FC<PopUpProps> = ({
  children,
  inviteWaitingPopup,
  setInviteWaitingPopup,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 min-h-screen common-transition ${
        inviteWaitingPopup
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      <div className="relative p-5 h-full w-full flex items-center justify-center">
        <div className="relative z-10 border border-black border-opacity-5 bg-white bg-opacity-15 rounded-5 md:p-8 p-4 max-w-[620px] w-full backdrop-blur-xl">
          <Icons icon="waitingIcon" className="mx-auto" />
          <Paragraph className="!text-sm opacity-80 pt-3" center>
            {children}
          </Paragraph>
          <div
            onClick={() => {
              setInviteWaitingPopup(false);
            }}
            className="size-6 cursor-pointer common-transition hover:scale-110 absolute end-3 top-3 flex items-center justify-center">
            <Icons className="w-full" icon="cross" />
          </div>
        </div>
        <div
          onClick={() => {
            setInviteWaitingPopup(false);
          }}
          className="absolute inset-0 bg-dark-black bg-opacity-65 z-0"></div>
      </div>
    </div>
  );
};

export default WaitingPopup;

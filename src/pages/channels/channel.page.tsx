import * as React from "react";
import SideNav from "../../components/channels/SideNav";
import { useParams } from "react-router";
import { useUser } from "../../hooks/useUser";
import Me from "./me.page";
import Other from "./other.page";

interface IChannelProps {}

const Channel: React.FunctionComponent<IChannelProps> = () => {
  const params = useParams();
  const user = useUser((state) => state.user);
  if (!user) return null;
  return (
    <main className="w-screen max-w-screen h-screen max-h-screen overflow-hidden flex">
      {/* sidenav */}
      <SideNav />
      {/* rest */}
      {user._id === params.id ? <Me /> : <Other />}
    </main>
  );
};

export default Channel;

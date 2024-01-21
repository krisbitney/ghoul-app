import type { NextPage } from "next";
import { DebugContracts } from "~~/app/debug/_components/DebugContracts";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Ghoul Contracts",
  description: "Stake and borrow from any EVM chain",
});

const Home: NextPage = () => {
  return (
    <>
      <DebugContracts />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Ghoul Finance</h1>
        <p className="text-neutral">You can interact with Ghoulish contracts here.</p>
      </div>
    </>
  );
};

export default Home;

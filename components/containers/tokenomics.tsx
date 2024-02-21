import Image from "next/image";
import ChartImage from "@/public/imgs/tokenomics.png";
import EthLogo from "@/public/imgs/ethereum-logo.png";
import GradLeft from "@/public/imgs/tokenomics-grad-left.png";

export default function Tokenomics() {
  return (
    <section className="relative py-24">
      <Image
        src={GradLeft}
        alt="img"
        className="absolute bottom-0 lg:w-[50%] lg:-left-40"
      />
      <div className="container flex flex-col items-center space-y-24 ">
        <h2 className="bg-highlight text-transparent bg-clip-text text-center">
          Tokenomics
        </h2>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-center">
          <div
            className="col-span-5 relative border-2 border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[50px]] p-4 lg:p-12 flex flex-col gap-12 rounded-[15px]"
            style={{ boxShadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <Image
              src={EthLogo}
              alt="img"
              width={158}
              height={257}
              className="absolute -z-10 opacity-[0.3] top-12 right-12"
            />
            <div className="grid grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-muted font-semibold">
                  Token type
                </p>
                <h4 className="text-lg lg:text-2xl font-bold">ERC20</h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-muted font-semibold">
                  Network
                </p>
                <h4 className="text-lg lg:text-2xl font-bold">Ethereum</h4>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-muted font-semibold">
                  Fundraising goal
                </p>
                <h4 className="text-lg lg:text-2xl font-bold">TBD</h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-muted font-semibold">
                  Total supply
                </p>
                <h4 className="text-lg lg:text-2xl font-bold">900,000,000</h4>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl lg:text-2xl font-semibold text-[#929FA5]">
                Role of the Token and Utility:
              </h4>
              <p>
                TROV serves multiple purposes within the Trove ecosystem.
                Holders can participate in governance decisions regarding the
                development and future of the Trove platform.
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-muted font-semibold">
                  Seed Price
                </p>
                <h4 className="text-lg lg:text-2xl font-bold">
                  $0.010 <span className="text-base text-[#8A9FAA]">USDT</span>
                </h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-muted font-semibold">
                  Private round 1
                </p>
                <h4 className="text-lg lg:text-2xl font-bold">
                  $0.030 <span className="text-base text-[#8A9FAA]">USDT</span>
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-muted font-semibold">
                  Private round 2
                </p>
                <h4 className="text-lg lg:text-2xl font-bold">
                  $0.050 <span className="text-base text-[#8A9FAA]">USDT</span>
                </h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-muted font-semibold">
                  Listing Price
                </p>
                <h4 className="text-lg lg:text-2xl font-bold">
                  $0.070 <span className="text-base text-[#8A9FAA]">USDT</span>
                </h4>
              </div>
            </div>
          </div>
          <Image
            src={ChartImage}
            alt="img"
            width={781}
            height={663}
            className="col-span-7"
          />
        </div>
      </div>
    </section>
  );
}

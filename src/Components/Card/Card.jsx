import imag1 from "../../assets/imag1.jpg";
import ethIcon from "../../assets/icon-ethereum.svg";
import clockIcon from "../../assets/icon-clock.svg";
import avatar from "../../assets/image-avatar.png";

export default function Card() {
  return (
    <div className="w-full max-w-[327px] rounded-2xl bg-[#15263F] p-6 sm:max-w-[350px]">
      <img
        src={imag1}
        alt="Equilibrium NFT artwork"
        className="aspect-square w-full rounded-lg object-cover"
      />

      <h2 className="mt-6 text-[22px] leading-none font-semibold text-white">
        Equilibrium #3429
      </h2>
      <p className="mt-5 text-[18px] leading-[26px] font-light text-[#8BACD9]">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="mt-6 flex items-center justify-between text-[16px]">
        <div className="flex items-center gap-2">
          <img src={ethIcon} alt="Ethereum" />
          <span className="font-semibold text-[#00FFF8]">0.041 ETH</span>
        </div>
        <div className="flex items-center gap-2 font-light text-[#8BACD9]">
          <img src={clockIcon} alt="Clock" />
          <span>3 days left</span>
        </div>
      </div>

      <hr className="mt-6 border-[#1B2D47]" />

      <div className="mt-5 flex items-center gap-4">
        <img
          src={avatar}
          alt="Jules Wyvern avatar"
          className="h-8 w-8 rounded-full border border-white"
        />
        <p className="font-light text-[#8BACD9]">
          Creation of <span className="text-white">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

import Button from "../components/Button";
import "../embla.css";
import galaxy from "../components/images/backgrounds/a3.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="bg-background">
        <div
          className="py-52 px-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${galaxy})` }}
        >
          <div>
            <div className="flex flex-col gap-2 text-white mb-24 max-w-[72rem]">
              <h1 className="text-left text-5xl font-bold">Homepage</h1>
              <p className="text-left text-2xl leading-tight">
                Team 1257 Parallel Universe is an out of this world FIRST
                robotics team based in Scotch Plains, NJ! We strive to inspire
                and cultivate a passion for STEM in a new generation of future
                innovators, leaders, and entrepreneurs.
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-emerald-950 h-[45rem] py-12">
          <div className="absolute top-[-5rem] left-0 right-0 z-10 bg-white shadow-2xl shadow-zinc-700 rounded-lg p-36 text-2xl w-[72rem] m-auto">
            <p>
              FIRST is an international, not-for-profit organization that was
              founded in 1989 in Manchester, NH. FIRST had goals to inspire
              younger people to become interested in STEM. The organization
              currently has four programs that support their goal.
            </p>
            <div className="bg-white mt-10 grid grid-cols-2 gap-10 text-black items-center max-w-[72rem] m-auto">
              <p className="text-xl">
                FIRST is an international, not-for-profit organization that was
                founded in 1989 in Manchester, NH. FIRST had goals to inspire
                younger people to become interested in STEM. The organization
                currently has four programs that support their goal.
              </p>
              <img src={"pics/frcLogo.png"} alt="FRC logo" />
            </div>
          </div>
        </div>
        <div className="p-24 bg-emerald-700">
          <div className="flex flex-row justify-between text-center text-xl font-extrabold gap-2 text-white m-auto max-w-[72rem] mb-12">
            <div>
              <h1 className="text-[15dvh]">125</h1>
              <p className="font-semibold">Number of bananas</p>
            </div>
            <div>
              <h1 className="text-[15dvh]">125</h1>
              <p className="font-semibold">Number of apples</p>
            </div>
            <div>
              <h1 className="text-[15dvh]">125</h1>
              <p className="font-semibold">Number of cherries</p>
            </div>
          </div>
        </div>
        <div className="p-16 bg-white">
          <div>
            <div className="flex flex-col gap-2 text-green-950 items-center mb-12">
              <h1 className="text-5xl font-bold">Get Started</h1>
              <p className="text-2xl leading-tight mb-4">
                Here are some resources to go green. Please do so to help the
                environment.
              </p>
              <Button
                text="Start now"
                style="bg-zinc-800 text-white"
                to="/info"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

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
        <div className="relative bg-emerald-700 h-[45rem] py-12">
          <div className="absolute top-[-5rem] left-0 right-0 z-10 bg-white shadow-2xl shadow-green-900 rounded-lg p-36 text-2xl w-[72rem] m-auto">
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
        <div className="p-24 bg-teal-950">
          <div>
            <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto mb-12">
              <h1 className="text-center text-5xl font-bold">Our Impact</h1>
              <p className="text-center text-2xl leading-tight">
                Parallel Universe is deeply committed to STEM outreach and
                education. Team 1257 is a proud co-host of RVSTS and its
                members often volunteer at FLL events.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://placehold.co/640x360"
                alt="placeholder"
                className="mb-12"
              />
              <Button
                text="Learn more"
                style="bg-green-700 hover:bg-green-500 text-white blob-green"
                to="/info"
              />
            </div>
          </div>
        </div>
        <div className="bottom-arrow bg-gradient-to-r p-16 from-purple-600 from-50% to-blue-400 ">
          <div>
            <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto mb-12">
              <h1 className="text-center text-5xl font-bold">Get Involved</h1>
              <p className="text-center text-2xl leading-tight">
                Running an award-winning robotics team takes significant
                personal and financial contribution. We are always seeking new
                mentors and sponsorships. We appreciate all the help we can get!
              </p>
            </div>
            <Button text="Learn more" style="bg-white text-black" to="/info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

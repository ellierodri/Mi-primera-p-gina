import { useState } from "react";

const TwitterCard = ({ username, name, following }) => {
  const [isfollowing, setisfollowing] = useState(following);

  const handleButtom = () => {
    setisfollowing(!isfollowing);
  };

  return (
    <>
      <aside className="flex w-96 justify-between items-center">
        <section className="flex items-center gap-3">
          <img className="w-24 rounded-full" src={`https://unavatar.io/${username}`} alt="imagen del usuario" />
          <div>
            <h1 className="text-lg text-white hover:underline cursor-pointer">{name}</h1>
            <h2 className="text-base text-gray-600">@{username}</h2>
          </div>
        </section>

        <section>
          <button
            onClick={handleButtom}
            className={`${isfollowing ? "hover:bg-red-950" : "hover:bg-gray-600"} bg-white rounded-2xl p-2 h-[44px] text-black font-bold`}
          >
            {isfollowing ? "Unfollow" : "Follow"}
          </button>
        </section>
      </aside>
    </>
  );
};

export default TwitterCard;

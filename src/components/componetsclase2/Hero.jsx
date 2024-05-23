const Hero = () => {
  return (
    <>
      <main className="flex flex-col h-[810px] w-screen">
        <section className="bg-black flex w-full justify-around px-60">
          <section className="pt-40 flex flex-col gap-7">
            <div>
              <button className="text-white text-base border-[1px] bg-gradient-to-r from-[#02FCEF70] via-[#FFB52B70] to-[#A02BFE70] rounded-3xl h-[32px] w-[251.3px]">
                Resend raises $3M seed round
              </button>
            </div>
            <div>
              <h1 className="text-[72px] text-white leading-none inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-purple-950">
                Email for <br></br>developers
              </h1>
            </div>
            <div>
              <h2 className="text-lg text-gray-600">
                The best API to reach humans instead of spam folders. <br></br>Build, test, and deliver transactional emails at scale
              </h2>
            </div>
            <div className="flex gap-9">
              <button className="text-black bg-white rounded-3xl p-2 font-bold">Get Started</button>
              <button className="text-gray-600 font-bold">Documentation</button>
            </div>
          </section>

          <section>
            <img src="/cubo.svg" alt="Foto de un cubo" />
          </section>
        </section>
        <section className="flex justify-center">
          <h3 className="text-white font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-700 to-red-900">
            Backed by Ellie
          </h3>
        </section>
      </main>
    </>
  );
};
export default Hero;

const NavBar = () => {
  return (
    <>
      <header className="w-screen h-[59px] flex justify-around items-center">
        <section>
          <h1 className="text-white text-2xl font-bold">Resend</h1>
        </section>

        <section className="flex gap-7 text-[#EFF5FF]">
          <a href="https://x.com/El1centinela" target="_blank" rel="noreferrer">
            About
          </a>
          <a href="https://pbs.twimg.com/media/BJjiYbFCYAE3Q7x?format=jpg&name=small" target="_blank" rel="noreferrer">
            Blog
          </a>
          <a href="https://pbs.twimg.com/media/AaSDyiWCAAEKsMZ?format=jpg&name=medium" target="_blank" rel="noreferrer">
            Customers
          </a>
          <a href="https://pbs.twimg.com/media/GOPSxBBWUAA47JO?format=jpg&name=900x900" target="_blank" rel="noreferrer">
            Pricing
          </a>
          <a href="https://pbs.twimg.com/media/GMH93WnW8AA1aMI?format=jpg&name=small" target="_blank" rel="noreferrer">
            Enterprise
          </a>
          <a href="https://pbs.twimg.com/media/A-neTC4CEAADznL?format=jpg&name=large" target="_blank" rel="noreferrer">
            Changelog
          </a>
          <a href="https://pbs.twimg.com/media/GFxpFm0WQAA0ZfC?format=jpg&name=large" target="_blank" rel="noreferrer">
            Docs
          </a>
        </section>

        <section className="flex gap-7">
          <button className="text-[#EFF5FF]">Sign in</button>
          <button className="text-black bg-white rounded-3xl p-2 font-bold">Get Started</button>
        </section>
      </header>
    </>
  );
};

export default NavBar;

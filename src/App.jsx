import React from "react";
import "./index.css";
import ScrollingAnimation from "./components/SecondAnimation";
// import ThirdAnimation from "./components/ThirdAnimation";

function App() {
  return (
    <>
      <div className="w-full bg-zinc-900">
        <div className="parent2 relative top-0 left-0 w-full h-[350vh] bg-zinc-800">
          <div className="w-full h-screen top-0 left-0 sticky">
            <nav className="main-nav mb-20 mt-5 ml-20 absolute top-0">
              <img
                className="logo"
                src="./logo.png"
                alt="logo"
              />
              <div className="shift">
                <ul>
                  <li>
                    <a href="menu.html">Menu</a>
                  </li>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                  <li>
                    <a href="#">TV Series</a>
                  </li>
                  <li>
                    <a href="#">Most Popular</a>
                  </li>
                  <li>
                    <a href="#">Top Airing</a>
                  </li>
                </ul>
              </div>
              <button className="btn">Sign in</button>
            </nav>
            <ScrollingAnimation />
            <div className="hero-sec absolute">
              <h1>TECH</h1>
              <p>
                If You Don’t Take Risks, You Can’t <br /> Create A Future
              </p>
              <form className="hero-sea">
                <input type="text" placeholder="search anime" />
                <button>Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="sec-1 px-10">
        <div className="sec-main">
          <h1>Let data drive your innovation.</h1>
          <p>
            The power of imagination is the ability to <span>create </span>your
            own future and the <span> power </span>to create your own flow of
            time.
          </p>
        </div>
        <div className="sec-img">
          <img src="./wanko.jpg" alt="" />
        </div>
      </section>
    
    </>
  );
}

export default App;

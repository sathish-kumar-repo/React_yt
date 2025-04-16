import "./App.css";

export const App = () => {
  return (
    <section>
      <div className="container">
        <header>
          <a href="#" className="logo">
            Logo
          </a>
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </header>

        <div className="content">
          <h2>Glassmorphism UI</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            dolorem asperiores dolores dicta rerum magnam, est totam vel ut rem
            libero. Libero consectetur labore beatae vel esse, possimus dolorem
            nam?
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="imgBx">
          <img src="/character.png" alt="" />
        </div>

        <ul className="sci">
          <li>
            <a href="#">
              <img src="facebook.png" alt="facebook.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="twitter.png" alt="twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="instagram.png" alt="instagram.png" />
            </a>
          </li>
        </ul>

        <p className="copyrightText">
          Copyright @ 2021 Online Tutorials. All Right Reserved
        </p>
      </div>
    </section>
  );
};

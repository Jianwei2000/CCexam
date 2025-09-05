import { Link } from "react-router-dom";
import "./all.scss";
import { useEffect, useState } from "react";

function App() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  //圖
  const images = [
    "https://picsum.photos/id/1015/1920/400",
    "https://picsum.photos/id/1016/1920/400",
    "https://picsum.photos/id/1013/1920/400",
  ];

  const [index, setIndex] = useState(0);

  //2秒自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const prevClick = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextClick = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <header>
        <h1>
          <Link to="/">LOGO</Link>
        </h1>
        <ul>
          <li className="a-hover">
            <Link to="#">A</Link>
            <div className="a-wrap">
              <Link to="#">A-1</Link>
              <Link to="#">A-2</Link>
              <Link to="#">A-3</Link>
              <Link to="#">A-4</Link>
            </div>
          </li>
          <li>
            <Link to="#">B</Link>
          </li>
          <li>
            <Link to="#">C</Link>
          </li>
          <li>
            <Link to="#">D</Link>
          </li>
          <li>
            <Link to="#">E</Link>
          </li>
          <li>
            <Link to="#">F</Link>
          </li>
        </ul>
        <div className="ham" onClick={toggleMenu}>☰</div>
        <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
          <ul>
            <li className="a-menu">
              <Link to="#">A</Link>
              <ul>
                <li><Link to="#">A-1</Link></li>
                <li><Link to="#">A-2</Link></li>
                <li><Link to="#">A-3</Link></li>
                <li><Link to="#">A-4</Link></li>  
              </ul>
            </li>
            <li>
              <Link to="#">B</Link>
            </li>
            <li>
              <Link to="#">C</Link>
            </li>
            <li>
              <Link to="#">D</Link>
            </li>
            <li>
              <Link to="#">E</Link>
            </li>
            <li>
              <Link to="#">F</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="slide">
          <div
            className="slide-wrap"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {images.map((i, index) => (
              <img key={index} src={i} />
            ))}
          </div>
          <button onClick={prevClick} className="prev-btn">
            ‹
          </button>
          <button onClick={nextClick} className="next-btn">
            ›
          </button>
        </div>

        <h2 className="title">Title</h2>
        <div className="card-wrap">
          <div className="card">
            <div className="img-wrap">
             
            </div>
            <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrap"></div>
              <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrap"></div>
              <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrap"></div>
              <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrap"></div>
              <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrap"></div>
              <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrap"></div>
              <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrap"></div>
              <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
          <div className="card">
            <div className="img-wrap"></div>
              <div className="info">
              <h3>卡片標題</h3>
              <p>敘述...</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

function Anasayfa() {
  return (
    <>
      <div className="arkaplan">
        <div className="yazi">
          <p className="baslik">Teknolojik Yemekler</p>
          <p className="firsat">fırsatı kaçırma</p>
          <p className="slogan">KOD ACIKTIRIR</p>
          <p className="slogan">PIZZA, DOYURUR </p>
        </div>
        <div className="buttonCont">
          <Link to="/pizza" className="aciktim">
            ACIKTIM
          </Link>
        </div>
      </div>

      <div className="icons-container beyaz">
        <div className="icon-group">
          <img src="icons/1.svg" alt="" />
          <p className="urunler">YENİ! Kore</p>
        </div>

        <div className="icon-group">
          <img src="icons/2.svg" alt="" />
          <p className="urunler">Pizza</p>
        </div>

        <div className="icon-group">
          <img src="icons/3.svg" alt="" />
          <p className="urunler">Burger</p>
        </div>

        <div className="icon-group">
          <img src="icons/4.svg" alt="" />
          <p className="urunler">Kızartmalar</p>
        </div>

        <div className="icon-group">
          <img src="icons/5.svg" alt="" />
          <p className="urunler">Fast food</p>
        </div>

        <div className="icon-group">
          <img src="icons/6.svg" alt="" />
          <p className="urunler">Gazlı İçecek</p>
        </div>
      </div>

      <div className="reklam-container">
        <div className="reklamlar">
          <div className="lezzetus">
            <Card inverse style={{ border: "0" }}>
              <CardImg alt="Pizza Resmi" src="kart-1.png" width="70%" />
              <CardImgOverlay>
                <CardTitle className="ozel-lezzetus">
                  Özel <br />
                  Lezzetus
                </CardTitle>
                <CardText className="pa">Position:Absolute Acı Burger</CardText>
                <Button className="pizza-buton">SİPARİŞ VER</Button>
              </CardImgOverlay>
            </Card>
          </div>
          <div className="kargo-hack">
            <div className="hackathlon">
              <Card inverse style={{ border: "0" }}>
                <CardImg alt="Hamburger Resmi" src="kart-2.png" width="70%" />
                <CardImgOverlay>
                  <CardTitle tag="h4" className="ham">
                    Hackathlon
                  </CardTitle>
                  <CardText tag="h4" className="hamb">
                    Burger Menü
                  </CardText>
                  <Button className="sag-siparis">SİPARİŞ VER</Button>
                </CardImgOverlay>
              </Card>
            </div>
            <div className="kargo">
              <Card inverse style={{ border: "0" }}>
                <CardImg alt="Kargo" src="kart-3.png" width="70%" />
                <CardImgOverlay>
                  <CardTitle tag="h4" className="kur">
                    <span style={{ color: "#CE2829" }}>Çoooook</span> hızlı
                  </CardTitle>
                  <CardText tag="h4" className="kury">
                    npm gibi kurye
                  </CardText>
                  <Button className="sag-siparis">SİPARİŞ VER</Button>
                </CardImgOverlay>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="urunler-container">
        <div>
          <h3 className="encokpaket">en çok paketlenen menüler</h3>
          <h2 className="aciktiran">Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>
        <div class="butonlar">
          <button className="yemek-butonu">
            <img src="./icons/1.svg" alt="test" />
            <span className="yemek-text">Kore</span>
          </button>
          <button className="yemek-butonu">
            <img src="./icons/2.svg" alt="test" />
            <span className="yemek-text">Pizza</span>
          </button>
          <button className="yemek-butonu">
            <img src="./icons/3.svg" alt="test" />
            <span className="yemek-text">Burger</span>
          </button>
          <button className="yemek-butonu">
            <img src="./icons/4.svg" alt="test" />
            <span className="yemek-text">French Fries</span>
          </button>
          <button className="yemek-butonu">
            <img src="./icons/5.svg" alt="test" />
            <span className="yemek-text">Fast Food</span>
          </button>
          <button className="yemek-butonu">
            <img src="./icons/6.svg" alt="test" />
            <span className="yemek-text">Soft Drinks</span>
          </button>
        </div>
        <div className="urun-resimleri">
          <Card
            style={{
              width: "80%",
              border: "none",
              paddingLeft:"3rem",
              paddingRight:"3rem",
              borderRadius:"20px"
            }}
          >
            <img alt="Pizza" src="./food-1.png" width="100%" className="urun-resmi"/>
            <CardBody className="card-ort">
              <CardTitle className="urun-title">Terminal Pizza</CardTitle>
              <div className="fiyat-yorum">
                <CardText>4.9</CardText>
                <CardText>(200)</CardText>
                <CardText
                  style={{
                    fontWeight: "600",
                  }}
                >
                  85₺
                </CardText>
              </div>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "80%",
              border: "none",
              paddingLeft:"3rem",
              paddingRight:"3rem",
              borderRadius:"20px"
            }}
          >
            <img alt="Pizza" src="./food-2.png" width="100%" className="urun-resmi"/>
            <CardBody className="card-ort">
              <CardTitle className="urun-title">Position Absolute Acı Pizza</CardTitle>
              <div className="fiyat-yorum">
                <CardText>4.9</CardText>
                <CardText>(928)</CardText>
                <CardText
                  style={{
                    fontWeight: "600",
                  }}
                >
                  85₺
                </CardText>
              </div>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "80%",
              border: "none",
              paddingLeft:"3rem",
              paddingRight:"3rem",
              borderRadius:"20px"
            }}
          >
            <img alt="Pizza" src="./food-3.png" width="100%" className="urun-resmi"/>
            <CardBody className="card-ort">
              <CardTitle className="urun-title">useEffect Tavuklu Burger</CardTitle>
              <div className="fiyat-yorum">
                <CardText>4.9</CardText>
                <CardText>(462)</CardText>
                <CardText
                  style={{
                    fontWeight: "600",
                  }}
                >
                  75₺
                </CardText>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="nav-container">
      <div className="navi">
      <div className="iletisim-cont">
         <div className="iletisim">
          <p className="teknobas">Teknolojik <br /> Yemekler</p>
          <div className="nav-icons">
                  <img src="./icons/icon-1.png" alt="lokasyon" className="nav-i"/>
                  <p class="iletisim-text">341 Londonderry Road, <br /> Istanbul Türkiye</p>                  
          </div>
          <div className="nav-icons">
                  <img src="./icons/icon-2.png" alt="mail" className="nav-i" />
                  <p class="iletisim-text">aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="nav-icons">
                  <img src="./icons/icon-3.png" alt="telefon" className="nav-i" />
                  <p class="iletisim-text">+90 216 123 45 67</p>
          </div>
          </div> 
          <div className="smenu">
            <h5 className="smenu-text">Sıccacık Menuler</h5>
          <p class="iletext">Terminal Pizza</p>
          <p class="iletext">5 Kişilik Hackathlon Pizza</p>
          <p class="iletext">useEffect Tavuklu Pizza</p>
          <p class="iletext">Beyaz Console Frosty</p>
          <p class="iletext">Testler Geçti Mutlu Burger</p>
          <p class="iletext">Position Absolute Acı Burger</p>
          </div>
          </div>   
          <div className="inst">
          <h5 className="smenu-text">Instagram</h5>
          <div className="insta-foto">
          <img src="./insta/li-0.png" alt="yemek" className="fotom" />
          <img src="./insta/li-1.png" alt="yemek" className="fotom" />
          <img src="./insta/li-2.png" alt="yemek" className="fotom" />
          <img src="./insta/li-3.png" alt="yemek" className="fotom" />
          <img src="./insta/li-4.png" alt="yemek" className="fotom" />
          <img src="./insta/li-5.png" alt="yemek" className="fotom" />
          </div>
          </div>             
      </div>
      <div className="alt-kisim">
        <p className="copyright">© 2023 Teknolojik Yemekler.</p>
      </div>  
      </div>
    </>
  );
}

export default Anasayfa;

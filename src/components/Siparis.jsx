import { Form, FormGroup, Input, Col } from "reactstrap";
import { useState, useEffect } from "react";
import "./Siparis.css";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ButtonToolbar, Label } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Siparis() {
  const [size, setSize] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [crust, setCrust] = useState("");
  const [crustError, setCrustError] = useState("");
  const [adet, setAdet] = useState(1);
  const [toppings, setToppings] = useState([]);
  const [toppingsError, setToppingsError] = useState("");
  const [special, setSpecial] = useState("");
  const [total, setTotal] = useState(85.5);
  const [secimler, setSecimler] = useState(0.0);

  const ekMalzemeler = [
    { name: "Pepperoni", value: "Pepperoni" },
    { name: "Sosis", value: "Sosis" },
    { name: "Kanada Jambonu", value: "Kanada Jambonu" },
    { name: "Tavuk Izgara", value: "Tavuk Izgara" },
    { name: "Soğan", value: "Soğan" },
    { name: "Domates", value: "Domates" },
    { name: "Mısır", value: "Mısır" },
    { name: "Sucuk", value: "Sucuk" },
    { name: "Jalepeno", value: "Jalepeno" },
    { name: "Sarımsak", value: "Sarımsak" },
    { name: "Biber", value: "Biber" },
    { name: "Sucuk", value: "Sucuk2" },
    { name: "Ananas", value: "Ananas" },
    { name: "Kabak", value: "Kabak" },
  ];

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // sayfa yeniden yüklenmesini engelledik, durumlar korundu

    // Manuel doğrulama işlemleri error mesajları {errorMessage} ile div içerisinde gösterilebilir
    let hasError = false;

  if (!size) {
    setSizeError("Lütfen bir boyut seçin.");
    hasError = true;
  } else {
    setSizeError("");
  }

  if (!crust || crust === "") {
    setCrustError("Lütfen bir hamur seçin.");
    hasError = true;
  } else {
    setCrustError("");
  }

  if (!toppings || toppings.length < 4) {
    setToppingsError("Lütfen en az 4 ek malzeme seçin.");
    hasError = true;
  } else if (toppings.length > 10) {
    setToppingsError("En fazla 10 ek malzeme seçebilirsiniz.");
    hasError = true;
  } else {
    setToppingsError("");
  }

  // Check if there are errors, if yes, don't proceed with the submission
  if (hasError) {
    return;
  }

    // tüm koşulları sağlıyorsa gönder
    const order = {
      size,
      toppings,
      special, // order olarak iletilir ama sipariş özetinde gösterilmez
      Fiyat: total,
      adet,
      secimler,
      crust,
    };

    axios
      .post("https://reqres.in/api/users", order)
      .then((response) => {
        console.log("Sipariş başarıyla gönderildi:", response);
        setSize("");
        setSizeError("");
        setToppings([]);
        setSpecial("");
        setToppingsError("");
        setSecimler("");
        setCrust("");
        setCrustError("");
        navigate("/final", { state: { order } }); //useHistory ile history.push("/final", {state: {order}})
      })
      .catch((error) => {
        console.error("Sipariş gönderilirken hata oluştu:", error);
      });
  };

  const handleToppingsChange = (event) => {
    // event = checkbox işaretlenmesi
    const toppingName = event.target.value;
    const isChecked = event.target.checked;

    setToppings((currentToppings) => {
      const updatedToppings = isChecked
        ? [...currentToppings, toppingName] // true ise topping(value) ek malzeme listesine eklenir
        : currentToppings.filter((topping) => topping !== toppingName); // false ise filtrelenerek o malzeme ismi bulunur ve listeden çıkarılır

      // Ek malzemelerin toplam fiyatını hesaplama
      const updatedTotal = calculateTotalPrice(adet, updatedToppings);
      setTotal(updatedTotal);

      return updatedToppings;
    });
  };

  useEffect(() => {
    setSecimler(toppings.length * adet * 5);
    setTotal(calculateTotalPrice(adet, toppings));
  }, [toppings, adet]); //use effect sayesinde her topping seçimi veya her adet arttırımı calculateTotalPrice'ı tetikler

  const calculateTotalPrice = (guncelAdet, updatedToppings) => {
    const anaFiyat = 85.5;
    const ekMalzemeFiyati = (updatedToppings?.length || 0) * 5; // soru işareti if bloğu yazmamama yardımcı oldu, undefined veya null değilse çalışır
    const toplamFiyat = (anaFiyat + ekMalzemeFiyati) * guncelAdet;
    return toplamFiyat;
  };

  const handleSpecialChange = (event) => {
    setSpecial(event.target.value);
  }; //aktif olarak gösterilmiyor

  /* const isButtonDisabled =
    !size || !crust || toppings.length < 4 || toppings.length > 10 || adet <= 0; 
  */

  return (
    <Form onSubmit={handleSubmit}>
      <header>
        <div className="arkap">
          <img src="logo-2.svg" alt="" className="slogo" />
        </div>
        <div class="main-cont">
          <div className="main-top">
            <img src="adv-form-banner.png" alt="" className="banner-img" />
            <div class="navlinkleri">
              <Nav className="navKism">
                <NavItem>
                  <NavLink tag={Link} to="/">
                    Anasayfa
                  </NavLink>
                </NavItem>
                <p className="cizgi">-</p>

                <NavItem>
                  <NavLink tag={Link} to="/pizza" style={{ color: "#CE2829" }}>
                    Sipariş Oluştur
                  </NavLink>
                </NavItem>
              </Nav>
            </div>

            <p className="pizza-adi">Position Absolute Acı Pizza</p>
            <div className="fiyatbil">
              <p className="fiyatp">85₺</p>
              <div className="yorum-puan">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p className="urun-acik">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="boyutVeHamur">
          <div className="boyutcont">
          {sizeError && <p className="error-message">{sizeError}</p>}
            <p className="bhyazi">
              Boyut Seç{" "}
              <p style={{ color: "red", display: "inline-flex" }}>*</p>
            </p>

            <ButtonToolbar aria-label="Toolbar with button groups">
              {["S", "M", "L"].map((buttonSize) => (
                <ButtonGroup key={buttonSize}>
                  <Button
                    className="boyut-buton"
                    active={size === buttonSize}
                    onClick={() => handleSizeChange(buttonSize)}
                    size="lg"
                  >
                    {buttonSize}
                  </Button>
                </ButtonGroup>
              ))}
            </ButtonToolbar>
          </div>
          <div className="hamurcont">
          {crustError && <p className="error-message">{crustError}</p>}
              <FormGroup row>
                <legend className="secenek">
                  Hamur Seç<p style={{ color: "red" }}>*</p> 
                </legend>

                <Col sm={10} className="secenek">
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                    value={crust}
                    onChange={(event) => setCrust(event.target.value)}
                  >
                    <option value="">--Hamur Kalınlığı Seç--</option>
                    {["Kalın", "Normal", "İnce"].map((hamur) => (
                      <option key={hamur} value={hamur}>
                        {hamur}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
          </div>
        </div>

        <div className="ekMal-container">
          <div className="ekMalz">
            <p className="ekMalzemeBaslik">Ek Malzemeler</p>
            <br />
            <br />
            <div className="error-toppings">
            {toppingsError && <p className="error-message">{toppingsError}</p>}
            </div>
            <p className="ekMalzeme acikGri">
              En fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
          </div>
          <div className="malzeme-container">
            {ekMalzemeler.map((malzeme) => (
              <FormGroup
                check
                inline
                name="toppings"
                className="col"
                key={malzeme.value}
              >
                <Input
                  type="checkbox"
                  onChange={handleToppingsChange}
                  value={malzeme.value}
                  checked={toppings.includes(malzeme.value)}
                />
                <Label check className="sebzeler">
                  {malzeme.name}
                </Label>
              </FormGroup>
            ))}
          </div>
        </div>

        <div className="siparisNotu">
          <FormGroup>
            <Label for="siparisNotu">
              <p className="siparisBaslik">Sipariş Notu</p>
            </Label>
            <Input
              id="special-text"
              name="special-text"
              type="text"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              style={{ height: "60px", width: "100%" }}
              onChange={handleSpecialChange}
            />
          </FormGroup>
          <div className="alt-cizgi">
            <hr />
          </div>
        </div>

        <div className="artiEksi">
          <div className="plusmin">
            <div>
              <Button
                className="minus-button"
                type="button"
                onClick={() => {
                  if (adet > 1) {
                    setAdet(adet - 1);
                  }
                }}
              >
                -
              </Button>
            </div>
            <div className="altKisim">
              <div className="adet-kutusu">
                <p className="adet-sayisi">{adet}</p>
              </div>
              <div>
                <Button
                  className="plus-button"
                  type="button"
                  onClick={() => setAdet(adet + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="siparis-bolumu">
            <FormGroup>
              <Label className="secimler">Sipariş Toplamı</Label>
            </FormGroup>
            <FormGroup className="secimler">
              <span>Seçimler:</span> <span>{secimler} ₺</span>
            </FormGroup>
            <FormGroup className="secimler" style={{ color: "#ce2829" }}>
              <span>Toplam:</span> <span>{total} ₺</span>
            </FormGroup>

            <Button
              id="order-button"
              type="submit" /* disabled={isButtonDisabled} */
            >
              SİPARİŞ VER
            </Button>
          </div>
        </div>
      </main>

      <footer>
        <div className="nav-container">
          <div className="navi">
            <div className="iletisim-cont">
              <div className="iletisim">
                <img className="teknobas" src="logo-footer.svg" alt="" />
                <div className="nav-icons">
                  <img
                    src="./icons/icon-1.png"
                    alt="lokasyon"
                    className="nav-i"
                  />
                  <p class="iletisim-text">
                    341 Londonderry Road, <br /> Istanbul Türkiye
                  </p>
                </div>
                <div className="nav-icons">
                  <img src="./icons/icon-2.png" alt="mail" className="nav-i" />
                  <p class="iletisim-text">aciktim@teknolojikyemekler.com</p>
                </div>
                <div className="nav-icons">
                  <img
                    src="./icons/icon-3.png"
                    alt="telefon"
                    className="nav-i"
                  />
                  <p class="iletisim-text">+90 216 123 45 67</p>
                </div>
              </div>
              <div className="nav-duzen">
                <div className="smenu">
                  <h5 className="smenu-text">Hot Menu</h5>
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
          </div>
          <div className="alt-kisim">
            <p className="copyright">© 2023 Teknolojik Yemekler.</p>
          </div>
        </div>
      </footer>
    </Form>
  );
}

export default Siparis;

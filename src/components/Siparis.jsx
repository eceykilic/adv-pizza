import { Form, FormGroup, Input, Col } from "reactstrap";
import { useState, useEffect } from "react";
import "./Siparis.css";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ButtonToolbar, Label} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Siparis() {
    const [size, setSize] = useState("");
    const [crust, setCrust] = useState("");
    const [adet, setAdet] = useState(1);
    const [toppings, setToppings] = useState([]);
    const [special, setSpecial] = useState("");
    const [total, setTotal] = useState(85.5);
    const [secimler, setSecimler] = useState(0.0);
    const [errorMessage, setErrorMessage] = useState("");
    const toppingsPrices = {
      Pepperoni: 5,
      Sosis: 5,
      KanadaJambonu: 5,
      TavukIzgara: 5,
      Soğan: 5,
      Domates: 5,
      Mısır: 5,
      Sucuk: 5,
      Jalepeno: 5,
      Sarımsak: 5,
      Biber: 5,
      Ananas: 5,
      Kabak: 5,
      Sucuk2: 5,
    };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleToppingsChange = (event) => {
    const toppingName = event.target.value;
    const isChecked = event.target.checked;

    setToppings((currentToppings) => {
      const updatedToppings = isChecked
        ? [...currentToppings, toppingName]
        : currentToppings.filter((topping) => topping !== toppingName);

      // Ek malzemelerin toplam fiyatını hesaplayan fonksiyon
      const updatedTotal = calculateTotalPrice(adet, updatedToppings);
      setTotal(updatedTotal);

      return updatedToppings;
    });
  };

  useEffect(() => {
    setSecimler(toppings.length * adet * 5);
    setTotal(calculateTotalPrice(adet, toppings));
  }, [toppings, adet]);

  const calculateTotalPrice = (newAdet, updatedToppings) => {
    const anaFiyat = 85.5;
    const ekMalzemeFiyati = (updatedToppings?.length || 0) * 5;
    const toplamFiyat = (anaFiyat + ekMalzemeFiyati) * newAdet;
    return toplamFiyat;
  };

  const handleSpecialChange = (event) => {
    setSpecial(event.target.value);
  };


  return (
    <div>
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
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
      <div className="boyutVeHamur">
        <div className="boyutcont">
          <p className="bhyazi">
            Boyut Seç <p style={{ color: "red", display: "inline-flex" }}>*</p>
          </p>

          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup>
              <Button
                className="boyut-buton"
                active={size === "small"}
                onClick={() => handleSizeChange("small")}
                size="lg"
              >
                S
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                className="boyut-buton"
                active={size === "medium"}
                onClick={() => handleSizeChange("medium")}
                size="lg"
              >
                M
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                className="boyut-buton"
                active={size === "large"}
                onClick={() => handleSizeChange("large")}
                size="lg"
              >
                L
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div className="hamurcont">
          <Form>
            <FormGroup row>
              <legend className="secenek">
                Hamur Seç<p style={{ color: "red", display: "flex" }}>*</p>
              </legend>
              <br />
              <br />
              <Col sm={10} className="secenek">
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={crust}
                  onChange={(event) => setCrust(event.target.value)}
                >
                  <option value="">Hamur seç</option>
                  <option value="Kalın">Kalın</option>
                  <option value="Normal">Normal</option>
                  <option value="İnce">İnce</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
        
        <div className="ekMal-container">
            <div className="ekMalz">
        <p className="ekMalzemeBaslik">Ek Malzemeler</p>
            <br />
            <br />
            <p className="ekMalzeme acikGri">
              En fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            
            </div>

      <div className="row">
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Pepperoni"
                    checked={toppings.includes("Pepperoni")}
                  />
                  <Label check className="sebzeler">
                    Pepperoni
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Sosis"
                    checked={toppings.includes("Sosis")}
                  />
                  <Label check className="sebzeler">
                    Sosis
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="KanadaJambonu"
                    checked={toppings.includes("Kanada Jambonu")}
                  />
                  <Label check className="sebzeler">
                    Kanada Jambonu
                  </Label>
                </FormGroup>
              </div>
              <br />  
              <div className="row">  
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="TavukIzgara"
                    checked={toppings.includes("Tavuk Izgara")}
                  />
                  <Label check className="sebzeler">
                    Tavuk Izgara
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Soğan"
                    checked={toppings.includes("Soğan")}
                  />
                  <Label check className="sebzeler">
                    Soğan
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Domates"
                    checked={toppings.includes("Domates")}
                  />
                  <Label check className="sebzeler">
                    Domates
                  </Label>
                </FormGroup>
              </div>
              <br />
              <div className="row">
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Mısır"
                    checked={toppings.includes("Mısır")}
                  />
                  <Label check className="sebzeler">
                    Mısır
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Sucuk"
                    checked={toppings.includes("Sucuk")}
                  />
                  <Label check className="sebzeler">
                    Sucuk
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Jalepeno"
                    checked={toppings.includes("Jalepeno")}
                  />
                  <Label check className="sebzeler">
                    Jalepeno
                  </Label>
                </FormGroup>
              </div>
              <br />
              <div className="row">
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Sarımsak"
                    checked={toppings.includes("Sarımsak")}
                  />
                  <Label check className="sebzeler">
                    Sarımsak
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Biber"
                    checked={toppings.includes("Biber")}
                  />
                  <Label check className="sebzeler">
                    Biber
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Sucuk2"
                    checked={toppings.includes("Sucuk2")}
                  />
                  <Label check className="sebzeler">
                    Sucuk
                  </Label>
                </FormGroup>
              </div>
              <br />
              <div className="row">
                <FormGroup check inline name="toppings" className="col">
                  <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Ananas"
                    checked={toppings.includes("Ananas")}
                  />
                  <Label check className="sebzeler">
                    Ananas
                  </Label>
                </FormGroup>
                <FormGroup check inline name="toppings" className="col">
                  <div className="kabak">
                    <Input
                    type="checkbox"
                    onChange={handleToppingsChange}
                    value="Kabak"
                    checked={toppings.includes("Kabak")}
                  />
                    <Label check className="sebzeler">Kabak</Label>
                  </div>
                </FormGroup>
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
    </div>
  );
}

export default Siparis;

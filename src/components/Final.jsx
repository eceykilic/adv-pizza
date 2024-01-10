import React from "react";
import "./Final.css";
import { useLocation } from "react-router-dom";

function Final() {
  const location = useLocation();
  const order = location.state ? location.state.order : null;

  if (!order) {
    return (
      <div>
        <h1>Error: Sipariş bulunamadı</h1>
        <p>Sipariş bilgisi eksik.</p>
      </div>
    );
  }

  return (
    <div class="arkapl">
    <header>
      <img src="logo.svg" alt="" className="ustbaslik" />
      </header>
      <main>
      <div className="icerik">
        <p className="lezzetgeliyor">lezzetin yolda</p>
      
      
        <p className="siparisalindi">SİPARİŞ ALINDI</p>
        <hr />
        <div className="sipariscont">
          <p class="pizzadi">Position: Absolute Acı Pizza</p>
          <div className="siparis-info">
            <p>Boyut: <strong>{order.size}</strong></p>
            <p>Ek Malzemeler: <strong>{order.toppings.join(", ")}</strong></p>
            <p>Hamur: <strong>{order.crust}</strong></p>
          </div>
          <div className="siparis-top">
            <p className="basliktoplam">Sipariş Toplamı</p>
            <div className="sec">
              <p>Seçimler</p>
              <p>{order.secimler}₺</p>
            </div>
            <div className="topla">
              <p>Toplam</p>
              <p>{order.Fiyat}₺</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
    </footer>
    </div>
  );
}

export default Final;

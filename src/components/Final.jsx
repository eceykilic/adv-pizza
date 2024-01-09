import React from "react";
import "./Final.css";
import { useLocation } from "react-router-dom";

function Final() {
  const location = useLocation();
  const order = location.state ? location.state.order : null;

  if (!order) {
    // Handle the case where the order is not available
    return (
      <div>
        <h1>Error: Order not found</h1>
        <p>Sorry, the order information is missing.</p>
      </div>
    );
  }

  return (
    <div className="kipkirmizi">
      <img src="logo.svg" alt="" className="ustbaslik" />
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
    </div>
  );
}

export default Final;

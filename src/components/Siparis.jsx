/* import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import axios from "axios"; */

import "./Siparis.css";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";


function Siparis() {

    return (
        <div>
        <div className="arkap">
        <img src="logo-2.svg" alt="" className="slogo"/>
        </div>
        <div className="main-content">
            <img src="adv-form-banner.png" alt="" className="banner-img"/>
        <div class="navlinkleri">
        <Nav className="navKismi">
              <NavItem>
                <NavLink tag={Link} to="/">
                  Anasayfa
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/pizza"
                  style={{ fontWeight: "bold" }}
                >
                  Sipariş Oluştur
                </NavLink>
              </NavItem>
            </Nav>
        </div>
        </div>
        </div>
    )
}

export default Siparis;
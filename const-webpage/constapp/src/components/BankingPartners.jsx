import React from "react";
import Bajaj from "../assets/bajaj.webp"
import Sbi from "../assets/sbi_home_loan.webp"
import Hdfc from "../assets/hdfc_home_loan.webp"
import Housing from "../assets/housing.webp"
import Basic from "../assets/basic.webp"

function BankingPartners() {
  return (
    <section className="banking-section">
      <div className="banking-heading">
        <p className="section-label">FINANCIAL PARTNERS</p>

        <h2>Trusted Banking Partners</h2>

        <p>
          We work with leading banks to make your dream
          project easier and more affordable.
        </p>
      </div>

      <div className="banking-container">

        <div className="bank-card">
          <div className="bank-logo">
            <img src={Bajaj} alt="Bajaj logo" ></img>
          </div>
          <h3>BAJAJ FINANCE</h3>
          <p>Home Construction Loans</p>
        </div>

        <div className="bank-card">
          <div className="bank-logo">
            <img src={Sbi} alt="sbi logo" />
          </div>
          <h3>State Bank of India</h3>
          <p>Home & Construction Finance</p>
        </div>

        <div className="bank-card">
          <div className="bank-logo">
            <img src={Hdfc} alt="HDFC logo" />
          </div>
          <h3>HDFC Bank</h3>
          <p>Flexible Home Loans</p>
        </div>

        <div className="bank-card">
          <div className="bank-logo">
            <img src={Housing} alt="Housing logo" />
          </div>
          <h3>Housing Bank</h3>
          <p>Construction Loan Solutions</p>
        </div>

        <div className="bank-card">
          <div className="bank-logo">
            <img src={Basic} alt="Basic logo" />
          </div>
          <h3>Basic Bank</h3>
          <p>Construction Loan Solutions</p>
        </div>


      </div>
    </section>
  );
}

export default BankingPartners;
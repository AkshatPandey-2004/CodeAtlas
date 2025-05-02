import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import companies from "../data/companyQuestions.json";
import "../styles/Prepare.css";
import UberLogo from "../assets/uber.jpg";
import AmazonLogo from "../assets/AmazonLogo.jpg";
import MicrosoftLogo from "../assets/MicrosoftLogo.jpg";
import FacebookLogo from "../assets/FacebookLogo.jpg";
import AppleLogo from "../assets/AppleLogo.jpg";
import NetflixLogo from "../assets/NetflixLogo.jpg";
import GoogleLogo from "../assets/GoogleLogo.jpg";
import LinkedinLogo from "../assets/LinkedinLogo.jpg";
import CiscoLogo from "../assets/CiscoLogo.jpg";
import OracleLogo from "../assets/OracleLogo.jpg";
import TeslaLogo from "../assets/TeslaLogo.jpg";
import IBMLogo from "../assets/IbmLogo.jpg";
import PayPalLogo from "../assets/PaypalLogo.jpg";
import AdobeLogo from "../assets/AdobeLogo.jpg";
import Airbnblogo from "../assets/AirbnbLogo.jpg";
import SalesforceLogo from "../assets/SalesforceLogo.jpg";
import SpotifyLogo from "../assets/SpotifyLogo.jpg";
import IntelLogo from "../assets/IntelLogo.jpg";

// import AmazonLogo from "../assets/amazon.png";
// import GoogleLogo from "../assets/google.png";

const Prepare = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const logoMap = {
    Google: GoogleLogo,
    Amazon: AmazonLogo,
    Microsoft: MicrosoftLogo,
    Facebook: FacebookLogo,
    Apple: AppleLogo,
    Netflix: NetflixLogo,
    Uber: UberLogo,
    LinkedIn: LinkedinLogo,
    Cisco: CiscoLogo,
    Oracle: OracleLogo,
    Tesla: TeslaLogo,
    IBM: IBMLogo,
    PayPal: PayPalLogo,
    Adobe: AdobeLogo,
    Airbnb: Airbnblogo,
    Salesforce: SalesforceLogo,
    Spotify: SpotifyLogo,
    Intel: IntelLogo
  };
  const filteredCompanies = companies.filter((comp) =>
    comp.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="prepare-container">
      <h1 className="prepare-title">🚀 Company-wise Preparation</h1>
      <p className="prepare-subtitle">
        Choose a company to view curated coding interview questions.
      </p>

      <input
        type="text"
        placeholder="Search companies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="company-search"
      />

      <div className="company-grid">
        {filteredCompanies.map((comp, i) => (
          <div
            className="company-card glass"
            key={i}
            onClick={() => navigate(`/prepare/${comp.slug}`)}
          >
            <div className="logo1-container">
            <img
                src={logoMap[comp.logo]}
                alt={comp.company}
                className="company-logo"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <h3>{comp.company}</h3>
          </div>
        ))}
        {filteredCompanies.length === 0 && (
          <p className="no-results">No companies match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Prepare;

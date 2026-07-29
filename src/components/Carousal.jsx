'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./Carousal.css";
const Carousel = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  const companies = [
    { id: 1, name: "Amazon", logo: "/mncs/amazon.png" },
    { id: 2, name: "Capgemini", logo: "/mncs/capgemini.png" },
    { id: 3, name: "Cisco", logo: "/mncs/cisco.png" },
    { id: 4, name: "Deloitte", logo: "/mncs/deloitte.png" },
    { id: 5, name: "Freshworks", logo: "/mncs/freshworks.png" },
    { id: 6, name: "GitHub", logo: "/mncs/github.png" },
    { id: 7, name: "HCL", logo: "/mncs/hcl.png" },
    { id: 8, name: "IBM", logo: "/mncs/ibm.png" },
    { id: 9, name: "Infosys", logo: "/mncs/infosys.png" },
    { id: 10, name: "Microsoft", logo: "/mncs/microsoft.png" },
    { id: 11, name: "Oracle", logo: "/mncs/oracle.png" },
    { id: 12, name: "PayPal", logo: "/mncs/paypal.png" },
    { id: 13, name: "TCS", logo: "/mncs/tcs.png" },
    { id: 14, name: "Zoho", logo: "/mncs/zoho.png" },
    { id: 15, name: "Accenture", logo: "/mncs/accenture.svg" },
    { id: 16, name: "Wipro", logo: "/mncs/wipro.svg" },
    { id: 17, name: "Siemens", logo: "/mncs/siemens.svg" },
    { id: 18, name: "Lenovo", logo: "/mncs/lenovo.svg" },
    { id: 19, name: "Nokia", logo: "/mncs/nokia.svg" },
    { id: 20, name: "Samsung", logo: "/mncs/samsung.svg" },
  ];

  // Each row has its own unique company set.
  // Repetition happens only within the same row for seamless scrolling.
  const logoRows = [
    companies.filter((c) =>
      ["Amazon", "Capgemini", "Cisco", "Deloitte", "Freshworks", "GitHub", "HCL"].includes(c.name)
    ),
    companies.filter((c) =>
      ["IBM", "Infosys", "Microsoft", "Oracle", "PayPal", "TCS", "Zoho"].includes(c.name)
    ),
    companies.filter((c) =>
      ["Accenture", "Wipro", "Siemens", "Lenovo", "Nokia", "Samsung"].includes(c.name)
    ),
  ];

  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="placement-home-section">
      <div className="container-fluid px-0">
        <div className="placement-home-card">
          <h2
            ref={titleRef}
            className={`placement-main-title ${titleVisible ? "title-sweep" : ""}`}
          >
            Our Students in Top Companies
          </h2>

          <p className="placement-quote">We go beyond conventional education</p>



          <div className="placement-logo-train">
            {logoRows.map((row, rowIndex) => {
              const scrollingRow = [...row, ...row, ...row];
              return (
                <div
                  key={`logo-row-${rowIndex}`}
                  className={`placement-logo-row ${rowIndex % 2 === 1 ? "is-reverse" : ""
                    }`}
                >
                  <div className="placement-logo-track">
                    {scrollingRow.map((company, index) => (
                      <div
                        key={`${company.id}-${rowIndex}-${index}`}
                        className="placement-logo-item"
                      >
                        <div className="placement-logo-box">
                          <div className="placement-logo-wrap">
                            <Image
                              src={company.logo}
                              fill
                              alt={company.name}
                              className="placement-logo-image"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

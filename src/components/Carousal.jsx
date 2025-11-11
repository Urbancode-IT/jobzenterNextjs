'use client';
import Image from "next/image";
import "./Carousal.css";
const Carousel = () => {

    const companies = [
    {id:1,name:"amazon",logo:"/mncs/amazon.png"},
    {id:2,name:"capgemini",logo:"/mncs/capgemini.png"},
    {id:3,name:"cisco",logo:"/mncs/cisco.png"},
    {id:4,name:"deloitte",logo:"/mncs/deloitte.png"},
    {id:5,name:"freshworks",logo:"/mncs/freshworks.png"},
    {id:6,name:"github",logo:"/mncs/github.png"},
    {id:7,name:"hcl",logo:"/mncs/hcl.png"},
    {id:8,name:"ibm",logo:"/mncs/ibm.png"},
    {id:9,name:"infosys",logo:"/mncs/infosys.png"},
    {id:10,name:"microsoft",logo:"/mncs/microsoft.png"},
    {id:11,name:"oracle",logo:"/mncs/oracle.png"},
    {id:12,name:"paypal",logo:"/mncs/paypal.png"},
    {id:13,name:"tcs",logo:"/mncs/tcs.png"},
    {id:14,name:"zoho",logo:"/mncs/zoho.png"},
  ];

  const duplicatedCompanies = [...companies, ...companies,];

  return (
    <div className="mnc_carasoul">
        {/* carasoul */}
        
    <div className=" company-carousel-container">
      <div className="company-carousel">
        <div className="text-end my-5 me-5">
      <h4 className="">
        We got our students placed in top MNCs
      </h4>
      {/* Green underline */}
      <div
        className="mx-auto my-2"
        style={{
          width: "60px",
          height: "3px",
          backgroundColor: "#fac76a", // green color
          borderRadius: "2px",
        }}
      ></div>
      <p className="text-muted">
        <b>"</b><i>We go beyond conventional education, empowering you with the skills to create a successful and sustainable career.</i><b>"</b>
      </p>
    </div>
        <div className="company-track">
          {duplicatedCompanies.map((company, index) => (
            <div key={`${company.id}-${index}`} className="company-slide">
              <div className="company-logo object-fit-contain position-relative">
                {/* Replace with actual logo images */}
                {/* <span className="logo-text">{company.name}</span> */}
                <Image src={company.logo} fill alt={company.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Carousel

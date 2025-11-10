"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPost = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      {/* Breadcrumb */}
      <p className="text-muted" style={{ fontSize: "14px" }}>
        <span className="text-warning fw-semibold"><a href="/">Home</a></span> / <a href="/blogs">Blogs</a> / CCNA
      </p>

      {/* Title */}
      <h2 className="fw-bold mb-3">
        Cisco Certified Network Associate: Your Gateway to a Global Networking Career
      </h2>

      {/* Meta Info */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="badge bg-light text-dark px-3 py-2">Networking</span>
        <span className="text-muted" style={{ fontSize: "14px" }}>
          a min ago
        </span>
      </div>

      {/* Hero Image */}
      <div className="mb-4" style={{ width: "100%", height: "400px", position: "relative" }}>
        <Image
          src="/blogs/CCNA.png"
          alt="CCNA Training"
          fill
          className="rounded"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Blog Content */}
      <div className="text-muted" style={{ lineHeight: "1.8", fontSize: "16px" }}>

        <p>
          In today’s hyper-connected world, businesses rely on secure, efficient, and reliable networks to
          operate smoothly. The Cisco Certified Network Associate (CCNA) certification is one of the most
          respected credentials in the IT industry, proving your expertise in networking fundamentals,
          security, automation, and more.
        </p>

        <p>
          As organizations expand their digital infrastructure, the demand for skilled networking
          professionals has reached new heights—making CCNA a powerful stepping stone toward a high-paying
          and future-proof career.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">Why CCNA Certification Matters</h5>

        <p>
          Networks are the backbone of modern communication, powering everything from cloud services to secure
          data transfers. A single network failure can halt business operations, making skilled network
          engineers critical assets.
        </p>

        <p>
          CCNA equips you with essential skills in routing, switching, IP connectivity, security fundamentals,
          and network automation. Whether managing small business networks or enterprise-grade environments,
          CCNA gives you the competence to build, maintain, and troubleshoot effectively.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">Driving Business Success with Networking Expertise</h5>

        <p>
          For companies, reliable networking ensures uninterrupted services, better data security, and higher
          productivity. CCNA-certified professionals enable smooth business operations and robust scalability.
        </p>

        <p>
          Industries like finance, healthcare, e-commerce, and government rely heavily on strong networking
          systems. As businesses adopt IoT, cloud computing, and AI-driven automation, the demand for CCNA
          experts is only increasing.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">The Impact on Your Career</h5>

        <p>
          CCNA is a globally recognized certification that boosts your professional credibility. It opens doors
          to roles such as Network Engineer, System Support Specialist, Network Administrator, and IT
          Infrastructure Manager.
        </p>

        <p>
          CCNA professionals earn competitive salaries ranging from 5 LPA to 20 LPA depending on experience and
          specialization. It also acts as a foundation for advanced Cisco certifications, enabling long-term
          technical and leadership growth.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">The Dreamy Factors of CCNA</h5>

        <p>
          CCNA offers the perfect blend of theory and hands-on practical networking experience. You gain the
          confidence to design and troubleshoot real-world networks while working with Cisco’s industry-leading
          technologies.
        </p>

        <p>
          With global recognition and high career mobility, CCNA provides opportunities to work anywhere in the
          world, making it ideal for professionals seeking career stability and international growth.
        </p>

        <p>
          Ready to launch your networking career? Enroll in our CCNA Training Program and learn from industry
          experts with real lab-based experience. Prepare confidently and take the first step toward becoming a
          certified networking professional who keeps the world connected.
        </p>

      </div>

      {/* Share Section */}
      <div className="mt-4 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3 mt-5">
          <span className="fw-semibold">Share this</span>
          <i className="bi bi-facebook fs-5"></i>
          <i className="bi bi-instagram fs-5"></i>
          <i className="bi bi-twitter fs-5"></i>
        </div>

        {/* Footer Tag */}
        <div className="mt-5">
          <span className="badge bg-light text-dark px-4 py-2">Networking</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

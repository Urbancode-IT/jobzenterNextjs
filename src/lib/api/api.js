export async function submitEnquiryForm(payload) {
  try {
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload?.name,
        email: payload?.email,
        phone: payload?.phone || payload?.mobile || payload?.mobileNumber || payload?.phoneNumber || null,
        subject: payload?.courseName || payload?.course || payload?.program || "Compiler Enquiry",
        message: payload?.message || null,
        source: "compiler",
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return {
        success: false,
        message: data?.error || "Failed to submit enquiry",
      };
    }

    return {
      success: true,
      data: data?.data ?? null,
    };
  } catch (error) {
    return {
      success: false,
      message: error?.message || "Network error while submitting enquiry",
    };
  }
}


import axios from "axios";

interface FilterRightholder {
  program_name: string;
  form_name: string;
  applicant_no: string;
  applicant_name: string;
  applicant_email: string;
  applicant_hp_no: string;
  status: string;
  created_at: string;
}

const statusMapping: Record<string, number> = {
  New: 9,
  Verified: 10,
  Revision: 11,
  Rejected: 12,
  Proposed: 13,
  Donated: 14,
};

export const fetchFilterRightholders = async (status: string | undefined, userId: string): Promise<FilterRightholder[]> => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_BACKEND_TWO}/api/cphp/application-list`;

  const params: any = { user_id: userId };

  // Jika status bukan All, ubah ke nomor
  if (status && status !== "All") {
    params.status = statusMapping[status];
  }

  try {
    const response = await axios.get(baseUrl, { params });
    return response.data.success ? response.data.data : [];
  } catch (error) {
    console.error("Error fetching applications", error);
    return [];
  }
};

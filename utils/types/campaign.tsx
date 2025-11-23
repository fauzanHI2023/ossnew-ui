export interface Campaign {
  id: number;
  campaign_name: string;
  campaign_img: string;
  campaign_category: string;
  minimum_donation: number;
  target_donation: number;
  donation_collected: number;
  core_program: string;
  campaign_description: string;
  support: number;
  slug: string;
}

export interface User {
  id: number;
  api_id: string;
  airline: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  date_of_hire: string;
  employee_number: string;
  status: string;
  station: string;
  password_digest?: string;
  member_type: string;
  token: string;
  state: string;
  state_changed_at: string;
  accept_terms_of_service: boolean;
  lang: string;
  identity_id: number;
  id90_user_id: number;
  organization_id: number;
  currency: string;
  tutorial_shown: string;
  utm_source: string;
  utm_medium: string;
  confirmation_token: string;
  confirmed_at: string;
  confirmation_sent_at: string;
  created_at: string;
  verification_email: string;
  affiliation: string;
  review_sent: boolean;
  app_downloaded: boolean;
  delete_requested: string;
  email_opt_out: string;
  profile_image_url: string;
}

export interface UserLogin {
  airline: string;
  username: string;
  password: string;
}

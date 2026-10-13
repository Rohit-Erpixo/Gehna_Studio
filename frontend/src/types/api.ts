export interface HealthCheckResponse {
  status: string;
  project: string;
  version: string;
  environment: string;
  ai_service_configured: boolean;
  storage_ready: boolean;
  details: Record<string, any>;
}

export interface UserCreditInfo {
  id: string;
  shop_name: string;
  owner_name: string;
  phone: string;
  credits: number;
  has_purchased: boolean;
  is_mock: boolean;
}

export interface CreditPackage {
  id: string;
  name: string;
  credits: number;
  price_inr: number;
  popular: boolean;
  badge: string;
}

export interface ImageJobCreatePayload {
  input_image_url: string;
  garment_type: string;
  style: string;
  output_format: string;
  custom_prompt?: string;
  title?: string;
}

export interface ImageJobResponse {
  id: string;
  status: string;
  garment_type: string;
  style: string;
  output_format: string;
  created_at: string;
}

export interface ImageJobStatus {
  id: string;
  status: 'generating' | 'done' | 'failed' | 'not_found';
  output_url?: string;
  input_image_url?: string;
  title?: string;
  warning?: string;
  error?: string;
}

export interface StudioProject {
  id: string;
  title: string;
  category: string;
  style: string;
  ratio: string;
  date: string;
  thumbnail_url: string;
  original_image_url?: string;
  status: string;
  versions?: number;
}

export interface StudioTemplate {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  image_url: string;
}

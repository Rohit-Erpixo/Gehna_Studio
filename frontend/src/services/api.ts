import {
  HealthCheckResponse,
  UserCreditInfo,
  CreditPackage,
  ImageJobCreatePayload,
  ImageJobResponse,
  ImageJobStatus,
  StudioProject,
  StudioTemplate
} from '../types/api';

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  'http://localhost:8000'
).replace(/\/$/, '');

/**
 * Resolves any image URL to a fully-qualified browser/webview-loadable URL.
 * - Leaves absolute URLs (http://, https://, data:, blob:) unchanged.
 * - Resolves backend-relative paths (/storage/..., /api/...) against API_BASE_URL.
 * - Leaves local frontend public assets (/assets/...) as frontend-relative.
 */
export function resolveImageUrl(url?: string | null): string {
  if (!url) return '';
  const trimmed = url.trim();
  if (trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
    return trimmed;
  }
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  if (trimmed.startsWith('/storage') || trimmed.startsWith('/api')) {
    return `${API_BASE_URL}${trimmed}`;
  }
  return trimmed;
}

class ApiClient {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.detail || `HTTP Error ${response.status}: ${response.statusText}`);
      }

      return (await response.json()) as T;
    } catch (err: any) {
      console.warn(`[ApiClient] Request to ${endpoint} failed:`, err.message);
      throw err;
    }
  }

  // 1. Health Endpoint
  async getHealth(): Promise<HealthCheckResponse> {
    return this.request<HealthCheckResponse>('/api/v1/health');
  }

  // 2. Credits & Shop Profile
  async getUserCredits(): Promise<UserCreditInfo> {
    try {
      return await this.request<UserCreditInfo>('/api/v1/credits/me');
    } catch {
      // Safe development mock fallback
      return {
        id: 'usr_dev_mock',
        shop_name: 'Shree Jewellers',
        owner_name: 'Rajesh Verma',
        phone: '+91 98201 54321',
        credits: 42,
        has_purchased: true,
        is_mock: true
      };
    }
  }

  // 3. Credit Bundles
  async getCreditPackages(): Promise<CreditPackage[]> {
    return this.request<CreditPackage[]>('/api/v1/credits/packages');
  }

  // 4. Upload Jewellery Photo
  async uploadPhoto(file: File): Promise<{ input_image_url: string; filename: string; status: string }> {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.baseUrl}/api/v1/jobs/upload`;
    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || 'Failed to upload photo');
    }

    return res.json();
  }

  // 5. Create Photoshoot Job
  async createImageJob(payload: ImageJobCreatePayload): Promise<ImageJobResponse> {
    return this.request<ImageJobResponse>('/api/v1/jobs', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // 6. Poll Status
  async getJobsStatus(ids: string[]): Promise<ImageJobStatus[]> {
    const query = encodeURIComponent(ids.join(','));
    return this.request<ImageJobStatus[]>(`/api/v1/jobs/status?ids=${query}`);
  }

  // 7. Recent Projects
  async getRecentProjects(): Promise<StudioProject[]> {
    try {
      return await this.request<StudioProject[]>('/api/v1/studio/projects');
    } catch {
      return [
        {
          id: 'proj_mock_1',
          title: 'Kundan Polki Bridal Choker',
          category: 'jewellery_set',
          style: 'Indian Bridal',
          ratio: '4:5',
          date: '2 hours ago',
          thumbnail_url: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg',
          original_image_url: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg',
          status: 'ready',
          versions: 3
        },
        {
          id: 'proj_mock_2',
          title: 'Solitaire Diamond Ring',
          category: 'ring',
          style: 'Macro',
          ratio: '1:1',
          date: 'Yesterday',
          thumbnail_url: '/assets/style_previews/ring/macro/preview.jpg',
          original_image_url: '/assets/style_previews/ring/macro/preview.jpg',
          status: 'ready',
          versions: 2
        }
      ];
    }
  }

  // 8. Save/Persist Approved Project
  async saveProject(project: Partial<StudioProject>): Promise<StudioProject> {
    return this.request<StudioProject>('/api/v1/studio/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  }

  // 9. Favourite Templates
  async getFavouriteTemplates(): Promise<StudioTemplate[]> {
    try {
      return await this.request<StudioTemplate[]>('/api/v1/studio/templates');
    } catch {
      return [
        {
          id: 'tmpl_bridal',
          name: 'Royal Indian Bridal',
          category: 'Bridal Wear',
          badge: 'Top Seller',
          description: 'Silk velvet background, warm royal glow, soft festive lighting.',
          image_url: '/assets/style_previews/jewellery_set/indian_bridal/preview.jpg'
        },
        {
          id: 'tmpl_studio',
          name: 'Obsidian Luxury Studio',
          category: 'Catalog',
          badge: 'E-Commerce',
          description: 'Dark reflective glass, specular gleam, 100% color-true gems.',
          image_url: '/assets/style_previews/jewellery_set/studio/preview.jpg'
        }
      ];
    }
  }
}

export const api = new ApiClient(API_BASE_URL);

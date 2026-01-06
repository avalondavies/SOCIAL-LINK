import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: LucideIcon;
  color: string; // Tailwind color class base (e.g., 'pink') or hex for custom handling
  gradient: string; // CSS gradient string
  label: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  bio: string[];
  avatarUrl: string;
}
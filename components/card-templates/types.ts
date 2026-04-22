export type CardTheme = {
  cardClass: string;
  roleClass: string;
  companyClass: string;
  bioClass: string;
  contactItemClass: string;
  socialPrimaryClass: string;
  socialSecondaryClass: string;
};

export type CardTemplateItem = {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  phone: string;
  email: string;
  location: string;
  avatarUrl: string;
  companyLogoUrl?: string;
  theme: CardTheme;
  cardColor?: string;
  fontFamily?: string;
};


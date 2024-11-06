export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

export type SocialLinksType = {
  [link: string]: string;
};


export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
};


type SkillType = {
  title: string;
  lottieAnimationFile: string;
  skills: React.ReactNode[] | string[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};

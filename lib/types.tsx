import { StaticImageData } from 'next/image';
import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type ProjectOptions = {
  id: number;
  title: string;
  description: string;
  code?: string;
  url: string;
  tags: string[];
  imageUrl: StaticImageData;
};

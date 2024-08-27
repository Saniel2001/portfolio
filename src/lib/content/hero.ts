import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Saniel Bhattarai.',
    tagline: 'I craft secure, visually compelling web experiences.',
    description:
    "With expertise in React.js, Next.js, TypeScript, TailwindCSS, and a strong focus on cybersecurity, I blend development and security to build robust, user-friendly applications.",
    specialText: 'Currently available for a job.',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};
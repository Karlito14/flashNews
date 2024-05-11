import businessPng from '@/public/assets/business.png';
import crimePng from '@/public/assets/crime.png';
import domesticPng from '@/public/assets/domestic.png';
import educationPng from '@/public/assets/education.png';
import entertainmentPng from '@/public/assets/entertainment.png';
import environmentPng from '@/public/assets/environment.png';
import foodPng from '@/public/assets/food.png';
import healthPng from '@/public/assets/health.png';
import otherPng from '@/public/assets/other.png';
import politicsPng from '@/public/assets/politics.png';
import sciencePng from '@/public/assets/science.png';
import sportsPng from '@/public/assets/sports.png';
import technologyPng from '@/public/assets/technology.png';
import topPng from '@/public/assets/top.png';
import tourismPng from '@/public/assets/tourism.png';
import worldPng from '@/public/assets/world.png';

export const CATEGORIES_ITEMS = {
    business: { src: businessPng, alt: 'Business logo', category: 'business' },
    crime: { src: crimePng, alt: 'Crime logo', category: 'crime' },
    domestic: { src: domesticPng, alt: 'Domestic logo', category: 'domestic' },
    education: { src: educationPng, alt: 'Education logo', category: 'education' },
    entertainment: { src: entertainmentPng, alt: 'Entertainment logo', category: 'entertainment' },
    environment: { src: environmentPng, alt: 'Environment logo', category: 'environment' },
    food: { src: foodPng, alt: 'Food logo', category: 'alimentation' },
    health: { src: healthPng, alt: 'Health logo', category: 'health' },
    other: { src: otherPng, alt: 'Other logo', category: 'autres' },
    science: { src: sciencePng, alt: 'Science logo', category: 'science' },
    sports: { src: sportsPng, alt: 'Sport logo', category: 'sports' },
    politics: { src: politicsPng, alt: 'Politics logo', category: 'politique' },
    technology: { src: technologyPng, alt: 'Technology logo', category: 'technology'},
    top: { src: topPng, alt: 'Top logo', category: 'top' },
    tourism: { src: tourismPng, alt: 'Tourism logo', category: 'tourism' },
    world: { src: worldPng, alt: 'World logo', category: 'world' },
};

export const NAV_ITEMS = [
    CATEGORIES_ITEMS.environment,
    CATEGORIES_ITEMS.technology,
    CATEGORIES_ITEMS.science,
    CATEGORIES_ITEMS.world,
];

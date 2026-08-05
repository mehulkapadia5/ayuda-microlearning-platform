export type Track = {
  id: string;
  title: string;
  shortTitle: string;
  emoji: string;
  description: string;
  lessonCount: number;
  totalMinutes: number;
  rating: number;
  priceInr: number;
  originalPriceInr: number;
  category: string;
  image?: string; // square cover image (public/tracks/<id>.png); falls back to emoji tile
  banner?: string; // wide landscape image (public/tracks/<id>-banner.png) for the course-detail hero
  lessons: Lesson[];
}

export type Lesson = {
  id: string;
  trackId: string;
  title: string;
  durationMinutes: number;
  status: 'completed' | 'in-progress' | 'locked' | 'free-preview';
  progressPercent?: number;
  keyTakeaways: string[];
  quiz: Quiz;
}

export type Quiz = {
  question: string;
  options: string[];
  correctIndex: number;
}

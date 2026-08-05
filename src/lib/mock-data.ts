import { Track } from './types';

export const tracks: Track[] = [
  {
    id: 'salary-negotiation',
    title: 'Salary Negotiation Masterclass',
    shortTitle: 'Salary Negotiation',
    emoji: '💰',
    category: 'Career',
    image: '/tracks/salary-negotiation.png',
    priceInr: 299,
    originalPriceInr: 999,
    lessonCount: 5,
    totalMinutes: 42,
    rating: 4.8,
    description: 'Stop leaving money on the table. Learn exactly what to say, when to say it, and how to get the CTC you deserve, every single time.',
    lessons: [
      {
        id: 'sn-1',
        trackId: 'salary-negotiation',
        title: 'Why Most People Fail at Salary Negotiation',
        durationMinutes: 7,
        status: 'completed',
        progressPercent: 100,
        keyTakeaways: [
          'Most candidates accept the first offer, that\'s the biggest mistake you can make',
          'Employers expect negotiation; it does NOT affect your offer if done professionally',
          'Know your market rate before any conversation, Naukri, AmbitionBox, LinkedIn Salary are your tools',
          'Your BATNA (Best Alternative) is your strongest card, always have another option in play',
        ],
        quiz: {
          question: 'What is the most common mistake candidates make during salary negotiation?',
          options: ['Asking for too much', 'Accepting the first offer without negotiating', 'Negotiating before receiving the written offer'],
          correctIndex: 1,
        },
      },
      {
        id: 'sn-2',
        trackId: 'salary-negotiation',
        title: 'Research Like a Pro: Know Your Market Value',
        durationMinutes: 9,
        status: 'completed',
        progressPercent: 100,
        keyTakeaways: [
          'Triangulate salary data from at least 3 sources, never rely on just one',
          'Factor in total compensation: base, variables, ESOP, health insurance, joining bonus',
          'Your city matters: Bangalore/Mumbai pay 15-20% more than tier-2 cities for the same role',
          'Build a comp range not a single number, negotiate from the top of your range',
        ],
        quiz: {
          question: 'Which tool is NOT commonly used for salary benchmarking in India?',
          options: ['AmbitionBox', 'Naukri salary insights', 'Google Trends'],
          correctIndex: 2,
        },
      },
      {
        id: 'sn-3',
        trackId: 'salary-negotiation',
        title: 'The Negotiation Conversation: Word-for-Word Scripts',
        durationMinutes: 10,
        status: 'in-progress',
        progressPercent: 58,
        keyTakeaways: [
          'Never give a number first, always ask what budget they have in mind',
          'Use silence as a tool: after stating your number, stop talking immediately',
          'Anchor high: start 20-25% above your target so you have room to move',
          'If they say \'this is our best offer\', it usually isn\'t. Counter with empathy + data',
        ],
        quiz: {
          question: 'What should you do immediately after stating your salary expectation?',
          options: ['Justify your number with data', 'Stay silent and let them respond', 'Ask if they can do better'],
          correctIndex: 1,
        },
      },
      {
        id: 'sn-4',
        trackId: 'salary-negotiation',
        title: 'Handling Pushback and Counter-Offers',
        durationMinutes: 8,
        status: 'locked',
        keyTakeaways: [
          'When they pushback, validate first, \'I understand budget constraints\'',
          'Offer trade-offs: if base can\'t move, ask for joining bonus, extra leaves, or WFH flexibility',
          'Counter-offer from your current employer is a negotiation tool, not a commitment',
          'Always get the final offer in writing before resigning',
        ],
        quiz: {
          question: 'If a company can\'t increase base salary, what should you negotiate next?',
          options: ['Nothing, accept the offer', 'Joining bonus, extra leaves, or remote work flexibility', 'Ask to revisit in 6 months'],
          correctIndex: 1,
        },
      },
      {
        id: 'sn-5',
        trackId: 'salary-negotiation',
        title: 'Appraisal Season: Negotiating Internally',
        durationMinutes: 8,
        status: 'locked',
        keyTakeaways: [
          'Document your wins throughout the year, don\'t wait for appraisal season',
          'Frame asks in business impact: \'I delivered X which contributed to Y revenue\'',
          'Know your internal band and where you sit, HR usually won\'t tell you unless you ask',
          'Timing matters: initiate the conversation 2 months before the formal cycle',
        ],
        quiz: {
          question: 'When is the best time to start the appraisal negotiation conversation?',
          options: ['During the formal appraisal meeting', '2 months before the formal cycle', 'After getting the increment letter'],
          correctIndex: 1,
        },
      },
    ],
  },
  {
    id: 'managing-up',
    title: 'Managing Your Manager',
    shortTitle: 'Managing Up',
    emoji: '🧠',
    category: 'Leadership',
    image: '/tracks/managing-up.png',
    banner: '/tracks/managing-up-banner.png',
    priceInr: 299,
    originalPriceInr: 799,
    lessonCount: 4,
    totalMinutes: 36,
    rating: 4.7,
    description: 'Your relationship with your manager determines your career trajectory. Learn how to communicate upward, manage expectations, and become the person they fight to retain.',
    lessons: [
      {
        id: 'mu-1',
        trackId: 'managing-up',
        title: 'The Manager-Employee Relationship Decoded',
        durationMinutes: 8,
        status: 'free-preview',
        keyTakeaways: [
          'Your manager\'s success is tied to yours, align your goals to their priorities',
          'Most managers are not mind-readers: over-communicate your progress and blockers',
          'Understand your manager\'s working style before trying to influence them',
          'Be the employee who brings solutions, not just problems',
        ],
        quiz: {
          question: 'What is the most effective way to get your manager\'s support?',
          options: ['Wait for them to ask for updates', 'Align your work to their key priorities and communicate proactively', 'Always agree with their decisions'],
          correctIndex: 1,
        },
      },
      {
        id: 'mu-2',
        trackId: 'managing-up',
        title: 'Communication Cadences That Build Trust',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'Weekly status updates prevent surprises, your manager hates surprises more than bad news',
          'Learn their preferred communication channel: some want Slack pings, others prefer email summaries',
          'Document decisions in writing after verbal conversations, this protects both of you',
          'Proactive blockers communication early gives them time to help; last-minute creates panic',
        ],
        quiz: {
          question: 'What is the best way to share a project blocker with your manager?',
          options: ['Wait until the deadline is missed', 'Inform them early with a proposed solution', 'Handle it yourself without telling them'],
          correctIndex: 1,
        },
      },
      {
        id: 'mu-3',
        trackId: 'managing-up',
        title: 'Handling Micromanagement Without Burning Bridges',
        durationMinutes: 10,
        status: 'locked',
        keyTakeaways: [
          'Micromanagement is often a symptom of a trust deficit, build trust with consistent delivery',
          'Propose structured check-ins proactively: it reduces their anxiety without feeling supervised',
          'Document and share your work plan upfront, visibility reduces the need for them to ask',
          'If it persists, have a direct but empathetic conversation about autonomy and ownership',
        ],
        quiz: {
          question: 'What is usually the root cause of micromanagement?',
          options: ['The manager enjoys controlling people', 'A trust deficit that hasn\'t been addressed', 'Company policy requiring close supervision'],
          correctIndex: 1,
        },
      },
      {
        id: 'mu-4',
        trackId: 'managing-up',
        title: 'Navigating Org Politics Upward',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'Understand who your manager needs to impress, align your wins to their stakeholders',
          'Make your manager look good publicly; give them credit they can share upward',
          'Timing your asks matters: never ask for favors when they are under pressure',
          'Build allies in adjacent teams, your manager\'s peers can advocate for you too',
        ],
        quiz: {
          question: 'When is the worst time to ask your manager for a favor or raise?',
          options: ['During a quarterly review', 'When they are under pressure or dealing with a crisis', 'After a successful project delivery'],
          correctIndex: 1,
        },
      },
    ],
  },
  {
    id: 'toxic-workplace',
    title: 'Toxic Workplace Survival Kit',
    shortTitle: 'Toxic Workplace',
    emoji: '🔥',
    category: 'Wellbeing',
    image: '/tracks/toxic-workplace.png',
    banner: '/tracks/toxic-workplace-banner.png',
    priceInr: 349,
    originalPriceInr: 999,
    lessonCount: 6,
    totalMinutes: 54,
    rating: 4.9,
    description: 'Gaslighting bosses, credit-stealers, passive-aggressive teammates. Learn to identify, document, and protect yourself from toxic work dynamics, while building your exit plan.',
    lessons: [
      {
        id: 'tw-1',
        trackId: 'toxic-workplace',
        title: 'Is It Actually Toxic? Recognizing the Real Signs',
        durationMinutes: 8,
        status: 'free-preview',
        keyTakeaways: [
          'Not all difficult workplaces are toxic, learn to distinguish between hard work and harm',
          'Key red flags: consistent gaslighting, public humiliation, taking credit for others\' work',
          'Track patterns over time, one bad week is not toxicity; sustained behaviour over months is',
          'Your physical health signals matter: Sunday anxiety, insomnia, and constant dread are signs',
        ],
        quiz: {
          question: 'What is the key difference between a challenging workplace and a toxic one?',
          options: ['Challenging workplaces have long hours', 'Toxic workplaces have sustained harmful behaviors that damage your wellbeing', 'Toxic workplaces pay less'],
          correctIndex: 1,
        },
      },
      {
        id: 'tw-2',
        trackId: 'toxic-workplace',
        title: 'Documenting Everything: Your Paper Trail Strategy',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'Document every incident in writing within 24 hours, include date, time, witnesses, exact words',
          'Always forward verbal commitments to email: \'As discussed, you mentioned X\'',
          'Keep copies of performance reviews, appreciations, and project credits in personal storage',
          'Your documentation is evidence if you ever need HR, legal, or a tribunal',
        ],
        quiz: {
          question: 'Why should you document workplace incidents within 24 hours?',
          options: ['To report them immediately to HR', 'Memory fades and documentation becomes more credible when done close to the event', 'Company policy requires it'],
          correctIndex: 1,
        },
      },
      {
        id: 'tw-3',
        trackId: 'toxic-workplace',
        title: 'Setting Boundaries Without Getting Fired',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'Boundaries are professional, not personal, frame them in terms of output, not feelings',
          'Use \'I\' statements: \'I work best when I have clarity on priorities\' not \'You never explain things\'',
          'Start small: enforce one boundary consistently before adding more',
          'Know your non-negotiables vs preferences, not every hill is worth dying on',
        ],
        quiz: {
          question: 'How should you frame a boundary at work to make it most effective?',
          options: ['As a personal preference rooted in your feelings', 'In terms of professional output and effectiveness', 'As a complaint to HR'],
          correctIndex: 1,
        },
      },
      {
        id: 'tw-4',
        trackId: 'toxic-workplace',
        title: 'When Your Colleague Steals Your Credit',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'Always cc relevant stakeholders when sharing ideas or work output, creates a timestamp',
          'In meetings, use \'As I mentioned in my email...\' to reclaim ownership gracefully',
          'Build direct relationships with senior leaders so your contributions are visible independently',
          'Address it directly once, calmly: \'I noticed X was attributed to you, I wanted to clarify my role\'',
        ],
        quiz: {
          question: 'What is the most effective way to prevent credit-stealing in the long term?',
          options: ['Confront your colleague publicly in meetings', 'Build visibility with senior stakeholders independent of your immediate team', 'Stop sharing ideas in meetings'],
          correctIndex: 1,
        },
      },
      {
        id: 'tw-5',
        trackId: 'toxic-workplace',
        title: 'Managing Stress and Protecting Your Mental Health',
        durationMinutes: 10,
        status: 'locked',
        keyTakeaways: [
          'Compartmentalise: create physical and temporal boundaries between work and personal life',
          'Name the emotion: \'I am anxious about this\' is more actionable than a vague dread',
          'Identify your personal early-warning signs and build a response ritual',
          'Therapy is not weakness, it is a performance tool used by the highest achievers',
        ],
        quiz: {
          question: 'What is compartmentalisation in the context of work stress?',
          options: ['Ignoring your work problems completely', 'Creating clear boundaries between work time/space and personal life', 'Separating your team into different groups'],
          correctIndex: 1,
        },
      },
      {
        id: 'tw-6',
        trackId: 'toxic-workplace',
        title: 'Building Your Exit Plan While Still Employed',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'Start your exit plan before you desperately need one, desperation leads to bad decisions',
          'Update your resume, LinkedIn, and portfolio quarterly, not just when job-hunting',
          'Activate your network quietly: \'I\'m exploring opportunities\' signals interest without urgency',
          'Save 3-6 months of expenses before resigning from a toxic environment, financial cushion = negotiating power',
        ],
        quiz: {
          question: 'Why should you start your exit plan before you urgently need a new job?',
          options: ['It looks better to recruiters', 'Desperation leads to accepting poor offers; planning gives you negotiating power', 'Your current employer requires notice in advance'],
          correctIndex: 1,
        },
      },
    ],
  },
  {
    id: 'first-90-days',
    title: 'First 90 Days Playbook',
    shortTitle: 'First 90 Days',
    emoji: '🚀',
    category: 'Career',
    image: '/tracks/first-90-days.png',
    banner: '/tracks/first-90-days-banner.png',
    priceInr: 299,
    originalPriceInr: 799,
    lessonCount: 5,
    totalMinutes: 45,
    rating: 4.6,
    description: 'Your first 90 days set the tone for your entire tenure. Learn the exact playbook to build credibility, deliver early wins, and position yourself for fast growth.',
    lessons: [
      {
        id: 'fd-1',
        trackId: 'first-90-days',
        title: 'Day 0: Before You Even Join',
        durationMinutes: 8,
        status: 'free-preview',
        keyTakeaways: [
          'Research the company\'s recent news, product launches, and earnings calls before day one',
          'Connect with future colleagues on LinkedIn before joining, names and faces matter on day one',
          'Prepare your 30-60-90 day goals framework, bring it to your first manager meeting',
          'Sort your documents, PF transfer, and IT setup questions in advance to hit the ground running',
        ],
        quiz: {
          question: 'What is the most impactful thing to do before joining a new company?',
          options: ['Buy new formal clothes', 'Research the company and prepare a 30-60-90 day plan', 'Inform your social media followers'],
          correctIndex: 1,
        },
      },
      {
        id: 'fd-2',
        trackId: 'first-90-days',
        title: 'Week 1: Listen More Than You Speak',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'Your first week is for observing, not solving, resist the urge to fix things immediately',
          'Map the informal power structure: who do people go to when they need things done?',
          'Take notes obsessively, you will never again have the fresh outsider perspective you have now',
          'Ask \'What does success look like in this role in 90 days?\' in your first manager meeting',
        ],
        quiz: {
          question: 'What is the biggest mistake new joiners make in week one?',
          options: ['Asking too many questions', 'Trying to solve problems before fully understanding the context', 'Not attending enough meetings'],
          correctIndex: 1,
        },
      },
      {
        id: 'fd-3',
        trackId: 'first-90-days',
        title: 'Days 30-60: Building Credibility Through Quick Wins',
        durationMinutes: 10,
        status: 'locked',
        keyTakeaways: [
          'Identify one high-visibility problem you can solve completely in under 30 days',
          'Volunteer for cross-functional work, it builds allies and visibility simultaneously',
          'Document everything you learn and share it, it signals intelligence and generosity',
          'Ask for feedback at 30 days: \'How am I doing so far?\' shows maturity and self-awareness',
        ],
        quiz: {
          question: 'What is the primary purpose of a quick win in your first 30 days?',
          options: ['To impress the CEO', 'To build credibility and signal competence to your new team', 'To get a faster appraisal'],
          correctIndex: 1,
        },
      },
      {
        id: 'fd-4',
        trackId: 'first-90-days',
        title: 'Days 60-90: Owning Your Narrative',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'By day 60, you should have a clear POV on what is working and what needs change',
          'Present your 90-day learning summary to your manager proactively, it shows initiative',
          'Start identifying stretch opportunities: projects outside your job description that build new skills',
          'Your reputation is being formed right now, be intentional about what you are known for',
        ],
        quiz: {
          question: 'What should you do proactively at the 60-day mark?',
          options: ['Ask for a raise', 'Share a 90-day learning summary and your observations with your manager', 'Request a team change'],
          correctIndex: 1,
        },
      },
      {
        id: 'fd-5',
        trackId: 'first-90-days',
        title: 'Building Relationships That Accelerate Your Growth',
        durationMinutes: 9,
        status: 'locked',
        keyTakeaways: [
          'Identify a mentor in the organisation within your first 30 days, someone 2 levels above you',
          'Build peer relationships across functions: your future depends on people outside your team',
          'Show genuine curiosity about others\' work, people remember those who ask about them',
          'Never gossip or complain about your previous employer, it is a fast track to being distrusted',
        ],
        quiz: {
          question: 'Why is it important to build relationships outside your immediate team?',
          options: ['For social reasons only', 'Cross-functional allies accelerate your visibility and open doors to new opportunities', 'To have more people at lunch'],
          correctIndex: 1,
        },
      },
    ],
  },
];

export function getTrack(id: string): Track | undefined {
  return tracks.find(t => t.id === id);
}

export function getLesson(trackId: string, lessonId: string): import('./types').Lesson | undefined {
  return getTrack(trackId)?.lessons.find(l => l.id === lessonId);
}

export function getTrackProgress(track: Track) {
  const completed = track.lessons.filter(l => l.status === 'completed').length;
  const inProgress = track.lessons.some(l => l.status === 'in-progress');
  const percent = Math.round((completed / track.lessonCount) * 100);
  const started = completed > 0 || inProgress;
  return { completed, total: track.lessonCount, percent, started, finished: completed === track.lessonCount };
}

// The next lesson a learner should open: in-progress first, else first not-completed.
export function getResumeLesson(track: Track) {
  return (
    track.lessons.find(l => l.status === 'in-progress') ||
    track.lessons.find(l => l.status !== 'completed') ||
    track.lessons[0]
  );
}

export const enrolledTracks = tracks.filter(t => getTrackProgress(t).started);

export const categories = ['All', ...Array.from(new Set(tracks.map(t => t.category)))];

export type ClassSlot = {
  id: string;
  day: string;
  start: string;
  end: string;
  subject: string;
  room: string;
};

export type Topic = {
  id: string;
  subject: string;
  name: string;
  status: "new" | "weak" | "ok";
};

export type CheckIn = {
  date: string;
  subject: string;
  topicsTaught: string[];
  confidence: 1 | 2 | 3 | 4 | 5;
};

export type Deadline = {
  title: string;
  date: string;
};

export type Digest = {
  summary: string;
  deadlines: Deadline[];
};

export type StudyPlan = {
  nextClass: ClassSlot | null;
  reviseTopics: Topic[];
  practice: string[];
};

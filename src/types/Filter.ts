export const Filter = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export type FilterType = (typeof Filter)[keyof typeof Filter];

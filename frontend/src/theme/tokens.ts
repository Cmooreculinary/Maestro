export const trenchColors = {
  obsidian: '#0D0D0D',
  fireOrange: '#EC5B13',
  burntOrange: '#BF5700',
  deepGold: '#C9A227',
  surface: '#161616',
  border: '#262626',
  textPrimary: '#F5F1EA',
  textMuted: '#9A948B',
  healthGreen: '#3E8E5A',
} as const

export type TrenchColor = keyof typeof trenchColors

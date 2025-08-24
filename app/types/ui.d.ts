/**
 * UI & Common Types
 */

export interface IndexSignature {
  [key: string]: string
}

export interface Menu {
  title: string
  url: string
  menu_type: string
  icon?: string
}

export interface Colors {
  color: string
  percent: number
}

export interface ProgressData {
  emoji: string
  percent: number
  title: string
}

export interface AccordionItem {
  icon: string
  label: string
  slot: string
  description: string[] | string
}
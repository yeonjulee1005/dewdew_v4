/**
 * Portfolio Domain Types
 */
import type { BaseEntity, MultilingualContent, OrderedItem } from './utils'

export interface PortfolioType extends OrderedItem {
  title: MultilingualContent
  description: MultilingualContent
  url: string
  image: string
  dynamic_thumbnail: string
  thumbnail: string
  alt: string
  deleted: boolean
}

export interface SkillsImage extends OrderedItem {
  title: string
  url: string
  deleted: boolean
}

export interface Article extends Partial<BaseEntity> {
  title?: string
  desc?: string
  raw_article?: string
  like: number
}

export interface CreateComment {
  name: string
  message: string
  password: string
}

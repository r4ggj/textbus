import { Component, ComponentLiteral } from './component'

export interface InsertAction {
  type: 'insert'
  data: any[]
  ref: any[] | null
}

export interface RetainAction {
  type: 'retain'
  offset: number
  formats?: Record<string, any>
}

export interface DeleteAction {
  type: 'delete'
  count: number
}

export interface PropDeleteAction {
  type: 'propDelete'
  key: string
}

export interface PropSetAction {
  type: 'propSet'
  key: string
  value: any
  ref: any
}

export interface AttrDeleteAction {
  type: 'attrDelete'
  name: string
}

export interface AttrSetAction {
  type: 'attrSet'
  name: string
  value: any
}

export interface ContentInsertAction {
  type: 'contentInsert'
  content: string | ComponentLiteral
  ref: string | Component
  formats?: Record<string, any>
}

export interface SetIndexAction {
  type: 'setIndex'
  index: number
  value: any
  ref: any
  afterLength: number
}

export type Action = InsertAction |
  RetainAction |
  DeleteAction |
  ContentInsertAction |
  PropDeleteAction |
  PropSetAction |
  AttrDeleteAction |
  AttrSetAction |
  SetIndexAction

export interface Operation {
  paths: Array<number | string>
  apply: Action[]
  unApply: Action[]
  source?: Component<any>
  irrevocable?: boolean
}

export interface State {
  [key: string]: any
}

export type DestroyCallbacks = Array<() => void>

export interface Key {
  match: RegExp | ((key: string, agent: RawKeyAgent) => boolean)
  name: string | string[]
}

export interface Keymap {
  modKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  key: string | string[] | Key;
}

export interface Shortcut {
  keymap: Keymap

  action(key: string): boolean | void
}

export interface RawKeyAgent {
  key: string
  code: string
  /**
   * @deprecated
   */
  keyCode: number
}

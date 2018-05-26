import {
  FileBox,
}             from 'file-box'

import {
  Contact,
}           from './contact'
import {
  Room,
}           from './room'

export enum MessageDirection {
  // MO,
  MT,
}

export enum MessageType {
  Unknown = 0,
  Attachment,
  Audio,
  Emoticon,
  Image,
  Text,
  Video,
}

/**
 *
 * MessageMOOptions
 *
 *
 */
export interface MessageMOOptionsText {
  text : string,
}

export interface MessageMOOptionsFile {
  file : FileBox,
}

export interface MessageMOOptionsRoom {
  room : Room,
  to?  : null | Contact,
}

export interface MessageMOOptionsTo {
  room? : null | Room,
  to    : Contact,
}

export type MessageMOOptions = (
    MessageMOOptionsText
  | MessageMOOptionsFile
 ) & (
  | MessageMOOptionsRoom
  | MessageMOOptionsTo
)

/**
 *
 * MessagePayload
 *
 */
export interface MessagePayload {
  type      : MessageType,
  text?     : string,
  file?     : FileBox,
  direction : MessageDirection,
  fromId?   : string,
  date      : Date,
  toId?     : null | string,      // if to is not set, then room must be set
  roomId?   : null | string,
}

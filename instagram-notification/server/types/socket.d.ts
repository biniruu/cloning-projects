export interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
  'user-list': (f: unknown) => void
  getNotification: ({ senderName, type }: GetNotification) => void
}

interface GetNotification {
  senderName: string
  type: string
}

export interface ClientToServerEvents {
  hello: () => void
  userList: () => void
  sendNotification: ({ senderName, receiverName, type }: SendNotification) => void
}

interface SendNotification {
  senderName: string
  receiverName: string
  type: string
}

export interface InterServerEvents {
  ping: () => void
}

export interface SocketData {
  name: string
  age: number
  userName?: string
}

export type Omit<A, B extends keyof A> = Pick<A, ({
  [K in keyof A]: K
} & {
  [K in B]: never
})[keyof A]>
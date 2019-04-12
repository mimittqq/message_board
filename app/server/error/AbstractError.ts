/**
 * error 类
 * 要有一个输出错误方法
 * 一个错误类型, 对应 code 列表
 */
export type ErrorMapType = { [key:string]: string }

export class AbstractError extends Error {
  private map!: ErrorMapType;
  private type!:string;
}
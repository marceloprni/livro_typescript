import { Result } from "../infra/result";
import { News } from "../models/news";
import { IService } from "./iService";
import { Result } from "../infra/result";

export interface INewsService extends IService<News> {

    get(id: string): any;

    getAll(page: number, qtd: number): Promise<Result>;
}

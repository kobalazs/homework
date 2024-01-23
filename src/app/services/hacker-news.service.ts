import Axios from "axios";
import { Item } from "../models/item";
import { AxiosCacheInstance, setupCache } from "axios-cache-interceptor";

export class HackerNewsService {
  constructor(private _axios: AxiosCacheInstance, private _baseUrl: string) {}

  public async getItem(id: number): Promise<Item | undefined> {
    try {
      const url = `${this._baseUrl}/item/${id}.json`;
      const response = await this._axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public async getNewItemIds(): Promise<Array<number> | undefined> {
    try {
      const url = `${this._baseUrl}/newstories.json`;
      const response = await this._axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

// In-memory cache with TTL=60s. Hardcoded for demo purposes.
const axios = setupCache(Axios.create(), {
  headerInterpreter: () => 60 * 1000,
});
const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const serviceInstance = new HackerNewsService(axios, baseUrl);

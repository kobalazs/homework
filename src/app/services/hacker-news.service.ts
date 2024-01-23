import Axios from "axios";
import { Item } from "../models/item";
import { setupCache } from "axios-cache-interceptor";

// In-memory cache with TTL=60s. Hardcoded for demo purposes.
const axios = setupCache(Axios.create(), {
  headerInterpreter: () => 60 * 1000,
});

export class HackerNewsService {
  private static _baseUrl = "https://hacker-news.firebaseio.com/v0/";

  public static async getItem(id: number): Promise<Item | undefined> {
    try {
      const url = `${this._baseUrl}/item/${id}.json`;
      const response = await axios.get(url);
      console.log(response.cached);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public static async getNewItemIds(): Promise<Array<number> | undefined> {
    try {
      const url = `${this._baseUrl}/newstories.json`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

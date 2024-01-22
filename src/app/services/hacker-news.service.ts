import axios from "axios";
import { Item } from "../models/item";

export class HackerNewsService {
  private static _baseUrl = "https://hacker-news.firebaseio.com/v0/";

  public static async getItem(id: number): Promise<Item | undefined> {
    try {
      const url = `${this._baseUrl}/item/${id}.json`;
      const response = await axios.get(url);
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

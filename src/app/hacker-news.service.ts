import axios from "axios";

export class HackerNewsService {
  private _baseUrl = "https://hacker-news.firebaseio.com/v0/";

  public async getItem(id: number): Promise<Array<number> | undefined> {
    try {
      const url = `${this._baseUrl}/item/${id}.json`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public async getNewItemIds(): Promise<Array<number> | undefined> {
    try {
      const url = `${this._baseUrl}/newstories.json`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

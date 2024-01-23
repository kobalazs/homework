import { HackerNewsService } from "./hacker-news.service";
import axios from "axios";
import { AxiosCacheInstance } from "axios-cache-interceptor";

jest.mock("axios");
jest.mock("axios-cache-interceptor");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("HackerNewsService", () => {
  const service = new HackerNewsService(
    mockedAxios as unknown as AxiosCacheInstance,
    "https://hacker-news.firebaseio.com/v0"
  );

  beforeAll(() => {
    jest.spyOn(global.console, "error").mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    (global.console.error as unknown as jest.SpyInstance).mockRestore();
  });

  it("should fetch item", async () => {
    const item = { id: 1, by: "user", title: "title", url: "url" };
    mockedAxios.get.mockResolvedValueOnce({ data: item });

    const result = await service.getItem(1);

    expect(result).toEqual(item);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://hacker-news.firebaseio.com/v0/item/1.json"
    );
    expect(global.console.error).not.toHaveBeenCalled();
  });

  it("should fetch new item ids", async () => {
    const ids = [1, 2, 3];
    mockedAxios.get.mockResolvedValueOnce({ data: ids });

    const result = await service.getNewItemIds();

    expect(result).toEqual(ids);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    expect(global.console.error).not.toHaveBeenCalled();
  });

  it("should handle error when fetching item", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));

    expect(await service.getItem(1)).toBeUndefined();
    expect(global.console.error).toHaveBeenCalledWith(
      new Error("Network error")
    );
  });

  it("should handle error when fetching new item ids", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));

    expect(await service.getNewItemIds()).toBeUndefined();
    expect(global.console.error).toHaveBeenCalledWith(
      new Error("Network error")
    );
  });
});

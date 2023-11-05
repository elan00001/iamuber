import { createUser } from "./user.service";
import dataSource from "../utils/createConnection";
import { User } from "../entity/user.entity";

// Mock dataSource.getRepository
jest.mock("../utils/createConnection", () => ({
  getRepository: jest.fn(),
}));

describe("createUser function", () => {
  it("should create a user successfully", async () => {

    const username = "testuser";
    const email = "test@example.com";
    const mockSave = jest.fn().mockResolvedValue(undefined);
    (dataSource.getRepository as jest.Mock).mockReturnValue({
      save: mockSave,
    });

    await createUser(username, email);

    expect(dataSource.getRepository).toHaveBeenCalledWith(User);
    expect(mockSave).toHaveBeenCalledWith({
      username,
      email,
      points: 0,
    });
  });

  it("should throw an error when saving the user fails", async () => {

    const username = "testuser";
    const email = "test@example.com";
    const error = new Error();
    const mockSave = jest.fn().mockRejectedValue(error); // Mock save to reject with an error
    (dataSource.getRepository as jest.Mock).mockReturnValue({
      save: mockSave,
    });

    return expect(createUser(username, email)).rejects.toThrow(error);
  });
});

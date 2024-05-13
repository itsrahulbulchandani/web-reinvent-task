import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { loginUser } from '../api';

describe('API Service', () => {
  it('should authenticate a user successfully', async () => {
    const mock = new MockAdapter(axios);
    const mockUserData = { email: 'eve.holt@reqres.in', password: 'pistol' };
    const mockResponse = { token: 'QpwL5tke4Pnpja7X4' };
    mock.onPost('https://reqres.in/api/login', mockUserData).reply(200, mockResponse);

    const response = await loginUser(mockUserData.email, mockUserData.password);

    expect(response.data).toEqual(mockResponse);
  });

  it('should fail to authenticate a user with wrong credentials', async () => {
    const mock = new MockAdapter(axios);
    const mockUserData = { email: 'test@example.com', password: 'wrongpassword' };
    mock.onPost('https://reqres.in/api/login', mockUserData).reply(400);

    await expect(loginUser(mockUserData.email, mockUserData.password)).rejects.toThrow();
  });
});

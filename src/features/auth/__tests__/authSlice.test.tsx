import authReducer, { setCredentials, logout } from '../authSlice';

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual({
      token: null,
      isAuthenticated: false
    });
  });

  it('should handle setAuthToken', () => {
    const actual = authReducer(undefined, setCredentials({token:'12345'}));
    expect(actual.token).toEqual('12345');
  });

  it('should handle clearAuthToken', () => {
    const initialState = { token: '12345',isAuthenticated:true };
    const actual = authReducer(initialState, logout());
    expect(actual.token).toBeNull();
  });
});

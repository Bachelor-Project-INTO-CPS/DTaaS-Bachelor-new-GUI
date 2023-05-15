import { act, renderHook } from '@testing-library/react';
import useUserData from 'store/UserAccess';
import { wrapWithInitialState } from '../testUtils';

describe('UserAccess', () => {
  const defaultRender = wrapWithInitialState();
  const testUserName = 'testUser';

  it('should update user correctly with setUser', () => {
    const { result } = renderHook(() => useUserData(), {
      wrapper: defaultRender,
    });

    act(() => {
      result.current.actions.setUser(testUserName);
    });

    expect(result.current.state.userName).toEqual(testUserName);
  });
});

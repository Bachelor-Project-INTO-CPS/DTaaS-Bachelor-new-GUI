import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from 'route/auth/Signin';
import AuthContext from 'components/AuthContext';
import { wrapWithInitialState } from '../testUtils';

describe('SignIn', () => {
  it('renders the SignIn form', () => {
    render(
      <AuthContext.Provider
        value={{
          isLoggedIn: false,
          logIn: () => undefined,
          logOut: () => undefined,
        }}
      >
        <Router>
          <SignIn />
        </Router>
      </AuthContext.Provider>,
      { wrapper: wrapWithInitialState() }
    );
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Sign In/i })
    ).toBeInTheDocument();
  });

  // Add more tests for form submission and redirection as needed
});

export const signIn = async (email: string, password: string) => {
    const storedPassword = localStorage.getItem(`user-${email}`);
    if (storedPassword === password) {
      localStorage.setItem('currentUser', email);
      return true;
    } else {
      return false;
    }
  };
  
  export const signUp = async (email: string, password: string) => {
    localStorage.setItem(`user-${email}`, password);
    localStorage.setItem('currentUser', email);
    return true;
  };
  
  export const signOut = async () => {
    localStorage.removeItem('currentUser');
  };
  
  export const isAuthenticated = async () => {
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
  };
  
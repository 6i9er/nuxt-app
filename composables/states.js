export const useCart = () => {
    return useState(() => []);
};

export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));

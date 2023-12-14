export const useCart = () => {
    return useState(() => []);
};

export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));

  export const usePageVisitCount = () => useState( () => 0);
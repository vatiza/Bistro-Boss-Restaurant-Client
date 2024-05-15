import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    refetch,
    data: menu = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      return res.json();
    },
  });
  return [menu, refetch, loading];
};

export default useMenu;

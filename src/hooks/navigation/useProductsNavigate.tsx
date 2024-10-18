import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useProductsNavigate = () => {
  const navigate = useNavigate();

  const navigateToProducts = useCallback(
    (params: Record<string, string>) => {
      const searchParams = new URLSearchParams(params).toString();
      navigate(`/products/${searchParams}`);
    },
    [navigate]
  );
  return navigateToProducts;
};

export default useProductsNavigate;

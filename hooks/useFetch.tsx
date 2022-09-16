import { useEffect, useState } from 'react';

export function useFetch<T>(url: string): {
  isLoading: boolean;
  hasErrors: boolean;
  data: T | undefined;
} {
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrors, setHasErrors] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (mounted) {
          setIsLoading(false);
          setData(response);
        }
      })
      .catch(() => {
        setIsLoading(false);
        setHasErrors(true);
      });

    return () => {
      setMounted(false);
    };
  });

  return { isLoading, hasErrors, data };
}

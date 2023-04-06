import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Books {
  id: number;
  title: string;
  authors: string;
}

interface FetchBooksResponse {
  results: Books[];
}

const useBooks = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchBooksResponse>("/books")
      .then((res) => {
        setLoading(false);
        setBooks(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return controller.abort();
  }, []);

  return { books, error, isLoading };
};

export default useBooks;

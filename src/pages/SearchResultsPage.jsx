import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Container, Typography } from "@mui/material";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Search error:", err);
        setError("Something went wrongx.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (!query) return <Typography>No search query provided.</Typography>;
  if (loading) return <Spinner />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h5">Results for "{query}"</Typography>
      {results.length === 0 ? (
        <Typography>No results found.</Typography>
      ) : (
        <List>
          {results.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} secondary={item.description} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default SearchResultsPage;

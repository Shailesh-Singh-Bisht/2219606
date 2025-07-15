import { useState } from "react";
import Logs from "./middleware";
import "./App.css";

function App() {
  const [valid, setValid] = useState(0);
  const [url, setURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const validRegex = /^[0-9]+$/;
    const urlRegex = /https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?/;

    if (!validRegex.test(valid)) {
      Logs("frontend", "error", "api", "Invalid Validity Format");
      setError("Invalid Validity Format");
      return;
    }

    if (!urlRegex.test(url)) {
      Logs("frontend", "error", "api", "Invalid URL");
      setError("Invalid URL");
      return;
    }

    setLoading(true);
    // Simulate URL shortening
    try {
      // Replace this with actual API call if available
      const fakeShortUrl = `https://short.url/${Math.random()
        .toString(36)
        .substr(2, 6)}`;
      setTimeout(() => {
        setShortUrl(fakeShortUrl);
        setLoading(false);
      }, 1000);
    } catch {
      setError("Failed to shorten URL");
      setLoading(false);
    }
  }

  return (
    <>
      <header id="header">URL Shortener</header>
      <a href="./statistics.jsx">Click here to see the statstics Page</a>
      <div id="container">
        <p>Enter the URL to shorten it</p>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            placeholder="Enter URL"
          />
          <label htmlFor="time">Enter a validity time period</label>
          <input
            type="text"
            id="time"
            value={valid}
            onChange={(e) => setValid(e.target.value)}
            placeholder="Validity in days"
          />
          <button id="submit" type="submit">
            Click to Get ShortURL
          </button>
        </form>
        {error && <p id="error">{error}</p>}
        {loading && <div id="loading">Loading...</div>}
        {shortUrl && !loading && (
          <div id="result">
            <p>
              Your New Short URL:{" "}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </p>
            <p>Valid till: {valid} days</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import Logs from "./middleware";
import "./App.css";

function App() {
  const [valid, setValid] = useState();
  const [url, setURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [urlMap, setUrlMap] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const validRegex = /^[0-9]+$/;
    const urlRegex = /https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?/;

    let validityValue = valid === "" ? "30" : valid;

    if (!validRegex.test(validityValue)) {
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
    try {
      const fakeShortUrl = `https://short.url/${Math.random()
        .toString(36)
        .substr(2, 6)}`;
      setTimeout(() => {
        setShortUrl(fakeShortUrl);
        setUrlMap((prev) => ({ ...prev, [fakeShortUrl]: url }));
        setValid(validityValue);
        setLoading(false);
      }, 1000);
    } catch {
      setError("Failed to shorten URL");
      setLoading(false);
    }
  }

  function handleShortUrlClick(e) {
    e.preventDefault();
    if (urlMap[shortUrl]) {
      window.open(urlMap[shortUrl], "_blank");
    }
  }

  return (
    <>
      <header id="header">URL Shortener</header>
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
            placeholder="Validity in days. Default 30 minutes."
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
              <a
                href={shortUrl}
                onClick={handleShortUrlClick}
                target="_blank"
                rel="noopener noreferrer"
              >
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

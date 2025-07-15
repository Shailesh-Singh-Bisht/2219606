# URL Shortener Frontend

This project is a simple frontend URL shortener built with React and Vite. It allows users to input a URL and a validity period (in days), then generates a short URL. Clicking the short URL will redirect the user to the original URL using a frontend mapping.

## Features

- Input a URL to shorten
- Specify a validity period (defaults to 30 minutes if left blank)
- Generates a simulated short URL
- Maintains a mapping of short URLs to original URLs in the frontend
- Clicking the short URL redirects to the original URL
- Basic validation and error handling

## Technologies Used

- React (functional components, hooks)
- Vite (for fast development and build)
- Custom logging middleware (for error and event logging)
- CSS for basic styling

## How It Works

1. **User Input:** Enter a URL and a validity period. If validity is blank, it defaults to 30 days.
2. **Validation:** The app checks for valid URL format and validity input.
3. **Short URL Generation:** A fake short URL is generated using a random string.
4. **Mapping:** The short URL and original URL are stored in a React state object (`urlMap`).
5. **Redirection:** When the short URL is clicked, an onClick handler looks up the original URL in the map and opens it in a new tab, simulating a redirect.

## Notes

- This is a frontend-only simulation; no backend or real URL shortening service is used.
- All mappings are stored in memory and reset on page reload.

## Example

![Demo Screenshot](https://github.com/Shailesh-Singh-Bisht/2219606/blob/main/Demo.png)

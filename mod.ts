async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  // Check if the request is for README.md.
  if (pathname.startsWith("/README.md")) {
    // Read the README.md file from the file system.
    const file = await Deno.readFile("./README.md");
    // Respond to the request with the README.md file.
    return new Response(file, {
      headers: {
        "content-type": "text/markdown",
      },
    });
  }

  return new Response(
    `<html>
      <body>
        <h1>denobin</h1>
        <p>A Deno version of https://gobinaries.com</p>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

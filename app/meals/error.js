"use client"; // to get errors even of the client side

export default function Error() {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>Failed to fetch meal data. Try again later.</p>
    </main>
  );
}

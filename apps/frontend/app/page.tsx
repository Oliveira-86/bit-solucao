async function getHealth() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  try {
    const response = await fetch(`${apiUrl}/api/health`, { cache: "no-store" });

    if (!response.ok) {
      return { status: "error", database: "disconnected" };
    }

    return response.json();
  } catch {
    return { status: "error", database: "disconnected" };
  }
}

export default async function HomePage() {
  const health = await getHealth();

  return (
    <main>
      <h1>Monorepo: Next.js + Express + MySQL</h1>
      <p>Status da API: {health.status}</p>
      <p>Status do Banco: {health.database}</p>
    </main>
  );
}

const test = Deno.env.get("SALEOR_API") || "";
export async function graphqlClient<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const resp = await fetch(test, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`${resp.status} ${body}`);
  }
  const json = await resp.json();
  if (json.errors) {
    throw new Error(json.errors.map((e: Error) => e.message).join("\n"));
  }
  return json.data as T;
}

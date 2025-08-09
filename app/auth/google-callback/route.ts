

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  console.log(code, state);


  return new Response(
    JSON.stringify({}),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const redirect_to = searchParams.get("redirect_to") || "https://frontend.com";

  const loginUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${encodeURIComponent(
    redirect_to
  )}`;

  return NextResponse.redirect(loginUrl);
}

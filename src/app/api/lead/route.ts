import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  business?: string;
  email?: string;
  website?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    const isJson = contentType.includes("application/json");
    const body = isJson
      ? ((await request.json()) as LeadPayload)
      : (Object.fromEntries(await request.formData()) as Record<
          string,
          FormDataEntryValue | string
        >);
    const submitted = body as Record<string, FormDataEntryValue | string>;

    const name = String(submitted.name ?? "").trim();
    const email = String(submitted.email ?? "").trim();
    const message = String((submitted.message ?? submitted.details) ?? "").trim();

    if (!name || !email || !message) {
      if (!isJson) {
        return NextResponse.redirect(
          new URL("/?lead=error#contact", request.url),
          303
        );
      }

      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      if (!isJson) {
        return NextResponse.redirect(
          new URL("/?lead=error#contact", request.url),
          303
        );
      }

      return NextResponse.json(
        { error: "Please use a valid email address." },
        { status: 400 }
      );
    }

      console.log("[lead]", {
        name,
      business: String(submitted.business ?? "").trim(),
      email,
      website: String(submitted.website ?? "").trim(),
      message,
      createdAt: new Date().toISOString(),
    });

    if (!isJson) {
      return NextResponse.redirect(
        new URL("/?lead=success#contact", request.url),
        303
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
      return NextResponse.redirect(new URL("/?lead=error#contact", request.url), 303);
    }

    return NextResponse.json(
      { error: "Unable to submit the lead right now." },
      { status: 500 }
    );
  }
}

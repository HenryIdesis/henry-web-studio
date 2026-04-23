import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type LeadBody = {
  name?: string;
  business?: string;
  email?: string;
  website?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeAppPassword(value: string) {
  return value.replace(/\s+/g, "");
}

export async function POST(request: Request) {
  try {
    const { name, business, email, website, message } =
      (await request.json()) as LeadBody;

    const trimmedName = String(name ?? "").trim();
    const trimmedBusiness = String(business ?? "").trim();
    const trimmedEmail = String(email ?? "").trim();
    const trimmedWebsite = String(website ?? "").trim();
    const trimmedMessage = String(message ?? "").trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: "Preenche todos os campos" },
        { status: 400 }
      );
    }

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const emailUser = process.env.EMAIL_USER.trim();
        const emailPass = normalizeAppPassword(process.env.EMAIL_PASS);

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        await transporter.sendMail({
          from: `Henry Web Studio <${emailUser}>`,
          replyTo: trimmedEmail,
          to: emailUser,
          subject: `Henry Web Studio: novo contacto de ${trimmedName}`,
          text: [
            "Novo contacto",
            "",
            `Nome: ${trimmedName}`,
            `Business: ${trimmedBusiness || "-"}`,
            `Email: ${trimmedEmail}`,
            `Website: ${trimmedWebsite || "-"}`,
            "",
            trimmedMessage,
          ].join("\n"),
          html: `
            <h2>Novo contacto</h2>
            <p><strong>Nome:</strong> ${escapeHtml(trimmedName)}</p>
            <p><strong>Business:</strong> ${escapeHtml(trimmedBusiness || "-")}</p>
            <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
            <p><strong>Website:</strong> ${escapeHtml(trimmedWebsite || "-")}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${escapeHtml(trimmedMessage).replaceAll("\n", "<br />")}</p>
          `,
        });

        return NextResponse.json({ success: true, method: "email" });
      } catch (error) {
        console.error("Falha no envio do email:", error);
        return NextResponse.json(
          {
            error:
              "Não foi possível enviar o email. Verifique EMAIL_USER e EMAIL_PASS.",
          },
          { status: 500 }
        );
      }
    }

    console.log("--- NOVO CONTACTO (FALLBACK) ---");
    console.log("Nome:", trimmedName);
    console.log("Business:", trimmedBusiness || "-");
    console.log("Email:", trimmedEmail);
    console.log("Website:", trimmedWebsite || "-");
    console.log("Mensagem:", trimmedMessage);
    console.log("---------------------------------");

    return NextResponse.json({ success: true, method: "fallback" });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

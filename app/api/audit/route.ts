type AuditRequestPayload = {
  name?: unknown;
  email?: unknown;
  websiteUrl?: unknown;
  industry?: unknown;
  competitors?: unknown;
  goals?: unknown;
  context?: unknown;
};

type AuditRequest = {
  name: string;
  email: string;
  websiteUrl: string;
  industry: string;
  competitors: string;
  goals: string;
  context: string;
};

const adminEmail = process.env.AUDIT_ADMIN_EMAIL || "petay081@gmail.com";
const fromEmail =
  process.env.RESEND_FROM_EMAIL || "Empire Audit <onboarding@resend.dev>";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidHttpsUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && Boolean(url.hostname);
  } catch {
    return false;
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseAuditRequest(payload: AuditRequestPayload): AuditRequest {
  const auditRequest = {
    name: clean(payload.name),
    email: clean(payload.email),
    websiteUrl: clean(payload.websiteUrl),
    industry: clean(payload.industry),
    competitors: clean(payload.competitors),
    goals: clean(payload.goals),
    context: clean(payload.context),
  };

  if (!auditRequest.name || !auditRequest.email || !auditRequest.websiteUrl) {
    throw new Error("Name, email, and website URL are required.");
  }

  if (!isValidEmail(auditRequest.email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (!isValidHttpsUrl(auditRequest.websiteUrl)) {
    throw new Error("Website URL must be a valid https:// link.");
  }

  if (!auditRequest.industry || !auditRequest.goals) {
    throw new Error("Industry and growth goals are required.");
  }

  return auditRequest;
}

function buildAdminEmail(auditRequest: AuditRequest) {
  const safe = {
    name: escapeHtml(auditRequest.name),
    email: escapeHtml(auditRequest.email),
    websiteUrl: escapeHtml(auditRequest.websiteUrl),
    industry: escapeHtml(auditRequest.industry),
    competitors: escapeHtml(auditRequest.competitors || "Not provided"),
    goals: escapeHtml(auditRequest.goals),
    context: escapeHtml(auditRequest.context || "Not provided"),
  };

  const text = `NEW AUDIT REQUEST

Lead Information
- Name: ${auditRequest.name}
- Email: ${auditRequest.email}
- Industry: ${auditRequest.industry}

Website URL
- ${auditRequest.websiteUrl}

Competitor Analysis
- Top 3 Competitors: ${auditRequest.competitors || "Not provided"}

Growth Goals
${auditRequest.goals}

Additional Context
${auditRequest.context || "Not provided"}
`;

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#2f2f2f">
      <h1 style="margin:0 0 16px;color:#4A4A4A">NEW AUDIT REQUEST</h1>
      <h2 style="margin:24px 0 8px;color:#D4AF37">Lead Information</h2>
      <ul>
        <li><strong>Name:</strong> ${safe.name}</li>
        <li><strong>Email:</strong> ${safe.email}</li>
        <li><strong>Industry:</strong> ${safe.industry}</li>
      </ul>
      <h2 style="margin:24px 0 8px;color:#D4AF37">Website URL</h2>
      <p><a href="${safe.websiteUrl}">${safe.websiteUrl}</a></p>
      <h2 style="margin:24px 0 8px;color:#D4AF37">Competitor Analysis</h2>
      <p><strong>Top 3 Competitors:</strong><br>${safe.competitors}</p>
      <h2 style="margin:24px 0 8px;color:#D4AF37">Growth Goals</h2>
      <p>${safe.goals.replace(/\n/g, "<br>")}</p>
      <h2 style="margin:24px 0 8px;color:#D4AF37">Additional Context</h2>
      <p>${safe.context.replace(/\n/g, "<br>")}</p>
    </div>
  `;

  return { text, html };
}

export async function POST(request: Request) {
  let auditRequest: AuditRequest;

  try {
    auditRequest = parseAuditRequest(await request.json());
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Invalid audit request payload.",
      },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Audit email service is not configured yet." },
      { status: 503 },
    );
  }

  const email = buildAdminEmail(auditRequest);

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: adminEmail,
      reply_to: auditRequest.email,
      subject: `NEW AUDIT REQUEST - ${auditRequest.name}`,
      text: email.text,
      html: email.html,
    }),
  });

  if (!resendResponse.ok) {
    return Response.json(
      { error: "Unable to send the audit request right now." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

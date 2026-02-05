import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_9cT3iETF_Ktdvd5kCZthKXbfwQUha3pAx");
const RECIPIENT_EMAIL = "nathnathchav@gmail.com";
const FROM_EMAIL = "EIRL REPAIN <onboarding@resend.dev>";
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const address = formData.get("address")?.toString() || "Non renseignée";
    const service = formData.get("service")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    if (!name || !email || !phone || !service || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Veuillez remplir tous les champs obligatoires."
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const serviceLabels = {
      "maconnerie": "Maçonnerie (neuf ou rénovation)",
      "renovation": "Rénovation",
      "hydrofuge": "Nettoyage hydrofuge",
      "toiture": "Toiture",
      "facade": "Façade",
      "travaux-divers": "Travaux divers",
      "autre": "Autre"
    };
    const serviceLabel = serviceLabels[service] || service;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #000; color: #FFE600; padding: 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { padding: 20px; background-color: #f5f5f5; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #000; }
            .field-value { margin-top: 5px; padding: 10px; background-color: #fff; border-radius: 4px; }
            .message-box { background-color: #fff; padding: 15px; border-left: 4px solid #FFE600; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏗️ Nouvelle demande de devis</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Nom complet</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">📞 Téléphone</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="field-label">📍 Adresse du chantier</div>
                <div class="field-value">${address}</div>
              </div>
              <div class="field">
                <div class="field-label">🔧 Type de service</div>
                <div class="field-value">${serviceLabel}</div>
              </div>
              <div class="field">
                <div class="field-label">📝 Description du projet</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>Ce message a été envoyé depuis le formulaire de contact du site eirl-repain.fr</p>
            </div>
          </div>
        </body>
      </html>
    `;
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      // Permet de répondre directement au client
      subject: `[Demande de devis] ${serviceLabel} - ${name}`,
      html: htmlContent
    });
    if (error) {
      console.error("Erreur Resend:", error);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Votre demande a été envoyée avec succès ! Nous vous recontacterons sous 48h.",
        id: data?.id
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Une erreur inattendue est survenue. Veuillez réessayer."
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

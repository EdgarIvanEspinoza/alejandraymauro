import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validar que el email esté presente
    if (!email) {
      return NextResponse.json(
        { error: "Email es requerido" },
        { status: 400 }
      );
    }

    // Llamada a la API de Brevo para suscribir el contacto
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY no está configurada");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    // Crear o actualizar contacto en Brevo y agregarlo a la lista
    // La lista #3 (identified_contacts) tiene la automation que envía el email de bienvenida
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [3], // ID de la lista "identified_contacts - #3"
        updateEnabled: true, // Actualizar si ya existe
      }),
    });

    // Si el contacto ya existe (código 400), intentar actualizar y agregarlo a la lista
    if (response.status === 400) {
      const updateResponse = await fetch(
        `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
        {
          method: "PUT",
          headers: {
            accept: "application/json",
            "api-key": brevoApiKey,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            listIds: [3], // Agregar a la lista
          }),
        }
      );

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        console.error("Error al actualizar contacto en Brevo:", errorData);
        throw new Error("Error al procesar la suscripción");
      }
    } else if (!response.ok) {
      const errorData = await response.json();
      console.error("Error de Brevo:", errorData);
      throw new Error("Error al procesar la suscripción");
    }

    // La automation de Brevo se encargará de:
    // 1. Enviar el email de bienvenida
    // 2. Mover el contacto a la lista "Contactos confirmados - #5"

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en /api/subscribe:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

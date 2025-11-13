import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      nombre,
      apellido,
      asistencia,
      numAcompanantes,
      nombresAcompanantes,
      intolerancias,
      comentarios,
    } = body;

    // Validar que el email esté presente
    if (!email) {
      return NextResponse.json(
        { error: "Email es requerido" },
        { status: 400 }
      );
    }

    // Llamada a la API de Brevo para actualizar el contacto
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY no está configurada");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: nombre,
          LASTNAME: apellido,
          ASISTENCIA: asistencia,
          NUM_ACOMPANANTES: numAcompanantes,
          NOMBRES_ACOMPANANTES: nombresAcompanantes,
          INTOLERANCIAS: intolerancias,
          COMENTARIOS: comentarios,
        },
        updateEnabled: true, // Actualizar si ya existe
      }),
    });

    if (!response.ok) {
      // Si el contacto ya existe, intentar actualizar
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
              attributes: {
                FIRSTNAME: nombre,
                LASTNAME: apellido,
                ASISTENCIA: asistencia,
                NUM_ACOMPANANTES: numAcompanantes,
                NOMBRES_ACOMPANANTES: nombresAcompanantes,
                INTOLERANCIAS: intolerancias,
                COMENTARIOS: comentarios,
              },
            }),
          }
        );

        if (!updateResponse.ok) {
          throw new Error("Error al actualizar el contacto en Brevo");
        }
      } else {
        throw new Error("Error al procesar la solicitud con Brevo");
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en /api/rsvp:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

const CHAPTER_DATA = [
  {
    block: "BLOQUE 1 — IDENTIDAD (Caps 1-5)",
    chapters: [
      { 
        id: 1, 
        title: "Capítulo 1: ¿Quiénes somos y por qué estamos aquí?", 
        content: "🎯 OBJETIVO: Que el oyente sepa exactamente con quién está hablando y por qué deben seguir escuchando.\n\n📝 CADA HOST DEBE PREPARAR:\n• 1 párrafo: quién eres en 3 palabras que nadie esperaría.\n• El momento exacto en que decidiste construir algo propio.\n\n🎥 DINÁMICA:\n• Interrupciones sorpresa sobre lo que el oyente no sabe („lo que no te contó es que...“).\n• Presentaciones cruzadas.\n\n⚓ PREGUNTA ANCLA: '¿Qué tenían que perder para estar aquí?'" 
      },
      { 
        id: 2, 
        title: "Capítulo 2: El momento en que todo cambió", 
        content: "🎯 OBJETIVO: El punto de quiebre humano de cada host (sin proyecto, sin app, solo la persona).\n\n📝 PREPARAR:\n• Lenin: El momento personal que te cambió.\n• Pucca: Algo que la hizo ver la vida diferente (no laboral).\n• Tobe: Su punto de quiebre.\n\n🎥 DINÁMICA:\n• Uno habla, los otros dos escuchan sin interrupciones.\n• Pregunta final: '¿Esa persona que eras antes, te reconocería hoy?'\n\n⚓ PREGUNTA ANCLA: '¿Cuál fue el día que ya no podías seguir siendo el mismo?'" 
      },
      { 
        id: 3, 
        title: "Capítulo 3: La venganza de Tobe", 
        content: "🎯 OBJETIVO: Presentar a Tobe (el que nadie esperaba) + diversión total.\n\n💪 EL CONCEPTO: Tobe entrena a Pucca y a Lenin en cámara mientras cuenta su historia, entre jadeos y risas 😂\n\n📝 PREPARAR:\n• Tobe: Rutina básica real (y graciosa).\n• Lenin y Pucca: ¡Cero preparación (la autenticidad es clave!).\n\n🎥 DINÁMICA:\n• Tobe da instrucción → Lenin y Pucca sufren → Tobe cuenta parte de su historia → Vuelta a entrenar.\n\n✨ POR QUÉ FUNCIONA:\n• Contraste cómico perfecto entre el dolor de Lenin/Pucca y la experiencia de Tobe.\n\n⚓ PREGUNTA ANCLA: '¿Qué tan lejos puedes llegar cuando alguien que no te va a soltar te acompaña?'" 
      },
      { 
        id: 4, 
        title: "Capítulo 4: Ser venezolano en 2026", 
        content: "🎯 OBJETIVO: Posicionamiento cultural (identidad, no dolor).\n\n📝 PREPARAR (mesa redonda):\n• 3 cosas que aman de la patria.\n• 3 cosas que les hacen hervir la sangre.\n• Diferencias entre quienes se fueron y quedaron (sin juicio).\n\n📊 INVESTIGACIÓN:\n• Datos de Tertulia y Dinero (contexto real).\n• 1 titular actual de la semana.\n\n🎥 DINÁMICA:\n• Conversación abierta, discrepancias bienvenidas (tensión = contenido).\n\n⚓ PREGUNTA ANCLA: 'Si Venezuela fuera una persona, ¿qué estaría haciendo ahora mismo?'" 
      },
      { 
        id: 5, 
        title: "Capítulo 5: Mentes distintas, resultados distintos", 
        content: "🎯 OBJETIVO: Neurodivergencia real.\n\n📝 PREPARAR (el 'cómo' aprendieron):\n• Lenin: TDAH 2e + DSPD (arquitecto de sistemas, nocturno).\n• Pucca: Dislexia + doctorado (procesamiento visual).\n• Tobe: TDAH hiperactivo (el cuerpo como procesador).\n\n🎥 DINÁMICA:\n• Conexión: '¿Qué hubiera pasado si alguien te hubiera dicho de niño que tu cerebro funcionaba diferente, no mal?'\n\n⚓ PREGUNTA ANCLA: '¿En qué momento dejaste de intentar ser normal?'" 
      }
    ]
  },
  {
    block: "BLOQUE 2 — DOLORES DEL PAÍS (Caps 6-10)",
    chapters: [
      { 
        id: 6, 
        title: "Capítulo 6: La importancia de saber escoger", 
        content: "🗣️ NARRATIVA: Decisiones imposibles forzadas por el entorno.\n\n💔 DOLORES:\n• Costo de equivocarse (máximo en Venezuela).\n• Parálisis por miedo.\n\n🔄 LOOP ABIERTO: '¿Existe forma de reducir el riesgo?'\n🎥 SHORT: Decisión imposible." 
      },
      { 
        id: 7, 
        title: "Capítulo 7: Queriendo querer sin poder hacer", 
        content: "🗣️ NARRATIVA: Talento paralizado por infraestructura rota.\n\n💔 DOLORES:\n• Pagos que no llegan.\n• Plataformas que ignoran a Venezuela.\n\n🔄 LOOP ABIERTO: '¿Qué pasaría si hubiera forma de cobrar/conectar sin depender de afuera?'\n🎥 SHORT: Sistema cerrando puertas." 
      },
      { 
        id: 8, 
        title: "Capítulo 8: El cuerpo también tiene hambre", 
        content: "🗣️ NARRATIVA: Salud física bajo estrés crónico.\n\n💔 DOLORES:\n• Nutrición con poco presupuesto.\n• Salud vista como gasto, no como inversión.\n\n🔄 LOOP ABIERTO: '¿Cómo construir algo grande si el cuerpo no aguanta?'\n🎥 SHORT: Tobe cocinando con lo que hay 😂" 
      },
      { 
        id: 9, 
        title: "Capítulo 9: El dinero que Venezuela no ve", 
        content: "🗣️ NARRATIVA: La economía informal, invisible.\n\n💔 DOLORES:\n• Bolívar destruido, dólar invisible.\n• Incapacidad de acumular riqueza.\n\n🔄 LOOP ABIERTO: '¿Y si ese dinero invisible tuviera forma/nombre/valor?'\n🎥 SHORT: El caos de pagar con 4 métodos distintos." 
      },
      { 
        id: 10, 
        title: "Capítulo 10: Venezuela tiene lo que el mundo necesita", 
        content: "🗣️ NARRATIVA: Giro hacia la riqueza oculta.\n\n✨ ESPERANZA:\n• Recursos, talento, biodiversidad, ubicación.\n• El problema: distribución y conexión.\n\n🔄 LOOP ABIERTO: '¿Qué falta para conectar con lo que ya existe?'\n🎥 SHORT: Mapa de recursos brillando." 
      }
    ]
  },
  {
    block: "BLOQUE 3 — LA SOLUCIÓN Y LA APP (Cap 11+)",
    chapters: [
      { 
        id: 11, 
        title: "Capítulo 11: La educación como moneda", 
        content: "🚀 ABRIR: '¿Qué falta para conectar? Hoy respondemos.'\n\n🧠 CENTRAL:\n• El futuro digital no espera.\n• Dato: Falta de docentes para 2032.\n\n💡 SOLUCIÓN:\n• Aquita+ conectando educación y comunidad.\n\n🔄 LOOP: 'De nada sirve educar si el cuerpo no aguanta.'" 
      },
      { 
        id: 12, 
        title: "Capítulo 12: Tobe y sus retos", 
        content: "🛠️ CENTRAL: Tobe como manual de campo.\n\n🏋️ BLOQUE FÍSICO: Rutina sin equipos importados.\n📈 BLOQUE VENTAS: Estrategias de campo.\n\n🤝 PUENTE:\n• Aquita+ como potenciador de visibilidad y cobros.\n\n😂 CÓMICO: Lenin y Pucca entrenando." 
      },
      { 
        id: 13, 
        title: "Capítulo 13: El arte desde la infancia", 
        content: "🎨 CENTRAL: Arte como identidad.\n\n🔍 LENTES:\n• Pucca: Arte visual y dislexia.\n• Tobe: Cuerpo y expresión.\n• Lenin: Sistemas de transmisión cultural en riesgo.\n\n🤝 PUENTE:\n• Aquita+: El espacio para monetizar talento artístico." 
      },
      { 
        id: 14, 
        title: "Capítulo 14: El dinero que inventamos", 
        content: "💰 CENTRAL: KBU — sin jerga técnica.\n\n🧩 PROBLEMA:\n• Economía real e informal vs. sistemas actuales.\n\n🚀 SOLUCIÓN:\n• KBU: Acuerdo, valor estable, unidad anclada a reales (La historia de Yap).\n\n🛠️ PRÁCTICA:\n• Pago entrenamiento, consultoría, negocio." 
      },
      { 
        id: 15, 
        title: "Capítulo 15: Aquita+ por dentro", 
        content: "📱 CENTRAL: App en vivo y realidad.\n\n🎬 ACTOS:\n1. Historia honesta (idea → beta).\n2. Demo real: Directorio + Transacción KBU.\n3. Invitación: QR registro.\n\n🔥 CIERRE: 'Somos venezolanos que decidieron que el problema era demasiado grande para ignorarlo.'" 
      },
      { 
        id: 16, 
        title: "Capítulo 16: Abierto al público", 
        content: "🗣️ FORMATO: Definido por la audiencia.\n\n🎯 CANDIDATO PROBABLE:\n• 'Neurodivergencia Vol. 2 — lo que no dijimos en el Cap 5'." 
      }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-12 tracking-tighter drop-shadow-[0_0_10px_#ec4899]">
        PLAN ESTRUCTURAL DE CAPÍTULOS
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">
        {CHAPTER_DATA.map((block, bIdx) => (
          <section key={bIdx} id={`block-${bIdx}`} className="border border-pink-500/30 rounded-xl p-6 bg-gray-950/50 shadow-[0_0_8px_rgba(236,72,153,0.1)]">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6 border-b border-cyan-400/30 pb-2 drop-shadow-[0_0_5px_#22d3ee]">
              {block.block}
            </h2>
            <div className="space-y-4">
              {block.chapters.map((cap) => (
                <details 
                  key={cap.id} 
                  id={`cap-${cap.id}`}
                  className="group bg-black border border-pink-500/50 rounded-lg p-4 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all duration-300"
                >
                  <summary className="font-medium text-lg text-gray-100 cursor-pointer list-none flex justify-between items-center transition-colors hover:text-pink-400">
                    {cap.title}
                    <span className="text-pink-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-300 border-t border-gray-800 pt-3 text-sm leading-relaxed whitespace-pre-wrap">
                    {cap.content}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}


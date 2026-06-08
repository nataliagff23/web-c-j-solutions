/* ============================================================
   C&J SolutionsFL — i18n (EN / ES)
   Walks [data-i18n] / [data-i18n-placeholder] and swaps content.
   ============================================================ */
(function () {
  "use strict";

  var T = {
    en: {
      "nav.services": "Services",
      "nav.work": "Our Work",
      "nav.about": "About",
      "nav.aboutLong": "About Us",
      "nav.reviews": "Reviews",
      "nav.contact": "Contact",
      "nav.cta": "Free Quote",
      "nav.ctaLong": "Get a Free Quote →",

      "hero.kicker": "📍 Jacksonville, Florida",
      "hero.title": "We Build Your <span class=\"accent\"> Dream Home.</span><span class=\"line2\">We Build to Last.</span>",
      "hero.sub": "Construction &amp; remodeling experts in Jacksonville, FL. From flooring and kitchen makeovers to fences, decks, pergolas, and full home additions — <strong>luxury in every detail.</strong>",
      "hero.btnPrimary": "🛠️ Get a Free Quote",
      "hero.btnGhost": "📸 See Our Work",
      "hero.stat1": "Years Experience",
      "hero.stat2": "Projects Completed",
      "hero.stat3": "Satisfaction",
      "hero.stat4": "Rated",
      "hero.scroll": "Scroll",

      "srv.kitchen": "Kitchen Remodeling",
      "srv.bathroom": "Bathroom Remodeling",
      "srv.flooring": "Flooring",
      "srv.painting": "Painting",
      "srv.drywall": "Drywall",
      "srv.carpentry": "Carpentry",
      "srv.deck": "Deck &amp; Pergola",
      "srv.fences": "Fences",
      "srv.pavers": "Pavers",
      "srv.handyman": "Handyman Services",
      "srv.others": "Others",

      "srv.kitchen.desc": "Complete kitchen transformations — cabinetry, countertops, backsplash, and layout redesigns.",
      "srv.bathroom.desc": "Full bath renovations — tile, vanities, showers, and flooring. Your personal spa awaits.",
      "srv.flooring.desc": "All types of flooring — LVP, hardwood, tile, laminate, and more. Durable, beautiful, and built for Florida.",
      "srv.painting.desc": "Interior and exterior painting — clean lines, premium finishes, and lasting protection for every surface.",
      "srv.drywall.desc": "Installation, repair, and finishing — seamless walls and ceilings with impeccable results.",
      "srv.carpentry.desc": "Custom carpentry — trim, molding, built-ins, framing, doors, and detailed woodwork done right.",
      "srv.deck.desc": "Custom wood decks and pergolas — outdoor living spaces designed to extend your home elegantly.",
      "srv.fences.desc": "Wood, vinyl, and aluminum fencing — privacy, security, and style for residential and commercial.",
      "srv.pavers.desc": "Driveways, walkways, patios — premium paver installation that adds curb appeal and value.",
      "srv.handyman.desc": "From small repairs to honey-do lists — reliable handyman work for everything your home needs.",
      "srv.others.desc": "Don’t see your project listed? Just ask — we take on custom and specialty work too.",

      "services.label": "What We Do",
      "services.title": "Full-Scope <span class=\"accent\">Remodeling</span><br>&amp; Construction",
      "services.sub": "From flooring and painting to full home additions — we handle it all. Licensed, insured, and based in Jacksonville, FL.",

      "portfolio.label": "Portfolio",
      "portfolio.title": "Featured <span class=\"accent\">Projects.</span>",
      "portfolio.sub": "A curated selection of our recent construction and remodeling work across Jacksonville and Central Florida.",
      "portfolio.p1.cat": "Kitchen Remodel",
      "portfolio.p1.title": "Kitchen Transformation",
      "portfolio.p1.desc": "Full remodel — new cabinets, countertops &amp; backsplash · Jacksonville, FL",
      "portfolio.p2.cat": "Flooring",
      "portfolio.p2.title": "Open Floor Plan",
      "portfolio.p2.desc": "Luxury Vinyl Plank throughout main level · 2,100 sq ft",
      "portfolio.p3.cat": "Painting",
      "portfolio.p3.title": "Interior &amp; Exterior Refresh",
      "portfolio.p3.desc": "Full repaint + trim · Immediate curb appeal boost",
      "portfolio.p4.cat": "Bathroom Remodel",
      "portfolio.p4.title": "Master Bathroom Renovation",
      "portfolio.p4.desc": "Walk-in shower, new vanity &amp; tile flooring · Master bath",
      "portfolio.p5.cat": "Outdoor Living",
      "portfolio.p5.title": "Deck, Pergola &amp; Pavers",
      "portfolio.p5.desc": "Custom wood deck + paver patio · Backyard entertainment area",
      "portfolio.p6.cat": "Carpentry",
      "portfolio.p6.title": "Custom Built-in &amp; Trim",
      "portfolio.p6.desc": "Full built-in organizer with bench, hooks &amp; cubbies",

      "process.label": "How It Works",
      "process.title": "Simple Process. <span class=\"accent\">Exceptional Results.</span>",
      "process.s1.num": "STEP 01",
      "process.s1.title": "Free Consultation",
      "process.s1.desc": "Call or message us. We discuss your vision, needs, and budget — no pressure, no obligation.",
      "process.s2.num": "STEP 02",
      "process.s2.title": "Detailed Quote",
      "process.s2.desc": "We visit your property, take measurements, and deliver a transparent itemized quote.",
      "process.s3.num": "STEP 03",
      "process.s3.title": "We Get to Work",
      "process.s3.desc": "Our skilled crew starts on schedule. You get daily updates and zero surprises.",
      "process.s4.num": "STEP 04",
      "process.s4.title": "Final Walkthrough",
      "process.s4.desc": "We walk you through every detail. 100% satisfied? Then the job is done right.",

      "whyus.label": "Why C&amp;J SolutionsFL",
      "whyus.title": "We Don’t Just Build.<br><span class=\"accent\">We Transform.</span>",
      "whyus.sub": "Based in Jacksonville, FL — we’ve been crafting quality construction and remodeling projects for homeowners across the region. Solid construction, impeccable finishes, and a team that treats your home like their own.",
      "whyus.photoCTA": "Add your team or best project photo here",
      "whyus.badge": "🏅 Quality with a Florida Seal",
      "whyus.p1.title": "Licensed &amp; Insured",
      "whyus.p1.text": "Full licensing and insurance coverage gives you complete peace of mind throughout every project.",
      "whyus.p2.title": "Transparent Pricing",
      "whyus.p2.text": "No hidden fees, no surprises. You get a detailed quote before any work begins — and we stick to it.",
      "whyus.p3.title": "On-Time Delivery",
      "whyus.p3.text": "We respect your time. Timelines are commitments, not suggestions. We finish when we say we will.",
      "whyus.p4.title": "Bilingual Team",
      "whyus.p4.text": "We serve Jacksonville’s English and Spanish-speaking communities. Communication is always clear.",

      "reviews.label": "Reviews",
      "reviews.title": "What Our Clients <span class=\"accent\">Say.</span>",
      "reviews.r1.text": "C&amp;J completely transformed our kitchen. The craftsmanship is unreal — every detail was perfect. They finished on time and the price was exactly what they quoted. 100% recommend!",
      "reviews.r2.text": "We got new flooring done throughout the whole first floor. The team was professional, fast, and incredibly clean. The floors look absolutely stunning. Will be calling them for our bathroom next!",
      "reviews.r3.text": "They built our pergola and installed new fence — the backyard is now our favorite place. Communication throughout was excellent, and they cleaned up everything perfectly. Luxury in every step, truly.",

      "cta.title": "Your Dream Home<br>Starts with One Call.",
      "cta.sub": "Free quote. No obligation. Licensed &amp; insured.",
      "cta.btn1": "Get Your Free Quote →",

      "contact.label": "Get In Touch",
      "contact.title": "Ready to Start<br><span class=\"accent\">Your Project?</span>",
      "contact.sub": "Tell us about your project and we’ll get back to you within 24 hours with a free, no-obligation quote.",
      "contact.phoneLabel": "Phone / WhatsApp",
      "contact.locLabel": "Location",
      "contact.locValue": "Jacksonville, Florida",
      "contact.followLabel": "Follow Our Work",
      "contact.hoursLabel": "Hours",
      "contact.hoursValue": "Monday–Saturday, 7am–7pm",

      "form.fname": "First Name *",
      "form.lname": "Last Name *",
      "form.email": "Email *",
      "form.phone": "Phone *",
      "form.service": "Service Needed *",
      "form.servicePh": "Select a service…",
      "form.message": "Tell us about your project",
      "form.messagePh": "Describe your project — size, timeline, any specific requirements…",
      "form.submit": "🚀 Request Free Quote",
      "form.success.title": "Quote Request Sent!",
      "form.success.text": "We’ll contact you within 24 hours to discuss your project. Check your WhatsApp and email.",

      "footer.brand": "Construction &amp; Remodeling specialists in Jacksonville, FL. Luxury in every detail. Quality with a Florida seal.",
      "footer.col1": "Services",
      "footer.col2": "Company",
      "footer.col3": "Contact",
      "footer.copyright": "© 2026 C&amp;J SolutionsFL. All rights reserved. Jacksonville, Florida."
    },

    es: {
      "nav.services": "Servicios",
      "nav.work": "Proyectos",
      "nav.about": "Nosotros",
      "nav.aboutLong": "Sobre Nosotros",
      "nav.reviews": "Reseñas",
      "nav.contact": "Contacto",
      "nav.cta": "Cotizar",
      "nav.ctaLong": "Cotización Gratis →",

      "hero.kicker": "📍 Jacksonville, Florida",
      "hero.title": "Construimos tu <span class=\"accent\">Hogar Ideal.</span><span class=\"line2\">Para que dure.</span>",
      "hero.sub": "Expertos en construcción y remodelación en Jacksonville, FL. Desde pisos y remodelación de cocinas hasta cercas, decks, pérgolas y ampliaciones completas — <strong>lujo en cada detalle.</strong>",
      "hero.btnPrimary": "🛠️ Cotización Gratis",
      "hero.btnGhost": "📸 Ver Nuestro Trabajo",
      "hero.stat1": "Años de Experiencia",
      "hero.stat2": "Proyectos Completados",
      "hero.stat3": "Satisfacción",
      "hero.stat4": "Calificación",
      "hero.scroll": "Desliza",

      "srv.kitchen": "Remodelación de Cocinas",
      "srv.bathroom": "Remodelación de Baños",
      "srv.flooring": "Pisos",
      "srv.painting": "Pintura",
      "srv.drywall": "Drywall",
      "srv.carpentry": "Carpintería",
      "srv.deck": "Deck y Pérgolas",
      "srv.fences": "Cercas",
      "srv.pavers": "Adoquines",
      "srv.handyman": "Servicios Generales",
      "srv.others": "Otros",

      "srv.kitchen.desc": "Transformaciones completas de cocina — gabinetes, encimeras, backsplash y rediseño de espacios.",
      "srv.bathroom.desc": "Renovaciones completas de baño — azulejos, lavabos, duchas y pisos. Tu spa personal te espera.",
      "srv.flooring.desc": "Todo tipo de pisos — LVP, madera, cerámica, laminado y más. Duraderos, hermosos y hechos para Florida.",
      "srv.painting.desc": "Pintura interior y exterior — líneas limpias, acabados premium y protección duradera para cada superficie.",
      "srv.drywall.desc": "Instalación, reparación y acabado — paredes y techos perfectos, sin imperfecciones.",
      "srv.carpentry.desc": "Carpintería a medida — molduras, built-ins, estructuras, puertas y trabajos en madera con detalle.",
      "srv.deck.desc": "Decks de madera y pérgolas a medida — espacios exteriores diseñados para extender tu hogar con elegancia.",
      "srv.fences.desc": "Cercas de madera, vinilo y aluminio — privacidad, seguridad y estilo para residencial y comercial.",
      "srv.pavers.desc": "Entradas, caminos, patios — instalación premium de adoquines que aumenta valor y atractivo.",
      "srv.handyman.desc": "Desde pequeñas reparaciones hasta listas pendientes — trabajo confiable para todo lo que tu hogar necesita.",
      "srv.others.desc": "¿No ves tu proyecto en la lista? Pregunta — también hacemos trabajos personalizados y especiales.",

      "services.label": "Lo Que Hacemos",
      "services.title": "<span class=\"accent\">Remodelación</span><br>y Construcción Integral",
      "services.sub": "Desde pisos y pintura hasta ampliaciones completas — lo hacemos todo. Con licencia, asegurados y basados en Jacksonville, FL.",

      "portfolio.label": "Portafolio",
      "portfolio.title": "Proyectos <span class=\"accent\">Destacados.</span>",
      "portfolio.sub": "Una selección cuidada de nuestros trabajos recientes de construcción y remodelación en Jacksonville y Florida Central.",
      "portfolio.p1.cat": "Cocina",
      "portfolio.p1.title": "Transformación de Cocina",
      "portfolio.p1.desc": "Remodelación completa — nuevos gabinetes, encimeras y backsplash · Jacksonville, FL",
      "portfolio.p2.cat": "Pisos",
      "portfolio.p2.title": "Planta Abierta",
      "portfolio.p2.desc": "Pisos LVP en todo el nivel principal · 2,100 pies cuadrados",
      "portfolio.p3.cat": "Pintura",
      "portfolio.p3.title": "Refresh Interior y Exterior",
      "portfolio.p3.desc": "Repintado completo + molduras · Aumento inmediato de atractivo",
      "portfolio.p4.cat": "Baño",
      "portfolio.p4.title": "Renovación de Baño Principal",
      "portfolio.p4.desc": "Ducha caminable, nuevo lavabo y piso de cerámica · Baño principal",
      "portfolio.p5.cat": "Exteriores",
      "portfolio.p5.title": "Deck, Pérgola y Adoquines",
      "portfolio.p5.desc": "Deck de madera a medida + patio de adoquines · Área de entretenimiento",
      "portfolio.p6.cat": "Carpintería",
      "portfolio.p6.title": "Built-in y Molduras a Medida",
      "portfolio.p6.desc": "Organizador built-in completo con banco, ganchos y compartimientos",

      "process.label": "Cómo Trabajamos",
      "process.title": "Proceso Simple. <span class=\"accent\">Resultados Excepcionales.</span>",
      "process.s1.num": "PASO 01",
      "process.s1.title": "Consulta Gratis",
      "process.s1.desc": "Llámanos o escríbenos. Hablamos de tu visión, necesidades y presupuesto — sin presión, sin compromiso.",
      "process.s2.num": "PASO 02",
      "process.s2.title": "Cotización Detallada",
      "process.s2.desc": "Visitamos tu propiedad, tomamos medidas y entregamos una cotización itemizada y transparente.",
      "process.s3.num": "PASO 03",
      "process.s3.title": "Comenzamos a Trabajar",
      "process.s3.desc": "Nuestro equipo profesional empieza en la fecha pactada. Recibes actualizaciones diarias y cero sorpresas.",
      "process.s4.num": "PASO 04",
      "process.s4.title": "Recorrido Final",
      "process.s4.desc": "Recorremos cada detalle contigo. ¿100% satisfecho? Entonces el trabajo está hecho como debe ser.",

      "whyus.label": "Por Qué C&amp;J SolutionsFL",
      "whyus.title": "No Solo Construimos.<br><span class=\"accent\">Transformamos.</span>",
      "whyus.sub": "Basados en Jacksonville, FL — llevamos años creando proyectos de construcción y remodelación de calidad para hogares de toda la región. Construcción sólida, acabados impecables y un equipo que trata tu hogar como propio.",
      "whyus.photoCTA": "Coloca aquí la foto de tu equipo o mejor proyecto",
      "whyus.badge": "🏅 Calidad con Sello de Florida",
      "whyus.p1.title": "Con Licencia y Asegurados",
      "whyus.p1.text": "Cobertura completa de licencias y seguros para que tengas total tranquilidad en cada proyecto.",
      "whyus.p2.title": "Precios Transparentes",
      "whyus.p2.text": "Sin costos ocultos, sin sorpresas. Recibes una cotización detallada antes de empezar — y la cumplimos.",
      "whyus.p3.title": "Entrega a Tiempo",
      "whyus.p3.text": "Respetamos tu tiempo. Los plazos son compromisos, no sugerencias. Terminamos cuando decimos.",
      "whyus.p4.title": "Equipo Bilingüe",
      "whyus.p4.text": "Atendemos a las comunidades de habla inglesa y española de Jacksonville. La comunicación es siempre clara.",

      "reviews.label": "Reseñas",
      "reviews.title": "Lo Que Dicen Nuestros <span class=\"accent\">Clientes.</span>",
      "reviews.r1.text": "C&amp;J transformó completamente nuestra cocina. La calidad del trabajo es increíble — cada detalle perfecto. Terminaron a tiempo y el precio fue exactamente el cotizado. ¡100% recomendados!",
      "reviews.r2.text": "Nos instalaron pisos nuevos en toda la planta baja. El equipo fue profesional, rápido e increíblemente limpio. Los pisos se ven espectaculares. ¡Los llamaremos para nuestro baño pronto!",
      "reviews.r3.text": "Construyeron nuestra pérgola e instalaron una cerca nueva — el jardín es ahora nuestro lugar favorito. La comunicación fue excelente y dejaron todo impecable. Lujo en cada paso, de verdad.",

      "cta.title": "Tu Hogar Ideal<br>Empieza con Una Llamada.",
      "cta.sub": "Cotización gratis. Sin compromiso. Con licencia y asegurados.",
      "cta.btn1": "Obtén tu Cotización Gratis →",

      "contact.label": "Hablemos",
      "contact.title": "¿Listo para Comenzar<br><span class=\"accent\">tu Proyecto?</span>",
      "contact.sub": "Cuéntanos sobre tu proyecto y te responderemos en 24 horas con una cotización gratuita y sin compromiso.",
      "contact.phoneLabel": "Teléfono / WhatsApp",
      "contact.locLabel": "Ubicación",
      "contact.locValue": "Jacksonville, Florida",
      "contact.followLabel": "Síguenos",
      "contact.hoursLabel": "Horario",
      "contact.hoursValue": "Lunes–Sábado, 7am–7pm",

      "form.fname": "Nombre *",
      "form.lname": "Apellido *",
      "form.email": "Correo *",
      "form.phone": "Teléfono *",
      "form.service": "Servicio Necesario *",
      "form.servicePh": "Selecciona un servicio…",
      "form.message": "Cuéntanos sobre tu proyecto",
      "form.messagePh": "Describe tu proyecto — tamaño, fechas, requisitos específicos…",
      "form.submit": "🚀 Solicitar Cotización",
      "form.success.title": "¡Solicitud Enviada!",
      "form.success.text": "Te contactaremos en 24 horas para hablar de tu proyecto. Revisa tu WhatsApp y correo.",

      "footer.brand": "Especialistas en Construcción y Remodelación en Jacksonville, FL. Lujo en cada detalle. Calidad con sello de Florida.",
      "footer.col1": "Servicios",
      "footer.col2": "Empresa",
      "footer.col3": "Contacto",
      "footer.copyright": "© 2026 C&amp;J SolutionsFL. Todos los derechos reservados. Jacksonville, Florida."
    }
  };

  function applyLang(lang) {
    if (!T[lang]) lang = "en";
    var dict = T[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("cj-lang", lang); } catch (e) {}
  }

  function init() {
    var saved = "en";
    try { saved = localStorage.getItem("cj-lang") || "en"; } catch (e) {}
    applyLang(saved);

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

export type Language = 'en' | 'es' | 'fr';

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    partners: string;
    contact: string;
    bookConsultation: string;
    languages: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  valueProposition: {
    eyebrow: string;
    headline: string;
    body: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  services: {
    medical: {
      eyebrow: string;
      headline: string[];
      body: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      cta: string;
      badge: string;
    };
    romantic: {
      eyebrow: string;
      headline: string[];
      body: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      cta: string;
      badge: string;
    };
    caribbean: {
      eyebrow: string;
      headline: string[];
      body: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      cta: string;
      badge: string;
    };
  };
  stats: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
  partners: {
    headline: string;
    subheadline: string;
  };
  consultation: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    submitAnother: string;
    serviceOptions: {
      medical: string;
      romantic: string;
      solo: string;
      caribbean: string;
      other: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
  };
  waitlist: {
    eyebrow: string;
    headline: string;
    description: string;
    benefit1Title: string;
    benefit1Description: string;
    benefit2Title: string;
    benefit2Description: string;
    benefit3Title: string;
    benefit3Description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    destinationLabel: string;
    destinationPlaceholder: string;
    travelPeriodLabel: string;
    travelPeriodPlaceholder: string;
    submitButton: string;
    submitting: string;
    privacyNote: string;
    successTitle: string;
    successMessage: string;
    toastSuccessTitle: string;
    toastSuccessDescription: string;
    toastErrorTitle: string;
    toastErrorDescription: string;
    destinations: {
      jamaica: string;
      barbados: string;
      trinidad: string;
      stLucia: string;
      dominica: string;
      grenada: string;
      any: string;
    };
    periods: {
      oneToThree: string;
      threeToSix: string;
      sixToTwelve: string;
      twelvePlus: string;
      flexible: string;
    };
  };
  guideDownload: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitButton: string;
    submitting: string;
    privacyNote: string;
    successTitle: string;
    successMessage: string;
    closeButton: string;
    toastSuccessTitle: string;
    toastSuccessDescription: string;
    toastErrorTitle: string;
    toastErrorDescription: string;
  };
  bookingCalendar: {
    title: string;
    description: string;
    selectDateLabel: string;
    selectTimeLabel: string;
    noTimesAvailable: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    closeButton: string;
    toastSuccessTitle: string;
    toastSuccessDescription: string;
    toastErrorTitle: string;
    toastErrorDescription: string;
    toastConflictTitle: string;
    toastConflictDescription: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      partners: 'Partners',
      contact: 'Contact',
      bookConsultation: 'Book Consultation',
      languages: 'EN • ES • FR',
    },
    hero: {
      eyebrow: 'YOUR CULTURAL BRIDGE TO THE WORLD',
      headline: 'Travel That Transforms Lives, Not Just Itineraries',
      subheadline: 'From Latin American medical excellence to Caribbean cultural immersion—we turn your travel dreams into curated, life-enriching journeys. Trilingual support. Vetted partners. Zero stress.',
      primaryCta: 'Book Free Consultation',
      secondaryCta: 'Explore Our Services →',
    },
    valueProposition: {
      eyebrow: 'WHY TRAVELBUFF',
      headline: 'More Than a Travel Agent—Your Global Life Partner',
      body: "We don't book trips. We design transformative experiences backed by decades of cultural expertise, multilingual fluency, and a personally-vetted network spanning three continents.",
      feature1: 'Trilingual Expertise',
      feature2: 'Vetted Partners',
      feature3: 'Personalized Curation',
    },
    services: {
      medical: {
        eyebrow: 'MEDICAL TRAVEL CONCIERGE',
        headline: ['WORLD-CLASS', 'CARE', '', 'with complete', 'peace of mind'],
        body: 'Access JCI-accredited medical facilities in Colombia, Costa Rica, and Mexico—for a fraction of Caribbean costs. We coordinate every detail: pre-screened surgeons, appointments, accommodations, transportation, translation, and post-procedure support.',
        feature1: 'Pre-screened JCI-accredited facilities across Latin America',
        feature2: 'Complete coordination: medical, travel, lodging & cultural support',
        feature3: 'Post-procedure recovery assistance and follow-up care',
        feature4: 'Transparent pricing with no hidden fees or surprises',
        cta: 'Explore Medical Tourism →',
        badge: '25+ Vetted Medical Partners',
      },
      romantic: {
        eyebrow: 'CURATED EXPERIENCES',
        headline: ['FROM', 'FIRST-CLASS', 'ROMANCE', '', 'to unforgettable', 'solo journeys'],
        body: 'Whether you\'re celebrating love or embracing adventure alone, we design itineraries that reflect your unique personality. Hidden gems. Local experiences. Authentic cultural moments across Europe, Latin America, and beyond.',
        feature1: 'Personalized itineraries matching your exact travel style',
        feature2: 'Boutique accommodations and authentic local experiences',
        feature3: 'Off-the-beaten-path destinations and cultural immersion',
        feature4: 'Solo-friendly or romance-optimized trip design',
        cta: 'Plan Your Getaway →',
        badge: 'Europe • Latin America • Caribbean',
      },
      caribbean: {
        eyebrow: 'INBOUND EXPERIENCES',
        headline: ['DISCOVER', 'CARIBBEAN', 'PARADISE', '', 'through local eyes'],
        body: 'For European and Latin American travelers seeking authenticity beyond resorts. Live like a native with vetted local hosts, traditional cuisine experiences, artisan workshops, and hidden destinations across Barbados, Trinidad, St. Lucia, Grenada, and Jamaica.',
        feature1: '"Live Like a Native" experiences with trusted local guides',
        feature2: 'Traditional cuisine, artisan workshops & cultural activities',
        feature3: 'Off-resort destinations showcasing authentic Caribbean life',
        feature4: 'Multilingual support for seamless cultural exchange',
        cta: 'Experience Caribbean Culture →',
        badge: '5 Caribbean Islands • Authentic Experiences',
      },
    },
    stats: {
      eyebrow: 'PROVEN TRACK RECORD',
      headline: 'Trusted by Travelers Worldwide',
      subheadline: 'From medical tourists seeking life-changing procedures to couples celebrating milestones—we deliver experiences that exceed expectations.',
      stat1Label: 'Years of Expertise',
      stat2Label: 'Destination Countries',
      stat3Label: 'Languages Spoken',
      stat4Label: 'Client Satisfaction',
    },
    partners: {
      headline: 'Our Trusted Partners',
      subheadline: 'We collaborate with vetted medical facilities, boutique hotels, and cultural organizations to ensure authentic, safe, and memorable experiences.',
    },
    consultation: {
      eyebrow: 'START YOUR JOURNEY',
      headline: 'Book Your Free Consultation',
      subheadline: 'Share your travel dreams with us, and we\'ll craft a personalized journey that exceeds your expectations. No obligation, just possibilities.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (555) 123-4567',
      serviceLabel: 'Service Interest',
      servicePlaceholder: 'Select a service',
      messageLabel: 'Tell Us About Your Dream Journey',
      messagePlaceholder: 'Share your travel goals, preferred destinations, dates, special requirements...',
      submitButton: 'Request Free Consultation',
      submitting: 'Submitting...',
      successTitle: 'Thank You!',
      successMessage: 'We\'ve received your consultation request. Our team will reach out within 24 hours to begin crafting your perfect journey.',
      submitAnother: 'Submit Another Request',
      serviceOptions: {
        medical: 'Medical Tourism',
        romantic: 'Romantic Escapes',
        solo: 'Solo Adventures',
        caribbean: 'Caribbean Cultural Immersion',
        other: 'Other / Not Sure',
      },
    },
    footer: {
      tagline: 'Your Cultural Bridge to the World',
      copyright: '© 2025 Travelbuff Concierge Services. All rights reserved.',
    },
    waitlist: {
      eyebrow: 'BE THE FIRST TO KNOW',
      headline: 'Join Our Exclusive Travel Waitlist',
      description: 'Get early access to new Caribbean destinations, limited-time offers, and curated cultural experiences. Plus, receive insider travel tips and destination guides delivered straight to your inbox.',
      benefit1Title: 'Early Bird Pricing',
      benefit1Description: 'Save up to 25% on new destination launches',
      benefit2Title: 'Exclusive Access',
      benefit2Description: 'Private tours and limited-availability experiences',
      benefit3Title: 'Monthly Insights',
      benefit3Description: 'Travel guides, cultural tips, and destination spotlights',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      destinationLabel: 'Interested Destination',
      destinationPlaceholder: 'Select a destination',
      travelPeriodLabel: 'When are you planning to travel?',
      travelPeriodPlaceholder: 'Select timeframe',
      submitButton: 'Join the Waitlist',
      submitting: 'Joining...',
      privacyNote: '* Required fields. We respect your privacy and will never share your information.',
      successTitle: "You're on the list!",
      successMessage: "We'll keep you updated with the latest travel opportunities.",
      toastSuccessTitle: "You're on the list!",
      toastSuccessDescription: "We'll notify you about new destinations and exclusive offers.",
      toastErrorTitle: "Something went wrong",
      toastErrorDescription: "Please try again or contact us directly.",
      destinations: {
        jamaica: 'Jamaica',
        barbados: 'Barbados',
        trinidad: 'Trinidad & Tobago',
        stLucia: 'St. Lucia',
        dominica: 'Dominica',
        grenada: 'Grenada',
        any: 'Open to any destination',
      },
      periods: {
        oneToThree: 'Within 1-3 months',
        threeToSix: '3-6 months',
        sixToTwelve: '6-12 months',
        twelvePlus: '12+ months',
        flexible: 'Flexible / Just exploring',
      },
    },
    guideDownload: {
      title: 'Download Free Caribbean Guide',
      description: 'Get our exclusive cultural immersion guide with insider tips, hidden gems, and authentic experiences across the Caribbean.',
      nameLabel: 'Name (Optional)',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your@email.com',
      submitButton: 'Download Guide',
      submitting: 'Downloading...',
      privacyNote: 'We respect your privacy. Unsubscribe anytime.',
      successTitle: 'Guide Downloaded!',
      successMessage: 'Check your email for the complete guide and exclusive travel tips.',
      closeButton: 'Close',
      toastSuccessTitle: 'Success!',
      toastSuccessDescription: "Your guide is downloading now. Check your email for more travel tips!",
      toastErrorTitle: 'Something went wrong',
      toastErrorDescription: 'Please try again or contact us directly.',
    },
    bookingCalendar: {
      title: 'Book Your Free Consultation',
      description: 'Choose a convenient date and time to discuss your travel dreams with our expert team.',
      selectDateLabel: 'Select Date',
      selectTimeLabel: 'Select Time',
      noTimesAvailable: 'No times available for this date. Please select another date.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your@email.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (555) 123-4567',
      serviceLabel: 'Service Interest',
      servicePlaceholder: 'Select a service',
      messageLabel: 'Message (Optional)',
      messagePlaceholder: 'Tell us about your travel goals...',
      submitButton: 'Confirm Booking',
      submitting: 'Booking...',
      successTitle: 'Booking Confirmed!',
      successMessage: "We've sent a confirmation email with all the details. We look forward to speaking with you!",
      closeButton: 'Close',
      toastSuccessTitle: 'Booking Confirmed!',
      toastSuccessDescription: "We've sent a confirmation email with all the details.",
      toastErrorTitle: 'Something went wrong',
      toastErrorDescription: 'Please try again or contact us directly.',
      toastConflictTitle: 'Time Slot Unavailable',
      toastConflictDescription: 'This time slot was just booked. Please select a different time.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Acerca',
      partners: 'Socios',
      contact: 'Contacto',
      bookConsultation: 'Reservar Consulta',
      languages: 'EN • ES • FR',
    },
    hero: {
      eyebrow: 'TU PUENTE CULTURAL AL MUNDO',
      headline: 'Viajes Que Transforman Vidas, No Solo Itinerarios',
      subheadline: 'Desde la excelencia médica latinoamericana hasta la inmersión cultural caribeña: convertimos tus sueños de viaje en experiencias curadas que enriquecen tu vida. Soporte trilingüe. Socios verificados. Cero estrés.',
      primaryCta: 'Consulta Gratis',
      secondaryCta: 'Explorar Servicios →',
    },
    valueProposition: {
      eyebrow: 'POR QUÉ TRAVELBUFF',
      headline: 'Más Que Una Agencia—Tu Compañero Global de Vida',
      body: 'No reservamos viajes. Diseñamos experiencias transformadoras respaldadas por décadas de experiencia cultural, fluidez multilingüe y una red personalmente verificada que abarca tres continentes.',
      feature1: 'Experiencia Trilingüe',
      feature2: 'Socios Verificados',
      feature3: 'Curaduría Personalizada',
    },
    services: {
      medical: {
        eyebrow: 'CONSERJE MÉDICO DE VIAJES',
        headline: ['ATENCIÓN', 'DE CLASE', 'MUNDIAL', '', 'con total', 'tranquilidad'],
        body: 'Accede a instalaciones médicas acreditadas por JCI en Colombia, Costa Rica y México, por una fracción de los costos del Caribe. Coordinamos cada detalle: cirujanos preseleccionados, citas, alojamiento, transporte, traducción y apoyo post-procedimiento.',
        feature1: 'Instalaciones acreditadas por JCI en toda Latinoamérica',
        feature2: 'Coordinación completa: médica, viaje, alojamiento y apoyo cultural',
        feature3: 'Asistencia de recuperación post-procedimiento y seguimiento',
        feature4: 'Precios transparentes sin tarifas ocultas ni sorpresas',
        cta: 'Explorar Turismo Médico →',
        badge: '25+ Socios Médicos Verificados',
      },
      romantic: {
        eyebrow: 'EXPERIENCIAS CURADAS',
        headline: ['DESDE', 'ROMANCE', 'DE PRIMERA', '', 'hasta viajes', 'en solitario'],
        body: 'Ya sea que estés celebrando el amor o abrazando la aventura en solitario, diseñamos itinerarios que reflejan tu personalidad única. Joyas ocultas. Experiencias locales. Momentos culturales auténticos en Europa, Latinoamérica y más allá.',
        feature1: 'Itinerarios personalizados que coinciden con tu estilo de viaje',
        feature2: 'Alojamientos boutique y experiencias locales auténticas',
        feature3: 'Destinos fuera de lo común e inmersión cultural',
        feature4: 'Diseño de viaje optimizado para solitarios o romance',
        cta: 'Planifica Tu Escapada →',
        badge: 'Europa • Latinoamérica • Caribe',
      },
      caribbean: {
        eyebrow: 'EXPERIENCIAS LOCALES',
        headline: ['DESCUBRE', 'EL PARAÍSO', 'CARIBEÑO', '', 'con ojos', 'locales'],
        body: 'Para viajeros europeos y latinoamericanos que buscan autenticidad más allá de los resorts. Vive como un nativo con anfitriones locales verificados, experiencias de cocina tradicional, talleres artesanales y destinos ocultos en Barbados, Trinidad, Santa Lucía, Granada y Jamaica.',
        feature1: 'Experiencias "Vive Como un Nativo" con guías locales de confianza',
        feature2: 'Cocina tradicional, talleres artesanales y actividades culturales',
        feature3: 'Destinos fuera del resort que muestran la vida caribeña auténtica',
        feature4: 'Soporte multilingüe para un intercambio cultural sin problemas',
        cta: 'Experimenta la Cultura Caribeña →',
        badge: '5 Islas del Caribe • Experiencias Auténticas',
      },
    },
    stats: {
      eyebrow: 'TRAYECTORIA COMPROBADA',
      headline: 'Confiado por Viajeros en Todo el Mundo',
      subheadline: 'Desde turistas médicos que buscan procedimientos que cambian vidas hasta parejas que celebran hitos: entregamos experiencias que superan las expectativas.',
      stat1Label: 'Años de Experiencia',
      stat2Label: 'Países Destino',
      stat3Label: 'Idiomas Hablados',
      stat4Label: 'Satisfacción del Cliente',
    },
    partners: {
      headline: 'Nuestros Socios de Confianza',
      subheadline: 'Colaboramos con instalaciones médicas verificadas, hoteles boutique y organizaciones culturales para garantizar experiencias auténticas, seguras y memorables.',
    },
    consultation: {
      eyebrow: 'COMIENZA TU VIAJE',
      headline: 'Reserva Tu Consulta Gratuita',
      subheadline: 'Comparte tus sueños de viaje con nosotros y crearemos un viaje personalizado que supere tus expectativas. Sin obligación, solo posibilidades.',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Ingresa tu nombre completo',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu.correo@ejemplo.com',
      phoneLabel: 'Número de Teléfono',
      phonePlaceholder: '+34 612 345 678',
      serviceLabel: 'Interés en Servicio',
      servicePlaceholder: 'Selecciona un servicio',
      messageLabel: 'Cuéntanos Sobre Tu Viaje Soñado',
      messagePlaceholder: 'Comparte tus objetivos de viaje, destinos preferidos, fechas, requisitos especiales...',
      submitButton: 'Solicitar Consulta Gratuita',
      submitting: 'Enviando...',
      successTitle: '¡Gracias!',
      successMessage: 'Hemos recibido tu solicitud de consulta. Nuestro equipo se pondrá en contacto dentro de 24 horas para comenzar a crear tu viaje perfecto.',
      submitAnother: 'Enviar Otra Solicitud',
      serviceOptions: {
        medical: 'Turismo Médico',
        romantic: 'Escapadas Románticas',
        solo: 'Aventuras en Solitario',
        caribbean: 'Inmersión Cultural Caribeña',
        other: 'Otro / No Estoy Seguro',
      },
    },
    footer: {
      tagline: 'Tu Puente Cultural al Mundo',
      copyright: '© 2025 Travelbuff Concierge Services. Todos los derechos reservados.',
    },
    waitlist: {
      eyebrow: 'SÉ EL PRIMERO EN SABER',
      headline: 'Únete a Nuestra Lista de Espera Exclusiva',
      description: 'Obtén acceso anticipado a nuevos destinos caribeños, ofertas por tiempo limitado y experiencias culturales curadas. Además, recibe consejos de viaje y guías de destinos directamente en tu bandeja de entrada.',
      benefit1Title: 'Precios Anticipados',
      benefit1Description: 'Ahorra hasta un 25% en lanzamientos de nuevos destinos',
      benefit2Title: 'Acceso Exclusivo',
      benefit2Description: 'Tours privados y experiencias de disponibilidad limitada',
      benefit3Title: 'Perspectivas Mensuales',
      benefit3Description: 'Guías de viaje, consejos culturales y destacados de destinos',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Juan Pérez',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'juan@ejemplo.com',
      destinationLabel: 'Destino de Interés',
      destinationPlaceholder: 'Selecciona un destino',
      travelPeriodLabel: '¿Cuándo planeas viajar?',
      travelPeriodPlaceholder: 'Selecciona período',
      submitButton: 'Unirse a la Lista',
      submitting: 'Uniéndose...',
      privacyNote: '* Campos obligatorios. Respetamos tu privacidad y nunca compartiremos tu información.',
      successTitle: '¡Estás en la lista!',
      successMessage: 'Te mantendremos actualizado con las últimas oportunidades de viaje.',
      toastSuccessTitle: '¡Estás en la lista!',
      toastSuccessDescription: 'Te notificaremos sobre nuevos destinos y ofertas exclusivas.',
      toastErrorTitle: 'Algo salió mal',
      toastErrorDescription: 'Por favor intenta de nuevo o contáctanos directamente.',
      destinations: {
        jamaica: 'Jamaica',
        barbados: 'Barbados',
        trinidad: 'Trinidad y Tobago',
        stLucia: 'Santa Lucía',
        dominica: 'Dominica',
        grenada: 'Granada',
        any: 'Abierto a cualquier destino',
      },
      periods: {
        oneToThree: 'Dentro de 1-3 meses',
        threeToSix: '3-6 meses',
        sixToTwelve: '6-12 meses',
        twelvePlus: '12+ meses',
        flexible: 'Flexible / Solo explorando',
      },
    },
    guideDownload: {
      title: 'Descarga la Guía Caribeña Gratis',
      description: 'Obtén nuestra guía exclusiva de inmersión cultural con consejos internos, joyas ocultas y experiencias auténticas en todo el Caribe.',
      nameLabel: 'Nombre (Opcional)',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu@correo.com',
      submitButton: 'Descargar Guía',
      submitting: 'Descargando...',
      privacyNote: 'Respetamos tu privacidad. Cancela en cualquier momento.',
      successTitle: '¡Guía Descargada!',
      successMessage: 'Revisa tu correo para la guía completa y consejos de viaje exclusivos.',
      closeButton: 'Cerrar',
      toastSuccessTitle: '¡Éxito!',
      toastSuccessDescription: 'Tu guía se está descargando ahora. ¡Revisa tu correo para más consejos de viaje!',
      toastErrorTitle: 'Algo salió mal',
      toastErrorDescription: 'Por favor intenta de nuevo o contáctanos directamente.',
    },
    bookingCalendar: {
      title: 'Reserva Tu Consulta Gratuita',
      description: 'Elige una fecha y hora conveniente para discutir tus sueños de viaje con nuestro equipo experto.',
      selectDateLabel: 'Seleccionar Fecha',
      selectTimeLabel: 'Seleccionar Hora',
      noTimesAvailable: 'No hay horarios disponibles para esta fecha. Por favor selecciona otra fecha.',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu@correo.com',
      phoneLabel: 'Número de Teléfono',
      phonePlaceholder: '+34 612 345 678',
      serviceLabel: 'Interés en Servicio',
      servicePlaceholder: 'Selecciona un servicio',
      messageLabel: 'Mensaje (Opcional)',
      messagePlaceholder: 'Cuéntanos sobre tus objetivos de viaje...',
      submitButton: 'Confirmar Reserva',
      submitting: 'Reservando...',
      successTitle: '¡Reserva Confirmada!',
      successMessage: 'Hemos enviado un correo de confirmación con todos los detalles. ¡Esperamos hablar contigo!',
      closeButton: 'Cerrar',
      toastSuccessTitle: '¡Reserva Confirmada!',
      toastSuccessDescription: 'Hemos enviado un correo de confirmación con todos los detalles.',
      toastErrorTitle: 'Algo salió mal',
      toastErrorDescription: 'Por favor intenta de nuevo o contáctanos directamente.',
      toastConflictTitle: 'Horario No Disponible',
      toastConflictDescription: 'Este horario acaba de ser reservado. Por favor selecciona un horario diferente.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À Propos',
      partners: 'Partenaires',
      contact: 'Contact',
      bookConsultation: 'Réserver Consultation',
      languages: 'EN • ES • FR',
    },
    hero: {
      eyebrow: 'VOTRE PONT CULTUREL VERS LE MONDE',
      headline: 'Des Voyages Qui Transforment Des Vies, Pas Seulement Des Itinéraires',
      subheadline: 'De l\'excellence médicale latino-américaine à l\'immersion culturelle caribéenne—nous transformons vos rêves de voyage en expériences soignées qui enrichissent votre vie. Support trilingue. Partenaires vérifiés. Zéro stress.',
      primaryCta: 'Consultation Gratuite',
      secondaryCta: 'Découvrir Nos Services →',
    },
    valueProposition: {
      eyebrow: 'POURQUOI TRAVELBUFF',
      headline: 'Plus Qu\'une Agence—Votre Partenaire de Vie Global',
      body: 'Nous ne réservons pas de voyages. Nous concevons des expériences transformatrices soutenues par des décennies d\'expertise culturelle, de maîtrise multilingue et un réseau personnellement vérifié couvrant trois continents.',
      feature1: 'Expertise Trilingue',
      feature2: 'Partenaires Vérifiés',
      feature3: 'Curation Personnalisée',
    },
    services: {
      medical: {
        eyebrow: 'CONCIERGERIE MÉDICALE DE VOYAGE',
        headline: ['SOINS', 'DE CLASSE', 'MONDIALE', '', 'avec une', 'tranquillité totale'],
        body: 'Accédez aux installations médicales accréditées JCI en Colombie, au Costa Rica et au Mexique—pour une fraction des coûts des Caraïbes. Nous coordonnons chaque détail : chirurgiens présélectionnés, rendez-vous, hébergement, transport, traduction et soutien post-procédure.',
        feature1: 'Installations accréditées JCI à travers l\'Amérique latine',
        feature2: 'Coordination complète : médical, voyage, hébergement et soutien culturel',
        feature3: 'Assistance de récupération post-procédure et soins de suivi',
        feature4: 'Prix transparents sans frais cachés ni surprises',
        cta: 'Explorer le Tourisme Médical →',
        badge: '25+ Partenaires Médicaux Vérifiés',
      },
      romantic: {
        eyebrow: 'EXPÉRIENCES CURÉES',
        headline: ['DE LA', 'ROMANCE', 'PREMIÈRE CLASSE', '', 'aux voyages', 'en solo'],
        body: 'Que vous célébriez l\'amour ou que vous embrassiez l\'aventure en solo, nous concevons des itinéraires qui reflètent votre personnalité unique. Joyaux cachés. Expériences locales. Moments culturels authentiques en Europe, en Amérique latine et au-delà.',
        feature1: 'Itinéraires personnalisés correspondant à votre style de voyage exact',
        feature2: 'Hébergements boutique et expériences locales authentiques',
        feature3: 'Destinations hors des sentiers battus et immersion culturelle',
        feature4: 'Conception de voyage optimisée pour solo ou romance',
        cta: 'Planifiez Votre Escapade →',
        badge: 'Europe • Amérique Latine • Caraïbes',
      },
      caribbean: {
        eyebrow: 'EXPÉRIENCES LOCALES',
        headline: ['DÉCOUVREZ', 'LE PARADIS', 'CARIBÉEN', '', 'avec des yeux', 'locaux'],
        body: 'Pour les voyageurs européens et latino-américains à la recherche d\'authenticité au-delà des resorts. Vivez comme un natif avec des hôtes locaux vérifiés, des expériences de cuisine traditionnelle, des ateliers artisanaux et des destinations cachées à la Barbade, à Trinidad, à Sainte-Lucie, à la Grenade et en Jamaïque.',
        feature1: 'Expériences "Vivre comme un Natif" avec des guides locaux de confiance',
        feature2: 'Cuisine traditionnelle, ateliers artisanaux et activités culturelles',
        feature3: 'Destinations hors resort montrant la vie caribéenne authentique',
        feature4: 'Support multilingue pour un échange culturel sans faille',
        cta: 'Découvrez la Culture Caribéenne →',
        badge: '5 Îles des Caraïbes • Expériences Authentiques',
      },
    },
    stats: {
      eyebrow: 'BILAN ÉPROUVÉ',
      headline: 'Approuvé par les Voyageurs du Monde Entier',
      subheadline: 'Des touristes médicaux à la recherche de procédures qui changent la vie aux couples célébrant des jalons—nous livrons des expériences qui dépassent les attentes.',
      stat1Label: 'Années d\'Expertise',
      stat2Label: 'Pays de Destination',
      stat3Label: 'Langues Parlées',
      stat4Label: 'Satisfaction Client',
    },
    partners: {
      headline: 'Nos Partenaires de Confiance',
      subheadline: 'Nous collaborons avec des installations médicales vérifiées, des hôtels boutique et des organisations culturelles pour garantir des expériences authentiques, sûres et mémorables.',
    },
    consultation: {
      eyebrow: 'COMMENCEZ VOTRE VOYAGE',
      headline: 'Réservez Votre Consultation Gratuite',
      subheadline: 'Partagez vos rêves de voyage avec nous et nous créerons un voyage personnalisé qui dépasse vos attentes. Aucune obligation, juste des possibilités.',
      nameLabel: 'Nom Complet',
      namePlaceholder: 'Entrez votre nom complet',
      emailLabel: 'Adresse E-mail',
      emailPlaceholder: 'votre.email@exemple.com',
      phoneLabel: 'Numéro de Téléphone',
      phonePlaceholder: '+33 6 12 34 56 78',
      serviceLabel: 'Intérêt pour le Service',
      servicePlaceholder: 'Sélectionnez un service',
      messageLabel: 'Parlez-nous de Votre Voyage de Rêve',
      messagePlaceholder: 'Partagez vos objectifs de voyage, destinations préférées, dates, exigences spéciales...',
      submitButton: 'Demander une Consultation Gratuite',
      submitting: 'Envoi...',
      successTitle: 'Merci !',
      successMessage: 'Nous avons reçu votre demande de consultation. Notre équipe vous contactera dans les 24 heures pour commencer à créer votre voyage parfait.',
      submitAnother: 'Soumettre une Autre Demande',
      serviceOptions: {
        medical: 'Tourisme Médical',
        romantic: 'Escapades Romantiques',
        solo: 'Aventures en Solo',
        caribbean: 'Immersion Culturelle Caribéenne',
        other: 'Autre / Pas Sûr',
      },
    },
    footer: {
      tagline: 'Votre Pont Culturel vers le Monde',
      copyright: '© 2025 Travelbuff Concierge Services. Tous droits réservés.',
    },
    waitlist: {
      eyebrow: 'SOYEZ LE PREMIER À SAVOIR',
      headline: 'Rejoignez Notre Liste d\'Attente Exclusive',
      description: 'Accédez en avant-première aux nouvelles destinations caribéennes, offres à durée limitée et expériences culturelles curées. De plus, recevez des conseils de voyage et des guides de destination directement dans votre boîte mail.',
      benefit1Title: 'Tarifs Anticipés',
      benefit1Description: 'Économisez jusqu\'à 25% sur les lancements de nouvelles destinations',
      benefit2Title: 'Accès Exclusif',
      benefit2Description: 'Tours privés et expériences à disponibilité limitée',
      benefit3Title: 'Perspectives Mensuelles',
      benefit3Description: 'Guides de voyage, conseils culturels et destinations vedettes',
      nameLabel: 'Nom Complet',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Adresse E-mail',
      emailPlaceholder: 'jean@exemple.com',
      destinationLabel: 'Destination d\'Intérêt',
      destinationPlaceholder: 'Sélectionnez une destination',
      travelPeriodLabel: 'Quand prévoyez-vous de voyager?',
      travelPeriodPlaceholder: 'Sélectionnez la période',
      submitButton: 'Rejoindre la Liste',
      submitting: 'Inscription...',
      privacyNote: '* Champs obligatoires. Nous respectons votre vie privée et ne partagerons jamais vos informations.',
      successTitle: 'Vous êtes sur la liste!',
      successMessage: 'Nous vous tiendrons au courant des dernières opportunités de voyage.',
      toastSuccessTitle: 'Vous êtes sur la liste!',
      toastSuccessDescription: 'Nous vous informerons des nouvelles destinations et offres exclusives.',
      toastErrorTitle: 'Une erreur s\'est produite',
      toastErrorDescription: 'Veuillez réessayer ou nous contacter directement.',
      destinations: {
        jamaica: 'Jamaïque',
        barbados: 'Barbade',
        trinidad: 'Trinité-et-Tobago',
        stLucia: 'Sainte-Lucie',
        dominica: 'Dominique',
        grenada: 'Grenade',
        any: 'Ouvert à toute destination',
      },
      periods: {
        oneToThree: 'Dans 1-3 mois',
        threeToSix: '3-6 mois',
        sixToTwelve: '6-12 mois',
        twelvePlus: '12+ mois',
        flexible: 'Flexible / Juste explorer',
      },
    },
    guideDownload: {
      title: 'Télécharger le Guide Caribéen Gratuit',
      description: 'Obtenez notre guide exclusif d\'immersion culturelle avec des conseils d\'initiés, des joyaux cachés et des expériences authentiques à travers les Caraïbes.',
      nameLabel: 'Nom (Optionnel)',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Adresse E-mail',
      emailPlaceholder: 'votre@email.com',
      submitButton: 'Télécharger le Guide',
      submitting: 'Téléchargement...',
      privacyNote: 'Nous respectons votre vie privée. Désabonnez-vous à tout moment.',
      successTitle: 'Guide Téléchargé!',
      successMessage: 'Consultez votre e-mail pour le guide complet et des conseils de voyage exclusifs.',
      closeButton: 'Fermer',
      toastSuccessTitle: 'Succès!',
      toastSuccessDescription: 'Votre guide est en cours de téléchargement. Consultez votre e-mail pour plus de conseils de voyage!',
      toastErrorTitle: 'Une erreur s\'est produite',
      toastErrorDescription: 'Veuillez réessayer ou nous contacter directement.',
    },
    bookingCalendar: {
      title: 'Réservez Votre Consultation Gratuite',
      description: 'Choisissez une date et une heure convenables pour discuter de vos rêves de voyage avec notre équipe d\'experts.',
      selectDateLabel: 'Sélectionner la Date',
      selectTimeLabel: 'Sélectionner l\'Heure',
      noTimesAvailable: 'Aucun horaire disponible pour cette date. Veuillez sélectionner une autre date.',
      nameLabel: 'Nom Complet',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Adresse E-mail',
      emailPlaceholder: 'votre@email.com',
      phoneLabel: 'Numéro de Téléphone',
      phonePlaceholder: '+33 6 12 34 56 78',
      serviceLabel: 'Intérêt pour le Service',
      servicePlaceholder: 'Sélectionnez un service',
      messageLabel: 'Message (Optionnel)',
      messagePlaceholder: 'Parlez-nous de vos objectifs de voyage...',
      submitButton: 'Confirmer la Réservation',
      submitting: 'Réservation...',
      successTitle: 'Réservation Confirmée!',
      successMessage: 'Nous avons envoyé un e-mail de confirmation avec tous les détails. Nous avons hâte de vous parler!',
      closeButton: 'Fermer',
      toastSuccessTitle: 'Réservation Confirmée!',
      toastSuccessDescription: 'Nous avons envoyé un e-mail de confirmation avec tous les détails.',
      toastErrorTitle: 'Une erreur s\'est produite',
      toastErrorDescription: 'Veuillez réessayer ou nous contacter directement.',
      toastConflictTitle: 'Créneau Horaire Indisponible',
      toastConflictDescription: 'Ce créneau horaire vient d\'être réservé. Veuillez sélectionner un horaire différent.',
    },
  },
};

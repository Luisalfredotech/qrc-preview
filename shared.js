/* QRC Group — Shared JS (services data, i18n, layout injection, lang toggle, dropdowns, mobile nav) */
(function () {
  'use strict';

  // ──────────────────────────────
  // Service data — single source of truth
  // ──────────────────────────────
  var services = {
    core: [
      { id:"qsrc", category:"core", anchor:"quality-systems", page:"quality-systems-regulatory-compliance.html",
        titleEN:"Quality Systems & Regulatory Compliance",
        titleES:"Sistemas de Calidad y Cumplimiento Regulatorio",
        shortEN:"CAPA, change control, GxP audits, document management, and business continuity for FDA, EMA, and EU GMP-regulated operations.",
        shortES:"CAPA, control de cambios, auditorías GxP, gestión documental y continuidad de negocio para operaciones reguladas por FDA, EMA y EU GMP.",
        positioningEN:"QRC builds the quality and regulatory backbone that lets pharmaceutical, medical device, biotech, and regulated manufacturing teams operate confidently under FDA, EMA, and EU GMP frameworks. Our practitioners design CAPA programs that pass inspection, harmonize change control, run gap assessments, and stand up document management systems that make audits routine instead of stressful.",
        positioningES:"QRC construye la columna de calidad y regulatoria que permite a equipos farmacéuticos, de dispositivos médicos, biotecnología y manufactura regulada operar con confianza bajo marcos FDA, EMA y EU GMP. Diseñamos programas CAPA que pasan inspección, armonizamos control de cambios, ejecutamos análisis de brechas y desplegamos sistemas de gestión documental que vuelven rutinarias las auditorías.",
        capEN:["CAPA program design and remediation","Change control framework implementation","GxP gap assessments and audit support","Document management system rollout","Business continuity planning"],
        capES:["Diseño y remediación de programas CAPA","Implementación de marcos de control de cambios","Evaluaciones de brechas GxP y soporte en auditorías","Despliegue de sistemas de gestión documental","Planificación de continuidad de negocio"],
        delEN:["CAPA effectiveness reports","Change control SOPs","Audit response packages","Document control matrices","Business continuity playbooks"],
        delES:["Reportes de efectividad de CAPA","SOPs de control de cambios","Paquetes de respuesta a auditoría","Matrices de control documental","Manuales de continuidad de negocio"] },
      { id:"fuq", category:"core", anchor:"facilities-utilities", page:"facilities-utilities-qualification.html",
        titleEN:"Facilities & Utilities Qualification",
        titleES:"Calificación de Instalaciones y Utilidades",
        shortEN:"IQ/OQ/PQ planning, protocols, and reports for HVAC, water systems, clean utilities, and classified manufacturing spaces.",
        shortES:"Planificación, protocolos y reportes IQ/OQ/PQ para HVAC, sistemas de agua, utilidades limpias y áreas clasificadas.",
        positioningEN:"From classified clean rooms to WFI loops and clean steam, QRC qualifies the physical environment your product depends on. We author user and functional requirements, run IQ/OQ/PQ protocols end to end, and stand up environmental monitoring programs that hold up under FDA inspection.",
        positioningES:"Desde áreas clasificadas hasta bucles WFI y vapor limpio, QRC califica el entorno físico del que depende tu producto. Redactamos requerimientos de usuario y funcionales, ejecutamos protocolos IQ/OQ/PQ de extremo a extremo y desplegamos programas de monitoreo ambiental que resisten inspección FDA.",
        capEN:["HVAC and clean room qualification","WFI, PW, and clean steam system qualification","Compressed gases and process utilities","Environmental monitoring program design","User and functional requirements authoring"],
        capES:["Calificación de HVAC y áreas limpias","Calificación de sistemas WFI, PW y vapor limpio","Gases comprimidos y utilidades de proceso","Diseño de programas de monitoreo ambiental","Redacción de requerimientos de usuario y funcionales"],
        delEN:["User Requirements Specifications","Functional Requirements Specifications","IQ/OQ/PQ protocols and reports","Traceability matrices","Validation summary reports"],
        delES:["Especificaciones de Requerimientos de Usuario","Especificaciones de Requerimientos Funcionales","Protocolos y reportes IQ/OQ/PQ","Matrices de trazabilidad","Reportes resumen de validación"] },
      { id:"eq", category:"core", anchor:"equipment", page:"equipment-qualification.html",
        titleEN:"Equipment Qualification",
        titleES:"Calificación de Equipos",
        shortEN:"21 CFR Part 11 assessments, computer system validation lifecycle, IQ/OQ/PQ for production equipment, and vendor audits.",
        shortES:"Evaluaciones 21 CFR Parte 11, ciclo de vida de validación de sistemas computarizados, IQ/OQ/PQ de equipos productivos y auditorías a proveedores.",
        positioningEN:"QRC qualifies production equipment and computerized systems in accordance with 21 CFR Part 11, GAMP 5, and ICH guidance. We run lifecycle CSV from validation planning through periodic review, IQ/OQ/PQ on production assets, and vendor audits that hold up under regulatory scrutiny.",
        positioningES:"QRC califica equipos productivos y sistemas computarizados conforme a 21 CFR Parte 11, GAMP 5 e ICH. Ejecutamos CSV de ciclo de vida desde planificación hasta revisión periódica, IQ/OQ/PQ en activos de producción y auditorías a proveedores que resisten escrutinio regulatorio.",
        capEN:["21 CFR Part 11 assessment and remediation","Computer system validation planning and execution","Production equipment IQ/OQ/PQ","Vendor audits and qualification","Periodic review and revalidation"],
        capES:["Evaluación y remediación 21 CFR Parte 11","Planificación y ejecución de CSV","IQ/OQ/PQ de equipos de producción","Auditorías y calificación de proveedores","Revisión periódica y revalidación"],
        delEN:["Validation plans","Qualification protocols and reports","Traceability matrices","Vendor audit reports","Validation summary reports"],
        delES:["Planes de validación","Protocolos y reportes de calificación","Matrices de trazabilidad","Reportes de auditoría a proveedores","Reportes resumen de validación"] },
      { id:"pcv", category:"core", anchor:"process-cleaning", page:"process-cleaning-validation.html",
        titleEN:"Process & Cleaning Validation",
        titleES:"Validación de Procesos y Limpieza",
        shortEN:"Process validation lifecycle, gap analysis, cleaning validation, and swab recovery studies aligned to ICH Q7–Q12 and FDA guidance.",
        shortES:"Ciclo de vida de validación de procesos, análisis de brechas, validación de limpieza y estudios de recuperación, alineados a ICH Q7–Q12 y guía FDA.",
        positioningEN:"QRC runs process and cleaning validation across the full lifecycle — stage 1 process design through continued process verification. Our specialists author master plans, execute swab and rinse recovery studies, build cleaning matrices, and deliver continued-verification dashboards that satisfy ICH Q7–Q12 and current FDA guidance.",
        positioningES:"QRC ejecuta validación de procesos y limpieza a lo largo del ciclo de vida completo — desde diseño de proceso etapa 1 hasta verificación continua. Nuestros especialistas redactan planes maestros, ejecutan estudios de recuperación por hisopado y enjuague, construyen matrices de limpieza y entregan tableros de verificación continua alineados a ICH Q7–Q12 y guía FDA vigente.",
        capEN:["Process validation stages 1–3","Cleaning validation strategy and execution","Swab and rinse recovery studies","Hold-time and campaign studies","Continued process verification programs"],
        capES:["Validación de procesos etapas 1–3","Estrategia y ejecución de validación de limpieza","Estudios de recuperación por hisopado y enjuague","Estudios de tiempo de espera y campañas","Programas de verificación continua de proceso"],
        delEN:["Process validation master plans","Stage 1–3 validation reports","Cleaning validation matrices","Recovery study reports","Continued process verification dashboards"],
        delES:["Planes maestros de validación de procesos","Reportes de validación etapas 1–3","Matrices de validación de limpieza","Reportes de estudios de recuperación","Tableros de verificación continua de proceso"] },
      { id:"qcl", category:"core", anchor:"quality-control", page:"quality-control-labs.html",
        titleEN:"Quality Control Labs",
        titleES:"Laboratorios de Control de Calidad",
        shortEN:"Method transfer and validation, chromatography software validation, and cGMP documentation review for QC laboratories.",
        shortES:"Transferencia y validación de métodos, validación de software cromatográfico y revisión documental cGMP para laboratorios QC.",
        positioningEN:"QRC strengthens QC operations with method transfer and validation per ICH Q2(R1), CSV for Empower and OpenLab, OOS/OOT investigations, and ALCOA+ data integrity remediation. We close the gaps inspectors look for and document the work in inspection-ready format.",
        positioningES:"QRC fortalece operaciones QC con transferencia y validación de métodos según ICH Q2(R1), CSV para Empower y OpenLab, investigaciones OOS/OOT y remediación de integridad de datos ALCOA+. Cerramos las brechas que buscan los inspectores y documentamos el trabajo en formato listo para inspección.",
        capEN:["Analytical method transfer","Method validation per ICH Q2(R1)","Empower and OpenLab CSV","OOS/OOT investigations","Lab data integrity remediation"],
        capES:["Transferencia de métodos analíticos","Validación de métodos según ICH Q2(R1)","CSV de Empower y OpenLab","Investigaciones OOS/OOT","Remediación de integridad de datos de laboratorio"],
        delEN:["Method validation protocols and reports","Method transfer reports","Chromatography CSV packages","OOS investigation reports","ALCOA+ data integrity assessments"],
        delES:["Protocolos y reportes de validación de métodos","Reportes de transferencia de métodos","Paquetes CSV de cromatografía","Reportes de investigación OOS","Evaluaciones ALCOA+ de integridad de datos"] },
      { id:"tdm", category:"core", anchor:"training-docs", page:"training-documentation-management.html",
        titleEN:"Training & Documentation Management",
        titleES:"Capacitación y Gestión Documental",
        shortEN:"Role-based GxP training, SOP authoring and lifecycle management, and documentation systems that pass FDA and EMA inspections.",
        shortES:"Capacitación GxP basada en roles, redacción y ciclo de vida de SOPs, y sistemas documentales preparados para inspecciones FDA y EMA.",
        positioningEN:"QRC turns scattered SOPs and ad-hoc training into an inspection-ready system. We design role-based GxP curricula, author and harmonize SOPs across sites, implement document control platforms, and run inspection-readiness drills so the next FDA visit is uneventful.",
        positioningES:"QRC convierte SOPs dispersos y capacitación ad-hoc en un sistema listo para inspección. Diseñamos currículos GxP basados en roles, redactamos y armonizamos SOPs entre sitios, implementamos plataformas de control documental y ejecutamos simulacros de preparación para inspección para que la próxima visita FDA sea sin sobresaltos.",
        capEN:["Training needs analysis","Role-based curriculum design","SOP authoring and harmonization","Document control system implementation","Inspection-readiness training"],
        capES:["Análisis de necesidades de capacitación","Diseño de currículo basado en roles","Redacción y armonización de SOPs","Implementación de sistemas de control documental","Capacitación de preparación para inspecciones"],
        delEN:["Training matrices","Qualification and training records","Harmonized SOP libraries","Document control SOPs","Inspection-readiness packages"],
        delES:["Matrices de capacitación","Registros de calificación y entrenamiento","Bibliotecas de SOPs armonizadas","SOPs de control documental","Paquetes de preparación para inspecciones"] },
      { id:"pm", category:"core", anchor:"project-management", page:"project-management.html",
        titleEN:"Project Management",
        titleES:"Gestión de Proyectos",
        shortEN:"Full project lifecycle for regulated facility builds, line transfers, and validation programs — initiation through closeout.",
        shortES:"Ciclo de vida completo de proyectos para construcciones reguladas, transferencias de líneas y programas de validación — desde inicio hasta cierre.",
        positioningEN:"QRC project managers run regulated facility builds, line transfers, and validation programs with the discipline regulated industries demand. From integrated schedules to risk registers and stakeholder governance, we deliver predictable outcomes and complete closeout documentation.",
        positioningES:"Los gerentes de proyecto de QRC dirigen construcciones reguladas, transferencias de líneas y programas de validación con la disciplina que exigen las industrias reguladas. Desde cronogramas integrados hasta registros de riesgos y gobernanza de interesados, entregamos resultados predecibles y documentación de cierre completa.",
        capEN:["Project initiation and chartering","Integrated planning and scheduling","Risk management and mitigation","Stakeholder communication and governance","Lessons learned and closeout"],
        capES:["Inicio y carta de proyecto","Planificación y cronograma integrados","Gestión y mitigación de riesgos","Comunicación con interesados y gobernanza","Lecciones aprendidas y cierre"],
        delEN:["Project charters","Integrated schedules","Risk registers","Status dashboards","Closeout reports"],
        delES:["Cartas de proyecto","Cronogramas integrados","Registros de riesgos","Tableros de estatus","Reportes de cierre"] },
      { id:"is", category:"core", anchor:"implementation-support", page:"implementation-support.html",
        titleEN:"Implementation Support",
        titleES:"Soporte de Implementación",
        shortEN:"Embedded specialists who execute equipment, system, and platform upgrades inside regulated environments without disrupting operations.",
        shortES:"Especialistas embebidos que ejecutan actualizaciones de equipos, sistemas y plataformas en entornos regulados sin interrumpir operaciones.",
        positioningEN:"When change windows are tight and shutdowns are expensive, QRC embeds specialists on the floor to execute. Our consultants handle technology transfer, equipment changeovers, regulated software rollouts, and post-implementation reviews — keeping production moving while compliance documentation stays current.",
        positioningES:"Cuando las ventanas de cambio son estrechas y los paros son costosos, QRC embebe especialistas en piso para ejecutar. Nuestros consultores manejan transferencia tecnológica, cambios de equipo, despliegues de software regulado y revisiones post-implementación — manteniendo la producción en marcha mientras la documentación de cumplimiento permanece al día.",
        capEN:["Technology transfer execution","Equipment upgrade and changeover support","Regulated software rollout","Change implementation support","On-floor technical resources"],
        capES:["Ejecución de transferencia tecnológica","Soporte en upgrades y cambios de equipo","Despliegue de software regulado","Soporte de implementación de cambios","Recursos técnicos en piso"],
        delEN:["Implementation playbooks","Change implementation packages","Qualification re-execution reports","Post-implementation reviews","Knowledge-transfer kits"],
        delES:["Manuales de implementación","Paquetes de implementación de cambios","Reportes de re-ejecución de calificación","Revisiones post-implementación","Kits de transferencia de conocimiento"] }
    ],
    tech: [
      { id:"tech-eas", category:"tech", anchor:"tech-enterprise-apps", page:"enterprise-applications-solutions.html",
        titleEN:"Enterprise Applications & Solutions",
        titleES:"Aplicaciones y Soluciones Empresariales",
        shortEN:"Validated rollouts of ERP, LIMS, eQMS, DMS, and MES — designed, implemented, and qualified for 21 CFR Part 11 environments.",
        shortES:"Implantaciones validadas de ERP, LIMS, eQMS, DMS y MES — diseñadas, ejecutadas y calificadas para entornos 21 CFR Parte 11.",
        positioningEN:"QRC selects, configures, validates, and deploys the enterprise platforms that run regulated operations — ERP (SAP, Oracle, NetSuite), LIMS, eQMS, DMS, and MES. Every rollout is built for 21 CFR Part 11, ALCOA+ data integrity, and the realities of GxP audits.",
        positioningES:"QRC selecciona, configura, valida y despliega las plataformas empresariales que operan industrias reguladas — ERP (SAP, Oracle, NetSuite), LIMS, eQMS, DMS y MES. Cada implementación se construye para 21 CFR Parte 11, integridad de datos ALCOA+ y la realidad de auditorías GxP.",
        capEN:["ERP validation (SAP, Oracle, NetSuite)","LIMS selection and implementation","eQMS rollout and migration","DMS deployment","MES integration and validation"],
        capES:["Validación de ERP (SAP, Oracle, NetSuite)","Selección e implementación de LIMS","Despliegue y migración de eQMS","Implementación de DMS","Integración y validación de MES"],
        delEN:["Validation master plans","Configuration specifications","IQ/OQ/PQ packages","Integration and UAT test reports","Validated production environments"],
        delES:["Planes maestros de validación","Especificaciones de configuración","Paquetes IQ/OQ/PQ","Reportes de pruebas de integración y UAT","Ambientes productivos validados"] },
      { id:"tech-bts", category:"tech", anchor:"tech-business-services", page:"business-technology-services.html",
        titleEN:"Business Technology Services",
        titleES:"Servicios de Tecnología para el Negocio",
        shortEN:"Day-to-day technology operations for regulated companies — managed services, application support, integrations, and compliance-aware infrastructure.",
        shortES:"Operaciones tecnológicas cotidianas para empresas reguladas — servicios gestionados, soporte aplicativo, integraciones e infraestructura alineada a compliance.",
        positioningEN:"QRC keeps regulated technology running. Managed services, application support, system integration, and compliance-aware infrastructure — backed by run-books, SLAs, and an operational discipline that respects every GxP control point.",
        positioningES:"QRC mantiene operativa la tecnología regulada. Servicios gestionados, soporte aplicativo, integración de sistemas e infraestructura alineada a compliance — respaldados por run-books, SLAs y disciplina operativa que respeta cada punto de control GxP.",
        capEN:["Managed IT services","Application support and maintenance","System integration","Compliance-aware infrastructure","Helpdesk and incident response"],
        capES:["Servicios de TI gestionados","Soporte y mantenimiento aplicativo","Integración de sistemas","Infraestructura alineada a compliance","Mesa de ayuda y respuesta a incidentes"],
        delEN:["Service-level agreements","Operational run-books","Integration architecture diagrams","Infrastructure compliance reports","Monthly operations dashboards"],
        delES:["Acuerdos de nivel de servicio","Manuales operativos (run-books)","Diagramas de arquitectura de integración","Reportes de cumplimiento de infraestructura","Tableros mensuales de operaciones"] },
      { id:"tech-dts", category:"tech", anchor:"tech-digital-transformation", page:"digital-transformation-services.html",
        titleEN:"Digital Transformation Services",
        titleES:"Servicios de Transformación Digital",
        shortEN:"Process automation, data integrity programs, and analytics platforms that move regulated operations from paper to digital without breaking compliance.",
        shortES:"Automatización de procesos, programas de integridad de datos y plataformas de analítica que llevan operaciones reguladas del papel a lo digital.",
        positioningEN:"QRC moves regulated operations from paper-based to digital without breaking compliance. We build paper-to-digital roadmaps, run ALCOA+ data integrity programs, assess automation and RPA opportunities, deploy analytics, and roll out electronic batch records (EBR) that inspectors actually trust.",
        positioningES:"QRC mueve operaciones reguladas del papel a lo digital sin romper el cumplimiento. Construimos hojas de ruta papel-a-digital, ejecutamos programas ALCOA+ de integridad de datos, evaluamos oportunidades de automatización y RPA, desplegamos analítica e implementamos registros electrónicos de lote (EBR) que los inspectores realmente confían.",
        capEN:["Paper-to-digital transformation roadmaps","ALCOA+ data integrity programs","Automation and RPA assessments","Analytics and operational dashboards","Electronic batch records (EBR)"],
        capES:["Hojas de ruta papel-a-digital","Programas ALCOA+ de integridad de datos","Evaluaciones de automatización y RPA","Analítica y tableros operativos","Registros electrónicos de lote (EBR)"],
        delEN:["Digital transformation roadmaps","Data integrity assessment reports","Automation business cases","Analytics deployments","EBR rollout packages"],
        delES:["Hojas de ruta de transformación digital","Reportes de evaluación de integridad de datos","Casos de negocio de automatización","Despliegues de analítica","Paquetes de implementación de EBR"] },
      { id:"tech-its", category:"tech", anchor:"tech-it-strategy", page:"it-strategy-solutions.html",
        titleEN:"IT Strategy & Solutions",
        titleES:"Estrategia y Soluciones de TI",
        shortEN:"Multi-year IT roadmaps, vendor evaluations, and architecture decisions tied to GxP, security, and growth priorities.",
        shortES:"Hojas de ruta de TI multianuales, evaluaciones de proveedores y decisiones de arquitectura ligadas a prioridades GxP, seguridad y crecimiento.",
        positioningEN:"QRC translates business strategy into IT roadmaps the regulated business can execute. Multi-year planning, application portfolio assessments, vendor evaluations, GxP-aware enterprise architecture, and IT governance models that scale with the company.",
        positioningES:"QRC traduce estrategia de negocio en hojas de ruta de TI que la empresa regulada puede ejecutar. Planificación multianual, evaluaciones de portafolio aplicativo, evaluaciones de proveedores, arquitectura empresarial alineada a GxP y modelos de gobernanza de TI que escalan con la empresa.",
        capEN:["IT roadmap development","Application portfolio assessment","Vendor evaluation and selection","GxP-aware enterprise architecture","IT governance and operating model"],
        capES:["Desarrollo de hojas de ruta de TI","Evaluación de portafolio aplicativo","Evaluación y selección de proveedores","Arquitectura empresarial alineada a GxP","Gobernanza y modelo operativo de TI"],
        delEN:["Three-year IT roadmaps","Portfolio rationalization reports","Vendor evaluation scorecards","Architecture decision records","IT governance frameworks"],
        delES:["Hojas de ruta de TI a tres años","Reportes de racionalización de portafolio","Tarjetas de evaluación de proveedores","Registros de decisiones de arquitectura","Marcos de gobernanza de TI"] }
    ]
  };

  if (services.core.length !== 8) console.error('Core count mismatch');
  if (services.tech.length !== 4) console.error('Tech count mismatch');

  function getServiceById(id) {
    var all = services.core.concat(services.tech);
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }

  // ──────────────────────────────
  // i18n strings
  // ──────────────────────────────
  var i18n = {
    en: {
      'a11y.skip':'Skip to content','a11y.facebook':'Visit QRC Group on Facebook','a11y.linkedin':'Visit QRC Group on LinkedIn','a11y.lang.group':'Language','a11y.logo':'QRC Group home','a11y.logo.alt':'QRC Group — 20 Years','a11y.nav.main':'Main navigation','a11y.menu.open':'Open navigation menu','a11y.menu.close':'Close menu','a11y.crumb':'Breadcrumb',

      'nav.home':'Home','nav.about':'About','nav.core':'Core Services','nav.tech':'Technology Services','nav.results':'Results','nav.training':'Training','nav.careers':'Careers','nav.contact':'Contact','nav.cta':'Contact Us',

      'hero.eyebrow':'Regulatory Consulting Since 2005',
      'hero.title':'Regulatory Compliance and <span class="accent">Validation Consulting</span> for Regulated Industries',
      'hero.sub':'QRC Group helps pharmaceutical, medical device, biotechnology, and regulated manufacturing teams strengthen quality systems, validation, documentation, training, and project execution.',
      'hero.cta1':'Talk to a QRC Consultant','hero.cta2':'View Proven Results','crumb.home':'Home',

      'industry.label':'Serving','industry.pharma':'Pharmaceutical','industry.medical':'Medical Device','industry.biotech':'Biotechnology','industry.manuf':'Regulated Manufacturing','industry.qsv':'Quality Systems & Validation',

      'stats.years':'Years Experience','stats.businesses':'Businesses Consulted','stats.connections':'Active Connections','stats.offices':'Office Locations',

      'home.about.top':'About Our','home.about.bot':'Company','home.about.p1':'QRC Group was founded in 2005 in Puerto Rico. We specialize in regulatory compliance and validation consulting for pharmaceutical, medical device, biotechnology, and regulated manufacturing industries.','home.about.p2':'Two decades on, our practitioners deliver the validation, regulatory, and quality programs that let regulated companies launch on time and stay inspection-ready.','home.about.cta':'Our Story',

      'home.team.eyebrow':'Leadership','home.team.title':'Founders &amp; Practitioners','home.team.cta':'Meet the Team',

      'home.core.eyebrow':'Our Practice','home.core.title':'Core Services','home.core.intro':'Eight specialized practice areas — from qualification protocols to full project execution — covering the complete regulatory and validation lifecycle.','home.core.cta':'Explore Core Services',

      'home.tech.eyebrow':'Technology for Regulated Industries','home.tech.title':'Technology Services','home.tech.intro':'Validated enterprise platforms, day-to-day operations, digital transformation, and IT strategy — built for GxP, 21 CFR Part 11, and ALCOA+ environments.','home.tech.cta':'Explore Technology Services',

      'home.industries.eyebrow':'Industries','home.industries.title':'We Serve','home.industries.intro':'Two decades supporting regulated manufacturers across Puerto Rico, Florida, and the mainland US — each engagement scoped to the specific regulatory framework.',
      'industries.pharma.title':'Pharmaceutical','industries.pharma.desc':'Quality systems, validation, and compliance support for FDA, EMA, and EU GMP-regulated pharmaceutical manufacturers.',
      'industries.medical.title':'Medical Device','industries.medical.desc':'Equipment qualification, design controls, and documentation management for medical device makers under 21 CFR 820 and ISO 13485.',
      'industries.biotech.title':'Biotechnology','industries.biotech.desc':'GxP compliance, process validation, and quality assurance for biotech operations including cell, gene, and biologics processes.',
      'industries.manuf.title':'Regulated Manufacturing','industries.manuf.desc':'Facilities and equipment qualification, environmental monitoring, and project management for highly regulated production sites.',

      'home.results.eyebrow':'Proven','home.results.title':'Results','home.results.intro':'A sample of completed engagements across pharmaceutical, medical device, and regulated manufacturing clients.','home.results.cta':'View All Results',
      'results.outcome.1':'Plant Maintenance Shutdown Management and Remediation Plan completed before timeline without impact to start-up.',
      'results.outcome.2':'Production line implementation in under six months — project management through equipment qualification and CSV.',
      'results.outcome.3':'Full Qualification Cycle of Manufacturing Area (formulation, filling, packaging) with FDA and local agency approval.',
      'results.outcome.4':'Class 10 Lab Qualification, Commissioning, and FDA approval of new products.',
      'results.outcome.5':'Grade D Environmental Monitoring program, disinfectant selection and validation, compressed-air monitoring.',
      'results.outcome.6':'Business Continuity Plan development and execution.',

      'home.training.eyebrow':'Training','home.training.title':'GMP Training Built by Practitioners','home.training.intro':'Programs designed by industry subject-matter experts with an average of 20 years of real-world and teaching experience. Classroom and on-site delivery for teams across Puerto Rico, Florida, and the mainland US.','home.training.cta':'View Training Programs',

      'home.certs.eyebrow':'Compliance','home.certs.title':'Credentials &amp; Recognition','home.certs.intro':'Recognized small-business and industry credentials supporting federal, regional, and private-sector engagements.',
      'certs.hubzone.title':'HUBZone Certified','certs.hubzone.sub':'U.S. Small Business Administration',
      'certs.prmsdc.title':'PRMSDC Member','certs.prmsdc.sub':'Puerto Rico Minority Supplier Development Council',
      'certs.industriales.title':'Industriales de Puerto Rico','certs.industriales.sub':'Industry Association Member',
      'certs.smallbiz.title':'Small-Business Recognition','certs.smallbiz.sub':'Trusted credentials for public and private sector work',

      'home.clients.lbl':'Trusted across regulated industries',
      'home.clients.eyebrow':'Selected Clients',
      'home.clients.title':'Some of Our Clients',
      'home.clients.sub':'Trusted by leading life sciences, medical device, and healthcare organizations.',
      'clients.tile1':'Top-20 Pharmaceutical','clients.tile1.meta':'Manufacturer',
      'clients.tile2':'Global Medical Device','clients.tile2.meta':'OEM',
      'clients.tile3':'Leading Biotechnology','clients.tile3.meta':'Cell &amp; Gene',
      'clients.tile4':'Regulated CMO','clients.tile4.meta':'Multi-site',

      'home.support.eyebrow':'Who','home.support.title':'We Support','home.support.sub':'The professionals and teams we help improve quality, compliance, operations, and training.',
      'support.1.title':'Quality &amp; Compliance Leaders','support.1.desc':'QA, QC, and regulatory directors who own inspection-readiness.',
      'support.2.title':'Operations &amp; Manufacturing Managers','support.2.desc':'Plant and site leadership running regulated production.',
      'support.3.title':'Validation &amp; CQV Teams','support.3.desc':'Commissioning, qualification, and validation engineers.',
      'support.4.title':'Engineering &amp; Maintenance Professionals','support.4.desc':'Process, automation, and reliability engineering teams.',
      'support.5.title':'Supply Chain &amp; Warehouse Teams','support.5.desc':'Materials, logistics, and warehouse compliance staff.',
      'support.6.title':'Training &amp; Workforce Development','support.6.desc':'Learning, HR, and workforce development partners.',

      'home.careers.eyebrow':'Careers','home.careers.title':'Build a Career in Regulated Industries','home.careers.copy':'QRC matches consultants with the right regulated-industry roles. Validation engineers, quality professionals, project managers, and technology specialists welcome.','home.careers.cta':'Open Opportunities',

      'cta.contact.title':'Ready to talk about your project?','cta.contact.copy':'Quality systems, validation, technology, or training — a QRC consultant will follow up within one business day.','cta.contact.btn':'Talk to a QRC Consultant',

      'page.about.title':'About QRC Group','page.about.sub':'Twenty years building the regulatory, validation, and quality programs that regulated industries depend on. Founded in Puerto Rico, serving the Americas.',
      'about.story.eyebrow':'Our Story','about.story.title':'Two Decades of Regulated Industry Practice','about.story.p1':'Qualification and Regulatory Consultants Group was founded in 2005 in Puerto Rico to address a clear need: pharmaceutical, medical device, biotechnology, and regulated manufacturing companies on the island — and across the mainland US — needed senior practitioners who could navigate FDA, EMA, and EU GMP frameworks without learning curves.','about.story.p2':'Today QRC operates from offices in Caguas, PR and Weston, FL, with a network of 230+ active consultants who have completed engagements at more than 130 regulated companies.','about.story.p3':'Our work covers the full regulatory and validation lifecycle — from quality systems and equipment qualification to enterprise technology and digital transformation. The constant: senior practitioners, rigorous documentation, and outcomes that survive inspection.',
      'about.mv.eyebrow':'Our','about.mv.title':'Mission &amp; Vision','about.mv.mission.title':'Mission','about.mv.mission.copy':'Provide our customers with the best resources and consulting services in the industry, using the most advanced and creative solutions to fulfill our clients\' needs.','about.mv.vision.title':'Vision','about.mv.vision.copy':'Become the undisputed service provider leader in the life sciences manufacturing field, and the go-to choice for clients and consultants alike.',
      'about.team.eyebrow':'Leadership','about.team.title':'Founders','about.team.eira.role':'President &amp; General Director','about.team.eira.bio':'Co-Founder of QRC Group. Licensed Chemist and Quality Certified Auditor (ASQ). Over 20 years in analytical laboratories and pharmaceutical Quality Assurance. BS Chemistry, University of Puerto Rico.','about.team.eric.role':'Co-Founder','about.team.eric.bio':'Co-Founder of QRC Group. Over 20 years in manufacturing and the pharmaceutical industry. BS Industrial Engineering, Polytechnic University of Puerto Rico.',
      'about.proof.lbl':'Founded in Puerto Rico','about.proof.s1':'Years of Service','about.proof.s2':'Businesses Consulted','about.proof.s3':'Office Locations',

      'page.core.title':'Core Services','page.core.sub':'Eight specialized practice areas covering quality systems, qualification, validation, training, project management, and implementation support — for FDA, EMA, and EU GMP-regulated industries.','core.intro':'Each Core Service is led by senior practitioners with decades of regulated-industry experience. Click into a service to see the full capability set, deliverables, and applicable industries.',

      'page.tech.title':'Technology Services','page.tech.sub':'Validated enterprise platforms, business technology operations, digital transformation, and multi-year IT strategy — purpose-built for 21 CFR Part 11, GxP, and ALCOA+ environments.','tech.intro':'Four technology service lines, each engineered for the realities of regulated industries: GxP, CSV, 21 CFR Part 11, ALCOA+ data integrity, ERP, LIMS, eQMS, DMS, MES, EBR, automation, and IT strategy.',
      'tech.why.title':'Built for Regulated Technology','tech.why.intro':'Generic IT consulting cannot survive a GxP audit. QRC technology engagements ship with validation packages, traceability matrices, and inspection-ready documentation as the default — not as an afterthought.',
      'tech.why.1':'CSV lifecycle and 21 CFR Part 11 alignment baked in','tech.why.2':'ALCOA+ data integrity by design','tech.why.3':'Validation deliverables on every release','tech.why.4':'Vendor-neutral architecture decisions','tech.why.5':'Senior practitioners — no learning curve on regulated environments',

      'page.results.title':'Proven Results','page.results.sub':'A representative sample of completed regulated-industry engagements — from full qualification cycles to business continuity programs.','results.intro':'Since 2005, QRC has delivered measurable outcomes across pharmaceutical, medical device, and regulated manufacturing clients. The work below is representative; full case material is available on request.','results.industries.title':'Industries Represented','results.clients.lbl':'Selected client segments','results.cta.title':'Want to discuss your project?','results.cta.copy':'A QRC consultant can walk through similar engagements relevant to your facility and regulatory framework.','results.cta.btn':'Talk to a QRC Consultant',

      'page.training.title':'Training &amp; Development','page.training.sub':'GxP, GMP, data integrity, and risk management training designed by senior practitioners. Classroom or on-site, in English or Spanish.','training.intro':'QRC Group courses build practical understanding of the tools, functions, and structures behind effective quality systems. Instructors are subject-matter experts with an average of 20 years of real-world and teaching experience.','training.cta':'Request Training Information','training.programs.title':'Programs','training.programs.1':'Data Integrity','training.programs.2':'Risk Management','training.programs.3':'Business Continuity','training.programs.4':'GMP Fundamentals','training.programs.5':'Customized Training','training.delivery.title':'Delivery','training.delivery.1':'Classroom — scheduled in-person classes','training.delivery.2':'On-Site — instructor-led at client facility','training.delivery.3':'Content built with industry experts','training.delivery.4':'Tailored to job role and compliance level','training.why.title':'Why QRC Training?','training.why.1':'Instructors with an average of 20 years real-world and teaching experience','training.why.2':"Multiple delivery methods to fit your team's schedule",'training.why.3':'Course content built in collaboration with industry experts','training.why.4':'Supports good governance, agile assurance, and continuous improvement','training.why.5':'Designed for professionals at every level of compliance maturity',

      'page.careers.title':'Open Opportunities','page.careers.sub':'Validation engineers, quality professionals, project managers, and regulated-industry technology specialists — find your next role with QRC.','careers.intro':'QRC matches consultants with the right regulated-industry roles. We work with pharmaceutical, medical device, biotechnology, and regulated manufacturing clients across Puerto Rico, Florida, and the mainland US.','careers.why.title':'Why Build a Career at QRC?','careers.why.1.title':'Regulated work, real impact','careers.why.1.desc':'Engagements at top-20 pharma, leading medical device, and growth-stage biotech clients. Your work ships to inspection-ready production.','careers.why.2.title':'Senior practitioner culture','careers.why.2.desc':'Average 20+ years of GxP experience across the team. You learn from people who have written the SOPs FDA reads.','careers.why.3.title':'Two-office reach','careers.why.3.desc':'Caguas, PR and Weston, FL offices serving Puerto Rico, Florida, and mainland US clients. Bilingual practice, native fluency expected for many roles.','careers.positions.title':'Open Positions','careers.positions.copy':'Live openings are tracked in our Zoho Recruit portal. Click any role for details and to apply.','careers.position.apply':'Apply','careers.position.1.title':'Validation Engineer (Senior)','careers.position.1.meta':'Caguas, PR · On-site or hybrid · Pharmaceutical','careers.position.2.title':'Quality Systems Specialist','careers.position.2.meta':'Weston, FL · On-site · Medical Device','careers.position.3.title':'Computer System Validation (CSV) Lead','careers.position.3.meta':'Remote-friendly · Biotechnology','careers.position.4.title':'Project Manager — Regulated Manufacturing','careers.position.4.meta':'Caguas, PR · On-site · Manufacturing',

      'page.contact.title':'Contact QRC','page.contact.sub':'Tell us about your project — quality systems, validation, technology, or training. A QRC consultant will respond within one business day.','contact.intro':'QRC Group operates from offices in Caguas, Puerto Rico and Weston, Florida, serving clients across Puerto Rico, Florida, and the mainland US.','contact.pr.title':'Puerto Rico Office','contact.pr.line1':'28 Aquamarina Villa Blanca','contact.pr.line2':'Caguas, PR 00725','contact.fl.title':'Florida Office','contact.fl.line1':'Suite 196, 1555 Bonaventure Blvd.','contact.fl.line2':'Weston, FL 33326','contact.email.title':'Email','contact.hours.title':'Business Hours','contact.hours.copy':'Monday–Friday, 8:00am–5:00pm AST/EST',
      'contact.form.title':'Send Us a Message','contact.form.name':'Full Name <sup>*</sup>','contact.form.email':'Email <sup>*</sup>','contact.form.company':'Company','contact.form.phone':'Phone','contact.form.interest':'Service of Interest','contact.form.message':'Message <sup>*</sup>','contact.form.submit':'Send Message','contact.form.note':'Thank you. A QRC consultant will follow up within one business day.','contact.form.select.placeholder':'Select a service…',

      'detail.positioning.title':'Practice Overview','detail.cap.title':'Capabilities','detail.del.title':'Deliverables','detail.industries.title':'Industries &amp; Applications','detail.industries.copy':'This service is delivered to clients across pharmaceutical, medical device, biotechnology, and regulated manufacturing operations.','detail.cta.title':'Talk to a Specialist','detail.cta.copy':'Set up a call with a QRC practitioner who has delivered this service across multiple regulated facilities.','detail.cta.btn':'Talk to a QRC Consultant','detail.related.title':'Related Services',

      'svc.learnmore':'Learn more','tech.learnmore':'Talk to a specialist','tech.cap.label':'Capabilities',

      'footer.about':'Qualification and Regulatory Consultants Group: regulatory compliance, validation, quality systems, and technology consulting for pharmaceutical, medical device, biotechnology, and regulated manufacturing industries since 2005.','footer.col.core':'Core Services','footer.col.tech':'Technology Services','footer.col.company':'Company','footer.col.contact':'Contact','footer.rights':'All rights reserved.','footer.tagline':'Regulatory compliance · Validation · Quality systems · Technology'
    },
    es: {
      'a11y.skip':'Saltar al contenido','a11y.facebook':'Visitar QRC Group en Facebook','a11y.linkedin':'Visitar QRC Group en LinkedIn','a11y.lang.group':'Idioma','a11y.logo':'Inicio QRC Group','a11y.logo.alt':'QRC Group — 20 Años','a11y.nav.main':'Navegación principal','a11y.menu.open':'Abrir menú de navegación','a11y.menu.close':'Cerrar menú','a11y.crumb':'Migas de pan',

      'nav.home':'Inicio','nav.about':'Nosotros','nav.core':'Servicios Principales','nav.tech':'Servicios de Tecnología','nav.results':'Resultados','nav.training':'Capacitación','nav.careers':'Carreras','nav.contact':'Contacto','nav.cta':'Contáctanos',

      'hero.eyebrow':'Consultoría Regulatoria desde 2005',
      'hero.title':'Cumplimiento Regulatorio y <span class="accent">Consultoría de Validación</span> para Industrias Reguladas',
      'hero.sub':'QRC Group apoya a equipos farmacéuticos, de dispositivos médicos, biotecnología y manufactura regulada en sistemas de calidad, validación, documentación, capacitación y ejecución de proyectos.',
      'hero.cta1':'Habla con un Consultor QRC','hero.cta2':'Ver Resultados Comprobados','crumb.home':'Inicio',

      'industry.label':'Servimos','industry.pharma':'Farmacéutica','industry.medical':'Dispositivos Médicos','industry.biotech':'Biotecnología','industry.manuf':'Manufactura Regulada','industry.qsv':'Sistemas de Calidad y Validación',

      'stats.years':'Años de Experiencia','stats.businesses':'Empresas Asesoradas','stats.connections':'Conexiones Activas','stats.offices':'Oficinas',

      'home.about.top':'Sobre','home.about.bot':'Nosotros','home.about.p1':'QRC Group fue fundado en 2005 en Puerto Rico. Nos especializamos en consultoría de cumplimiento regulatorio y validación para industrias farmacéutica, de dispositivos médicos, biotecnología y manufactura regulada.','home.about.p2':'Dos décadas después, nuestros profesionales entregan los programas de validación, regulatorios y de calidad que permiten a empresas reguladas lanzar a tiempo y mantenerse listas para inspección.','home.about.cta':'Nuestra Historia',

      'home.team.eyebrow':'Liderazgo','home.team.title':'Fundadores y Profesionales','home.team.cta':'Conoce al Equipo',

      'home.core.eyebrow':'Nuestras Prácticas','home.core.title':'Servicios Principales','home.core.intro':'Ocho áreas de práctica especializadas — desde protocolos de calificación hasta ejecución completa de proyectos — cubriendo el ciclo regulatorio y de validación completo.','home.core.cta':'Explorar Servicios Principales',

      'home.tech.eyebrow':'Tecnología para Industrias Reguladas','home.tech.title':'Servicios de Tecnología','home.tech.intro':'Plataformas empresariales validadas, operaciones diarias, transformación digital y estrategia de TI — diseñados para entornos GxP, 21 CFR Parte 11 y ALCOA+.','home.tech.cta':'Explorar Servicios de Tecnología',

      'home.industries.eyebrow':'Industrias','home.industries.title':'Que Servimos','home.industries.intro':'Dos décadas apoyando manufactureros regulados en Puerto Rico, Florida y los EE. UU. continentales — cada engagement adaptado al marco regulatorio específico.',
      'industries.pharma.title':'Farmacéutica','industries.pharma.desc':'Sistemas de calidad, validación y soporte de cumplimiento para fabricantes farmacéuticos regulados por FDA, EMA y EU GMP.',
      'industries.medical.title':'Dispositivos Médicos','industries.medical.desc':'Calificación de equipos, controles de diseño y gestión documental para fabricantes bajo 21 CFR 820 e ISO 13485.',
      'industries.biotech.title':'Biotecnología','industries.biotech.desc':'Cumplimiento GxP, validación de procesos y aseguramiento de calidad para operaciones de biotecnología incluyendo terapias celulares, génicas y biológicos.',
      'industries.manuf.title':'Manufactura Regulada','industries.manuf.desc':'Calificación de instalaciones y equipos, monitoreo ambiental y gestión de proyectos para sitios productivos altamente regulados.',

      'home.results.eyebrow':'Resultados','home.results.title':'Comprobados','home.results.intro':'Una muestra de engagements completados con clientes farmacéuticos, de dispositivos médicos y de manufactura regulada.','home.results.cta':'Ver Todos los Resultados',
      'results.outcome.1':'Plan de Gestión y Remediación de Paro de Mantenimiento de Planta completado antes del cronograma sin impacto en arranque.',
      'results.outcome.2':'Implementación de línea de producción en menos de seis meses — gestión de proyecto, calificación de equipos y CSV.',
      'results.outcome.3':'Ciclo Completo de Calificación de Área de Manufactura (formulación, llenado, empaque) con aprobación FDA y agencia local.',
      'results.outcome.4':'Calificación, Comisionamiento y aprobación FDA de Laboratorio Clase 10 para nuevos productos.',
      'results.outcome.5':'Programa de Monitoreo Ambiental Grado D, selección y validación de desinfectantes, monitoreo de aire comprimido.',
      'results.outcome.6':'Desarrollo y ejecución de Plan de Continuidad de Negocio.',

      'home.training.eyebrow':'Capacitación','home.training.title':'Capacitación GMP por Profesionales','home.training.intro':'Programas diseñados por expertos con un promedio de 20 años de experiencia real y docente. Modalidad presencial y en sitio para equipos en Puerto Rico, Florida y EE. UU. continentales.','home.training.cta':'Ver Programas de Capacitación',

      'home.certs.eyebrow':'Cumplimiento','home.certs.title':'Credenciales y Reconocimiento','home.certs.intro':'Credenciales reconocidas como pequeña empresa y de industria que respaldan engagements federales, regionales y del sector privado.',
      'certs.hubzone.title':'Certificado HUBZone','certs.hubzone.sub':'Administración de Pequeños Negocios de EE. UU.',
      'certs.prmsdc.title':'Miembro PRMSDC','certs.prmsdc.sub':'Puerto Rico Minority Supplier Development Council',
      'certs.industriales.title':'Industriales de Puerto Rico','certs.industriales.sub':'Miembro de Asociación Industrial',
      'certs.smallbiz.title':'Reconocimiento de Pequeño Negocio','certs.smallbiz.sub':'Credenciales confiables para trabajo del sector público y privado',

      'home.clients.lbl':'De confianza en industrias reguladas',
      'home.clients.eyebrow':'Clientes Destacados',
      'home.clients.title':'Algunos de Nuestros Clientes',
      'home.clients.sub':'De confianza para organizaciones líderes de ciencias de la vida, dispositivos médicos y salud.',
      'clients.tile1':'Farmacéutica Top-20','clients.tile1.meta':'Manufacturero',
      'clients.tile2':'Dispositivos Médicos Globales','clients.tile2.meta':'OEM',
      'clients.tile3':'Biotecnología Líder','clients.tile3.meta':'Celular y Génica',
      'clients.tile4':'CMO Regulado','clients.tile4.meta':'Multi-sitio',

      'home.support.eyebrow':'A Quién','home.support.title':'Apoyamos','home.support.sub':'Profesionales y equipos a quienes apoyamos para mejorar calidad, cumplimiento, operaciones y capacitación.',
      'support.1.title':'Líderes de Calidad y Cumplimiento','support.1.desc':'Directores de QA, QC y regulatorios responsables de la preparación para inspección.',
      'support.2.title':'Gerentes de Operaciones y Manufactura','support.2.desc':'Liderazgo de planta y sitio que opera producción regulada.',
      'support.3.title':'Equipos de Validación y CQV','support.3.desc':'Ingenieros de comisionamiento, calificación y validación.',
      'support.4.title':'Profesionales de Ingeniería y Mantenimiento','support.4.desc':'Equipos de ingeniería de proceso, automatización y confiabilidad.',
      'support.5.title':'Equipos de Cadena de Suministro y Almacén','support.5.desc':'Personal de materiales, logística y cumplimiento en almacén.',
      'support.6.title':'Capacitación y Desarrollo de Personal','support.6.desc':'Aliados de aprendizaje, RR. HH. y desarrollo de personal.',

      'home.careers.eyebrow':'Carreras','home.careers.title':'Construye una Carrera en Industrias Reguladas','home.careers.copy':'QRC conecta consultores con los roles correctos en industrias reguladas. Damos la bienvenida a ingenieros de validación, profesionales de calidad, gerentes de proyecto y especialistas de tecnología.','home.careers.cta':'Oportunidades Abiertas',

      'cta.contact.title':'¿Listo para hablar de tu proyecto?','cta.contact.copy':'Sistemas de calidad, validación, tecnología o capacitación — un consultor QRC dará seguimiento en un día hábil.','cta.contact.btn':'Habla con un Consultor QRC',

      'page.about.title':'Sobre QRC Group','page.about.sub':'Veinte años construyendo los programas regulatorios, de validación y de calidad de los que dependen las industrias reguladas. Fundada en Puerto Rico, sirviendo a las Américas.',
      'about.story.eyebrow':'Nuestra Historia','about.story.title':'Dos Décadas de Práctica en Industria Regulada','about.story.p1':'Qualification and Regulatory Consultants Group fue fundado en 2005 en Puerto Rico para atender una necesidad clara: las empresas farmacéuticas, de dispositivos médicos, biotecnología y manufactura regulada en la isla — y en EE. UU. continental — necesitaban profesionales senior que pudieran navegar marcos FDA, EMA y EU GMP sin curvas de aprendizaje.','about.story.p2':'Hoy QRC opera desde oficinas en Caguas, PR y Weston, FL, con una red de más de 230 consultores activos que han completado engagements en más de 130 empresas reguladas.','about.story.p3':'Nuestro trabajo cubre el ciclo regulatorio y de validación completo — desde sistemas de calidad y calificación de equipos hasta tecnología empresarial y transformación digital. La constante: profesionales senior, documentación rigurosa y resultados que sobreviven inspección.',
      'about.mv.eyebrow':'Nuestra','about.mv.title':'Misión y Visión','about.mv.mission.title':'Misión','about.mv.mission.copy':'Brindar a nuestros clientes los mejores recursos y servicios de consultoría de la industria, usando soluciones avanzadas y creativas para satisfacer sus necesidades.','about.mv.vision.title':'Visión','about.mv.vision.copy':'Convertirnos en el proveedor líder indiscutido en manufactura de ciencias de la vida, y la opción preferida tanto para clientes como para consultores.',
      'about.team.eyebrow':'Liderazgo','about.team.title':'Fundadores','about.team.eira.role':'Presidenta y Directora General','about.team.eira.bio':'Cofundadora de QRC Group. Química Licenciada y Auditora Certificada de Calidad (ASQ). Más de 20 años en laboratorios analíticos y aseguramiento de calidad farmacéutica. BS en Química, Universidad de Puerto Rico.','about.team.eric.role':'Cofundador','about.team.eric.bio':'Cofundador de QRC Group. Más de 20 años en manufactura y la industria farmacéutica. BS en Ingeniería Industrial, Universidad Politécnica de Puerto Rico.',
      'about.proof.lbl':'Fundada en Puerto Rico','about.proof.s1':'Años de Servicio','about.proof.s2':'Empresas Asesoradas','about.proof.s3':'Oficinas',

      'page.core.title':'Servicios Principales','page.core.sub':'Ocho áreas de práctica especializadas que cubren sistemas de calidad, calificación, validación, capacitación, gestión de proyectos y soporte de implementación — para industrias reguladas por FDA, EMA y EU GMP.','core.intro':'Cada Servicio Principal está liderado por profesionales senior con décadas de experiencia en industria regulada. Selecciona un servicio para ver el conjunto completo de capacidades, entregables e industrias aplicables.',

      'page.tech.title':'Servicios de Tecnología','page.tech.sub':'Plataformas empresariales validadas, operaciones de tecnología, transformación digital y estrategia de TI multianual — diseñados específicamente para entornos 21 CFR Parte 11, GxP y ALCOA+.','tech.intro':'Cuatro líneas de servicio tecnológicas, cada una construida para la realidad de industrias reguladas: GxP, CSV, 21 CFR Parte 11, integridad de datos ALCOA+, ERP, LIMS, eQMS, DMS, MES, EBR, automatización y estrategia de TI.',
      'tech.why.title':'Construido para Tecnología Regulada','tech.why.intro':'La consultoría de TI genérica no sobrevive una auditoría GxP. Los engagements tecnológicos de QRC se entregan con paquetes de validación, matrices de trazabilidad y documentación lista para inspección por defecto — no como complemento.',
      'tech.why.1':'Ciclo CSV y alineación 21 CFR Parte 11 incorporados','tech.why.2':'Integridad de datos ALCOA+ por diseño','tech.why.3':'Entregables de validación en cada release','tech.why.4':'Decisiones de arquitectura neutrales al proveedor','tech.why.5':'Profesionales senior — sin curva de aprendizaje en entornos regulados',

      'page.results.title':'Resultados Comprobados','page.results.sub':'Una muestra representativa de engagements completados en industria regulada — desde ciclos completos de calificación hasta programas de continuidad de negocio.','results.intro':'Desde 2005, QRC ha entregado resultados medibles a clientes farmacéuticos, de dispositivos médicos y de manufactura regulada. El trabajo a continuación es representativo; material de caso completo disponible bajo solicitud.','results.industries.title':'Industrias Representadas','results.clients.lbl':'Segmentos de cliente seleccionados','results.cta.title':'¿Quieres conversar sobre tu proyecto?','results.cta.copy':'Un consultor QRC puede recorrer engagements similares relevantes a tu instalación y marco regulatorio.','results.cta.btn':'Habla con un Consultor QRC',

      'page.training.title':'Capacitación y Desarrollo','page.training.sub':'Capacitación en GxP, GMP, integridad de datos y gestión de riesgos diseñada por profesionales senior. Aula o en sitio, en inglés o español.','training.intro':'Los cursos de QRC Group construyen entendimiento práctico de las herramientas, funciones y estructuras detrás de sistemas de calidad efectivos. Los instructores son expertos con un promedio de 20 años de experiencia real y docente.','training.cta':'Solicitar Información de Capacitación','training.programs.title':'Programas','training.programs.1':'Integridad de Datos','training.programs.2':'Gestión de Riesgos','training.programs.3':'Continuidad de Negocio','training.programs.4':'Fundamentos GMP','training.programs.5':'Capacitación Personalizada','training.delivery.title':'Modalidad','training.delivery.1':'Aula — clases presenciales programadas','training.delivery.2':'En sitio — instructor en las instalaciones del cliente','training.delivery.3':'Contenido elaborado con expertos de la industria','training.delivery.4':'Adaptado al rol y nivel de cumplimiento','training.why.title':'¿Por qué QRC Training?','training.why.1':'Instructores con un promedio de 20 años de experiencia real y docente','training.why.2':'Múltiples modalidades para ajustarse al equipo','training.why.3':'Contenido construido con expertos de la industria','training.why.4':'Apoya buen gobierno, aseguramiento ágil y mejora continua','training.why.5':'Diseñado para profesionales en cualquier nivel de madurez de cumplimiento',

      'page.careers.title':'Oportunidades Abiertas','page.careers.sub':'Ingenieros de validación, profesionales de calidad, gerentes de proyecto y especialistas de tecnología en industrias reguladas — encuentra tu próximo rol con QRC.','careers.intro':'QRC conecta consultores con los roles correctos en industrias reguladas. Trabajamos con clientes farmacéuticos, de dispositivos médicos, biotecnología y manufactura regulada en Puerto Rico, Florida y EE. UU. continentales.','careers.why.title':'¿Por qué Construir una Carrera en QRC?','careers.why.1.title':'Trabajo regulado, impacto real','careers.why.1.desc':'Engagements en farmacéuticas top-20, dispositivos médicos líderes y biotech en crecimiento. Tu trabajo llega a producción lista para inspección.','careers.why.2.title':'Cultura de profesionales senior','careers.why.2.desc':'Promedio de más de 20 años de experiencia GxP en el equipo. Aprendes de personas que han escrito los SOPs que la FDA lee.','careers.why.3.title':'Alcance bi-oficina','careers.why.3.desc':'Oficinas en Caguas, PR y Weston, FL sirviendo a clientes en Puerto Rico, Florida y EE. UU. continentales. Práctica bilingüe, fluidez nativa esperada para muchos roles.','careers.positions.title':'Posiciones Abiertas','careers.positions.copy':'Las vacantes en vivo se gestionan en nuestro portal Zoho Recruit. Selecciona un rol para ver detalles y postular.','careers.position.apply':'Postular','careers.position.1.title':'Ingeniero de Validación (Senior)','careers.position.1.meta':'Caguas, PR · Presencial o híbrido · Farmacéutica','careers.position.2.title':'Especialista en Sistemas de Calidad','careers.position.2.meta':'Weston, FL · Presencial · Dispositivos Médicos','careers.position.3.title':'Líder de Validación de Sistemas Computarizados (CSV)','careers.position.3.meta':'Remoto-amigable · Biotecnología','careers.position.4.title':'Gerente de Proyecto — Manufactura Regulada','careers.position.4.meta':'Caguas, PR · Presencial · Manufactura',

      'page.contact.title':'Contacta a QRC','page.contact.sub':'Cuéntanos sobre tu proyecto — sistemas de calidad, validación, tecnología o capacitación. Un consultor QRC responderá en un día hábil.','contact.intro':'QRC Group opera desde oficinas en Caguas, Puerto Rico y Weston, Florida, sirviendo a clientes en Puerto Rico, Florida y EE. UU. continentales.','contact.pr.title':'Oficina Puerto Rico','contact.pr.line1':'28 Aquamarina Villa Blanca','contact.pr.line2':'Caguas, PR 00725','contact.fl.title':'Oficina Florida','contact.fl.line1':'Suite 196, 1555 Bonaventure Blvd.','contact.fl.line2':'Weston, FL 33326','contact.email.title':'Correo','contact.hours.title':'Horario','contact.hours.copy':'Lunes a Viernes, 8:00am–5:00pm AST/EST',
      'contact.form.title':'Envíanos un Mensaje','contact.form.name':'Nombre Completo <sup>*</sup>','contact.form.email':'Correo <sup>*</sup>','contact.form.company':'Empresa','contact.form.phone':'Teléfono','contact.form.interest':'Servicio de Interés','contact.form.message':'Mensaje <sup>*</sup>','contact.form.submit':'Enviar Mensaje','contact.form.note':'Gracias. Un consultor QRC dará seguimiento en un día hábil.','contact.form.select.placeholder':'Selecciona un servicio…',

      'detail.positioning.title':'Vista General de la Práctica','detail.cap.title':'Capacidades','detail.del.title':'Entregables','detail.industries.title':'Industrias y Aplicaciones','detail.industries.copy':'Este servicio se entrega a clientes farmacéuticos, de dispositivos médicos, biotecnología y manufactura regulada.','detail.cta.title':'Habla con un Especialista','detail.cta.copy':'Coordina una llamada con un profesional QRC que ha entregado este servicio en múltiples instalaciones reguladas.','detail.cta.btn':'Habla con un Consultor QRC','detail.related.title':'Servicios Relacionados',

      'svc.learnmore':'Ver más','tech.learnmore':'Hablar con un especialista','tech.cap.label':'Capacidades',

      'footer.about':'Qualification and Regulatory Consultants Group: consultoría de cumplimiento regulatorio, validación, sistemas de calidad y tecnología para industrias farmacéutica, de dispositivos médicos, biotecnología y manufactura regulada desde 2005.','footer.col.core':'Servicios Principales','footer.col.tech':'Servicios de Tecnología','footer.col.company':'Compañía','footer.col.contact':'Contacto','footer.rights':'Todos los derechos reservados.','footer.tagline':'Cumplimiento regulatorio · Validación · Sistemas de calidad · Tecnología'
    }
  };

  // ──────────────────────────────
  // Layout markup (injected once per page)
  // ──────────────────────────────
  function topBarHTML() {
    return '<div class="top-bar"><div class="top-bar-inner">' +
      '<div class="top-bar-email"><a href="mailto:info@qrcgroup.com">info@qrcgroup.com</a></div>' +
      '<div class="top-bar-div" aria-hidden="true"></div>' +
      '<div class="top-bar-social">' +
        '<a href="https://www.facebook.com/QRCgroupllc/" target="_blank" rel="noopener noreferrer" data-i18n-aria="a11y.facebook">' +
          '<svg viewBox="0 0 24 24"><path d="M13.5 21v-7.5h2.5l.4-3.1h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.5V4.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v3.1h2.7V21h2.8z"/></svg>' +
        '</a>' +
        '<a href="https://www.linkedin.com/company/qrc-group-inc-" target="_blank" rel="noopener noreferrer" data-i18n-aria="a11y.linkedin">' +
          '<svg viewBox="0 0 24 24"><path d="M6.94 7.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM5 9h3.88v11H5V9zm6 0h3.7v1.5h.05c.52-.94 1.79-1.94 3.7-1.94 3.95 0 4.68 2.6 4.68 5.98V20H19V15c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V20H11V9z"/></svg>' +
        '</a>' +
      '</div>' +
      '<div class="top-bar-div" aria-hidden="true"></div>' +
      '<div class="lang-toggle" role="group" data-i18n-aria-group="a11y.lang.group">' +
        '<button type="button" data-lang="en" aria-pressed="true">EN</button>' +
        '<button type="button" data-lang="es" aria-pressed="false">ES</button>' +
      '</div>' +
    '</div></div>';
  }

  function headerHTML() {
    return '<header class="site-header"><div class="header-inner">' +
      '<a href="index.html" class="header-logo" data-i18n-aria="a11y.logo">' +
        '<img src="assets/qrc-brand/qrc-logo-20-years.png" alt="QRC Group — 20 Years" data-i18n-alt="a11y.logo.alt" width="180" height="64">' +
      '</a>' +
      '<div class="header-right">' +
        '<nav data-i18n-aria="a11y.nav.main"><ul class="main-nav">' +
          '<li><a href="index.html" data-page-link="home" data-i18n="nav.home">Home</a></li>' +
          '<li><a href="about.html" data-page-link="about" data-i18n="nav.about">About</a></li>' +
          '<li>' +
            '<button type="button" aria-haspopup="true" aria-expanded="false" data-dd="core" data-page-link="core">' +
              '<span data-i18n="nav.core">Core Services</span>' +
              '<svg class="caret" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 8.5 1.5 4h9z"/></svg>' +
            '</button>' +
            '<ul class="dropdown" id="dd-core" role="menu"></ul>' +
          '</li>' +
          '<li>' +
            '<button type="button" aria-haspopup="true" aria-expanded="false" data-dd="tech" data-page-link="tech">' +
              '<span data-i18n="nav.tech">Technology Services</span>' +
              '<svg class="caret" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 8.5 1.5 4h9z"/></svg>' +
            '</button>' +
            '<ul class="dropdown cyan-rule" id="dd-tech" role="menu"></ul>' +
          '</li>' +
          '<li><a href="proven-results.html" data-page-link="results" data-i18n="nav.results">Results</a></li>' +
          '<li><a href="training.html" data-page-link="training" data-i18n="nav.training">Training</a></li>' +
          '<li><a href="open-opportunities.html" data-page-link="careers" data-i18n="nav.careers">Careers</a></li>' +
          '<li><a href="contact.html" data-page-link="contact" data-i18n="nav.contact">Contact</a></li>' +
        '</ul></nav>' +
        '<a href="contact.html" class="btn btn-orange" data-i18n="nav.cta">Contact Us</a>' +
        '<button class="hamburger" type="button" data-i18n-aria="a11y.menu.open" aria-controls="mobile-nav" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</div></header>';
  }

  function mobileNavHTML() {
    return '<div class="mobile-nav" id="mobile-nav" aria-hidden="true"><div class="mobile-nav-inner">' +
      '<button class="mobile-close" type="button" data-i18n-aria="a11y.menu.close">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18 18 6"/></svg>' +
      '</button>' +
      '<ul class="mobile-nav-list">' +
        '<li><a href="index.html" data-i18n="nav.home">Home</a></li>' +
        '<li><a href="about.html" data-i18n="nav.about">About</a></li>' +
        '<li><button type="button" aria-expanded="false" data-msub="core"><span data-i18n="nav.core">Core Services</span>' +
          '<svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8.5 1.5 4h9z"/></svg></button>' +
          '<ul class="mobile-sub" id="msub-core"></ul></li>' +
        '<li><button type="button" aria-expanded="false" data-msub="tech"><span data-i18n="nav.tech">Technology Services</span>' +
          '<svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8.5 1.5 4h9z"/></svg></button>' +
          '<ul class="mobile-sub" id="msub-tech"></ul></li>' +
        '<li><a href="proven-results.html" data-i18n="nav.results">Results</a></li>' +
        '<li><a href="training.html" data-i18n="nav.training">Training</a></li>' +
        '<li><a href="open-opportunities.html" data-i18n="nav.careers">Careers</a></li>' +
        '<li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>' +
      '</ul>' +
      '<div class="mobile-nav-cta"><a href="contact.html" class="btn btn-orange" data-i18n="nav.cta">Contact Us</a></div>' +
    '</div></div>';
  }

  function footerHTML() {
    return '<footer class="site-footer"><div class="footer-grid">' +
      '<div class="footer-brand">' +
        '<img src="assets/qrc-brand/qrc-logo-20-years.png" alt="QRC Group" data-i18n-alt="a11y.logo.alt" width="160" height="56">' +
        '<p data-i18n="footer.about"></p>' +
        '<div class="footer-social">' +
          '<a href="https://www.facebook.com/QRCgroupllc/" target="_blank" rel="noopener noreferrer" data-i18n-aria="a11y.facebook">' +
            '<svg viewBox="0 0 24 24"><path d="M13.5 21v-7.5h2.5l.4-3.1h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.5V4.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v3.1h2.7V21h2.8z"/></svg>' +
          '</a>' +
          '<a href="https://www.linkedin.com/company/qrc-group-inc-" target="_blank" rel="noopener noreferrer" data-i18n-aria="a11y.linkedin">' +
            '<svg viewBox="0 0 24 24"><path d="M6.94 7.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM5 9h3.88v11H5V9zm6 0h3.7v1.5h.05c.52-.94 1.79-1.94 3.7-1.94 3.95 0 4.68 2.6 4.68 5.98V20H19V15c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V20H11V9z"/></svg>' +
          '</a>' +
        '</div>' +
      '</div>' +
      '<div class="footer-col"><h4 data-i18n="footer.col.core"></h4><ul id="footer-core"></ul></div>' +
      '<div class="footer-col"><h4 data-i18n="footer.col.tech"></h4><ul id="footer-tech"></ul></div>' +
      '<div class="footer-col"><h4 data-i18n="footer.col.company"></h4><ul>' +
        '<li><a href="about.html" data-i18n="nav.about">About</a></li>' +
        '<li><a href="proven-results.html" data-i18n="nav.results">Results</a></li>' +
        '<li><a href="training.html" data-i18n="nav.training">Training</a></li>' +
        '<li><a href="open-opportunities.html" data-i18n="nav.careers">Careers</a></li>' +
        '<li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>' +
      '</ul></div>' +
      '<div class="footer-col"><h4 data-i18n="footer.col.contact"></h4>' +
        '<div class="foot-contact"><strong data-i18n="contact.pr.title"></strong>' +
          '<span data-i18n="contact.pr.line1"></span><span data-i18n="contact.pr.line2"></span>' +
          '<a href="tel:+19393367724">+1-939-336-7724</a></div>' +
        '<div class="foot-contact"><strong data-i18n="contact.fl.title"></strong>' +
          '<span data-i18n="contact.fl.line1"></span><span data-i18n="contact.fl.line2"></span>' +
          '<a href="tel:+19544220926">+1-954-422-0926</a></div>' +
        '<div class="foot-contact"><strong data-i18n="contact.email.title"></strong>' +
          '<a href="mailto:info@qrcgroup.com">info@qrcgroup.com</a></div>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<p><span id="copy-year">2026</span> &copy; QRC Group. <span data-i18n="footer.rights"></span></p>' +
      '<p data-i18n="footer.tagline"></p>' +
    '</div></footer>';
  }

  // ──────────────────────────────
  // Renderers
  // ──────────────────────────────
  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function renderDropdowns(lang) {
    function fill(id, list) {
      var el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = list.map(function (s) {
        return '<li role="none"><a role="menuitem" href="' + s.page + '">' + s['title' + lang.toUpperCase()] + '</a></li>';
      }).join('');
    }
    fill('dd-core', services.core);
    fill('dd-tech', services.tech);
    fill('msub-core', services.core);
    fill('msub-tech', services.tech);
  }

  function renderFooterLists(lang) {
    function fill(id, list) {
      var el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = list.map(function (s) {
        return '<li><a href="' + s.page + '">' + s['title' + lang.toUpperCase()] + '</a></li>';
      }).join('');
    }
    fill('footer-core', services.core);
    fill('footer-tech', services.tech);
  }

  function renderHomeCoreGrid(lang) {
    var el = document.getElementById('home-core-grid');
    if (!el) return;
    var more = i18n[lang]['svc.learnmore'];
    el.innerHTML = services.core.map(function (s, i) {
      return '<a class="svc-card" href="' + s.page + '">' +
        '<div class="svc-body">' +
          '<span class="svc-num">' + pad(i + 1) + ' / ' + pad(services.core.length) + '</span>' +
          '<h3>' + s['title' + lang.toUpperCase()] + '</h3>' +
          '<p class="svc-desc">' + s['short' + lang.toUpperCase()] + '</p>' +
          '<span class="svc-arrow">' + more +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>' +
          '</span>' +
        '</div></a>';
    }).join('');
  }

  function renderHomeTechGrid(lang) {
    var el = document.getElementById('home-tech-grid');
    if (!el) return;
    var capLabel = i18n[lang]['tech.cap.label'];
    var more = i18n[lang]['tech.learnmore'];
    el.innerHTML = services.tech.map(function (s, i) {
      var caps = (lang === 'es' ? s.capES : s.capEN).slice(0, 4).map(function (c) { return '<li>' + c + '</li>'; }).join('');
      return '<article class="tech-card">' +
        '<span class="tech-num">' + pad(i + 1) + ' / ' + pad(services.tech.length) + '</span>' +
        '<h3>' + s['title' + lang.toUpperCase()] + '</h3>' +
        '<p class="tech-desc">' + s['short' + lang.toUpperCase()] + '</p>' +
        '<span class="tech-cap-title">' + capLabel + '</span>' +
        '<ul class="tech-cap-list">' + caps + '</ul>' +
        '<a class="tech-arrow" href="' + s.page + '">' + more +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>' +
        '</a>' +
      '</article>';
    }).join('');
  }

  function renderHubCore(lang) {
    var el = document.getElementById('hub-core-grid');
    if (!el) return;
    var more = i18n[lang]['svc.learnmore'];
    el.innerHTML = services.core.map(function (s, i) {
      return '<a class="svc-card" href="' + s.page + '">' +
        '<div class="svc-body">' +
          '<span class="svc-num">' + pad(i + 1) + ' / ' + pad(services.core.length) + '</span>' +
          '<h3>' + s['title' + lang.toUpperCase()] + '</h3>' +
          '<p class="svc-desc">' + s['short' + lang.toUpperCase()] + '</p>' +
          '<span class="svc-arrow">' + more +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>' +
          '</span>' +
        '</div></a>';
    }).join('');
  }

  function renderHubTech(lang) {
    var el = document.getElementById('hub-tech-grid');
    if (!el) return;
    var capLabel = i18n[lang]['tech.cap.label'];
    var more = i18n[lang]['tech.learnmore'];
    el.innerHTML = services.tech.map(function (s, i) {
      var caps = (lang === 'es' ? s.capES : s.capEN).map(function (c) { return '<li>' + c + '</li>'; }).join('');
      return '<article class="tech-card">' +
        '<span class="tech-num">' + pad(i + 1) + ' / ' + pad(services.tech.length) + '</span>' +
        '<h3>' + s['title' + lang.toUpperCase()] + '</h3>' +
        '<p class="tech-desc">' + s['short' + lang.toUpperCase()] + '</p>' +
        '<span class="tech-cap-title">' + capLabel + '</span>' +
        '<ul class="tech-cap-list">' + caps + '</ul>' +
        '<a class="tech-arrow" href="' + s.page + '">' + more +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>' +
        '</a>' +
      '</article>';
    }).join('');
  }

  function renderServiceDetail(lang) {
    var root = document.querySelector('[data-service-detail]');
    if (!root) return;
    var id = root.getAttribute('data-service-detail');
    var s = getServiceById(id);
    if (!s) return;
    var dict = i18n[lang];
    var titleNode = document.getElementById('detail-title');
    var subNode = document.getElementById('detail-sub');
    if (titleNode) titleNode.textContent = s['title' + lang.toUpperCase()];
    if (subNode) subNode.textContent = s['short' + lang.toUpperCase()];
    var crumbCurrent = document.getElementById('crumb-current');
    if (crumbCurrent) crumbCurrent.textContent = s['title' + lang.toUpperCase()];

    var positioning = s['positioning' + lang.toUpperCase()];
    var caps = (lang === 'es' ? s.capES : s.capEN);
    var dels = (lang === 'es' ? s.delES : s.delEN);
    var related = (s.category === 'core' ? services.core : services.tech).filter(function (x) { return x.id !== s.id; }).slice(0, 3);
    var detailCardClass = s.category === 'tech' ? 'detail-card cyan' : 'detail-card';
    var relatedCardClass = s.category === 'tech' ? 'related-card cyan' : 'related-card';

    root.innerHTML =
      '<section class="section">' +
        '<div class="container">' +
          '<div class="detail-positioning">' +
            '<span class="eyebrow' + (s.category === 'tech' ? ' cyan' : '') + '">' + dict['detail.positioning.title'] + '</span>' +
            '<p>' + positioning + '</p>' +
          '</div>' +
          '<div class="detail-grid">' +
            '<div class="' + detailCardClass + '"><h3>' + dict['detail.cap.title'] + '</h3>' +
              '<ul class="detail-list">' + caps.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul></div>' +
            '<div class="' + detailCardClass + '"><h3>' + dict['detail.del.title'] + '</h3>' +
              '<ul class="detail-list">' + dels.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul></div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="section section-alt">' +
        '<div class="container">' +
          '<div class="split-hd' + (s.category === 'tech' ? ' cyan' : '') + '">' +
            '<span class="sh-top">' + dict['nav.' + (s.category === 'tech' ? 'tech' : 'core')] + '</span>' +
            '<span class="sh-bot">' + dict['detail.industries.title'] + '</span>' +
            '<p class="sh-desc">' + dict['detail.industries.copy'] + '</p>' +
          '</div>' +
          '<div class="ind-inner" style="justify-content:flex-start;">' +
            '<span class="ind-tag">' + dict['industries.pharma.title'] + '</span>' +
            '<span class="ind-tag">' + dict['industries.medical.title'] + '</span>' +
            '<span class="ind-tag">' + dict['industries.biotech.title'] + '</span>' +
            '<span class="ind-tag">' + dict['industries.manuf.title'] + '</span>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="cta-band">' +
        '<h2>' + dict['detail.cta.title'] + '</h2>' +
        '<p>' + dict['detail.cta.copy'] + '</p>' +
        '<a class="btn btn-orange" href="contact.html">' + dict['detail.cta.btn'] + '</a>' +
      '</section>' +
      '<section class="section">' +
        '<div class="container">' +
          '<div class="split-hd"><span class="sh-bot">' + dict['detail.related.title'] + '</span></div>' +
          '<div class="related-grid">' +
            related.map(function (r) {
              return '<a class="' + relatedCardClass + '" href="' + r.page + '">' +
                '<strong>' + r['title' + lang.toUpperCase()] + '</strong>' +
                '<p>' + r['short' + lang.toUpperCase()] + '</p>' +
              '</a>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</section>';
  }

  function renderContactSelect(lang) {
    var sel = document.getElementById('f-interest');
    if (!sel) return;
    var dict = i18n[lang];
    var coreLabel = lang === 'es' ? 'Servicios Principales' : 'Core Services';
    var techLabel = lang === 'es' ? 'Servicios de Tecnología' : 'Technology Services';
    var optsCore = services.core.map(function (s) { return '<option value="' + s.id + '">' + s['title' + lang.toUpperCase()] + '</option>'; }).join('');
    var optsTech = services.tech.map(function (s) { return '<option value="' + s.id + '">' + s['title' + lang.toUpperCase()] + '</option>'; }).join('');
    sel.innerHTML =
      '<option value="">' + dict['contact.form.select.placeholder'] + '</option>' +
      '<optgroup label="' + coreLabel + '">' + optsCore + '</optgroup>' +
      '<optgroup label="' + techLabel + '">' + optsTech + '</optgroup>';
  }

  function applyI18n(lang) {
    var dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('label[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-content');
      if (dict[k] != null) el.setAttribute('content', dict[k]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-alt');
      if (dict[k] != null) el.setAttribute('alt', dict[k]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (dict[k] != null) el.setAttribute('aria-label', dict[k]);
    });
    document.querySelectorAll('[data-i18n-aria-group]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria-group');
      if (dict[k] != null) el.setAttribute('aria-label', dict[k]);
    });

    // Page title (if data-i18n-title meta exists)
    var titleKey = document.body.getAttribute('data-page-title-key');
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];

    // <html lang>
    document.documentElement.setAttribute('lang', lang === 'es' ? 'es' : 'en');
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'es' ? 'es_PR' : 'en_US');

    // Re-render service-driven surfaces
    renderDropdowns(lang);
    renderFooterLists(lang);
    renderHomeCoreGrid(lang);
    renderHomeTechGrid(lang);
    renderHubCore(lang);
    renderHubTech(lang);
    renderServiceDetail(lang);
    renderContactSelect(lang);

    // Toggle pressed state
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    // Active page link highlighting
    var pageId = document.body.getAttribute('data-page');
    if (pageId) {
      document.querySelectorAll('[data-page-link]').forEach(function (a) {
        if (a.getAttribute('data-page-link') === pageId) a.classList.add('active');
      });
    }
  }

  // ──────────────────────────────
  // Lang management
  // ──────────────────────────────
  function getInitialLang() {
    try {
      var url = new URL(window.location.href);
      var q = (url.searchParams.get('lang') || '').toLowerCase();
      if (q === 'en' || q === 'es') return q;
      var stored = localStorage.getItem('qrc.lang');
      if (stored === 'en' || stored === 'es') return stored;
    } catch (e) {}
    return 'en';
  }
  function setLang(lang, opts) {
    opts = opts || {};
    if (lang !== 'en' && lang !== 'es') lang = 'en';
    applyI18n(lang);
    try { localStorage.setItem('qrc.lang', lang); } catch (e) {}
    if (opts.updateUrl !== false) {
      try {
        var url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url.toString());
      } catch (e) {}
    }
  }

  // ──────────────────────────────
  // Bind dropdowns / mobile / lang toggle
  // ──────────────────────────────
  function bindDropdowns() {
    var triggers = document.querySelectorAll('.main-nav button[data-dd]');
    function closeAll(except) {
      triggers.forEach(function (t) { if (t !== except) t.setAttribute('aria-expanded', 'false'); });
    }
    triggers.forEach(function (t) {
      t.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = t.getAttribute('aria-expanded') === 'true';
        closeAll(t);
        t.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') t.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('.main-nav')) closeAll(null); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(null); });
  }
  function bindMobileNav() {
    var hamburger = document.querySelector('.hamburger');
    var panel = document.getElementById('mobile-nav');
    if (!hamburger || !panel) return;
    var close = panel.querySelector('.mobile-close');
    function open()  { panel.classList.add('open');    panel.setAttribute('aria-hidden', 'false'); hamburger.setAttribute('aria-expanded', 'true'); }
    function shut()  { panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true');  hamburger.setAttribute('aria-expanded', 'false'); }
    hamburger.addEventListener('click', function () { panel.classList.contains('open') ? shut() : open(); });
    if (close) close.addEventListener('click', shut);
    panel.addEventListener('click', function (e) { if (e.target.tagName === 'A') shut(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panel.classList.contains('open')) shut(); });
    panel.querySelectorAll('button[data-msub]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });
  }
  function bindLangToggle() {
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
  }
  function bindContactForm() {
    var form = document.querySelector('form.contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) note.hidden = false;
    });
  }

  // ──────────────────────────────
  // Boot
  // ──────────────────────────────
  function boot() {
    var slot = function (sel, html) { var el = document.querySelector(sel); if (el) el.outerHTML = html; };
    slot('[data-slot="topbar"]', topBarHTML());
    slot('[data-slot="header"]', headerHTML());
    slot('[data-slot="mobile-nav"]', mobileNavHTML());
    slot('[data-slot="footer"]', footerHTML());

    var yr = document.getElementById('copy-year');
    if (yr) yr.textContent = new Date().getFullYear();

    bindDropdowns();
    bindMobileNav();
    bindLangToggle();
    bindContactForm();

    setLang(getInitialLang(), { updateUrl: false });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

/* PREVIEW BANNER — injected only in the qrc-preview public mirror */
(function () {
  function injectBanner() {
    if (document.querySelector('.preview-banner')) return;
    var b = document.createElement('div');
    b.className = 'preview-banner';
    b.setAttribute('role', 'status');
    b.setAttribute('aria-label', 'Preview banner');
    b.textContent = 'PREVIEW / DEMO ONLY — Not the live QRC Group website';
    document.body.insertAdjacentElement('afterbegin', b);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBanner);
  } else {
    injectBanner();
  }
})();

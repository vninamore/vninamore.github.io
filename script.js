const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const translations = {
  es: {
    navProfile: 'Perfil', navProjects: 'Proyectos', navExperience: 'Experiencia', navContact: 'Contacto',
    available: 'Disponible para oportunidades remotas', hello: 'Hola, soy', role: 'Ingeniera Geográfica · Analista GIS & Data',
    heroIntro: 'Transformo datos geoespaciales complejos en información clara, procesos automáticos y soluciones que ayudan a tomar mejores decisiones.',
    explore: 'Explorar proyectos', contactMe: 'Contactarme', years: 'años de experiencia', spatialView: 'Visor espacial',
    observations: 'Observaciones', routes: 'Rutas', coverage: 'Cambio de cobertura',
    profileTitle: 'Entre mapas, código y decisiones.', profileText: 'Combino ingeniería geográfica, análisis de datos y automatización para encontrar patrones, mejorar la calidad de la información y convertir procesos manuales en flujos reproducibles.',
    geoTitle: 'Pensamiento geoespacial', geoText: 'Análisis vectorial y ráster, cartografía, sistemas de coordenadas, publicación web y control de calidad.',
    automationTitle: 'Automatización', automationText: 'Python, ArcPy y GeoPandas para reducir tareas repetitivas y construir procesos confiables.',
    dataTitle: 'Datos con propósito', dataText: 'SQL, PostgreSQL/PostGIS y validaciones para integrar, consultar y reportar información de calidad.', toolbox: 'Caja de herramientas',
    projectsTitle: 'Proyectos que conectan territorio y datos.', projectsText: 'Una selección de trabajos en automatización GIS, teledetección, ciencia de datos y fotogrametría.', all: 'Todos', automation: 'Automatización',
    deforestationTitle: 'Monitoreo de deforestación con Deep Learning', deforestationText: 'Modelo temporal para detectar patrones de pérdida de cobertura en La Pampa, Madre de Dios.',
    cartographyTitle: 'Automatización cartográfica censal', cartographyText: 'Generación automatizada de croquis, KML/KMZ, validaciones y reportes para proyectos nacionales.',
    platformTitle: 'Plataforma web de resultados geográficos', platformText: 'Servicios, capas y procedimientos almacenados para consultar, filtrar y descargar información validada.',
    rpasTitle: 'Flujo fotogramétrico de alta resolución', rpasText: 'Procesamiento optimizado de imágenes RPAS para modelos de elevación y productos cartográficos.', viewCase: 'Ver caso',
    experienceTitle: 'Experiencia construyendo con datos reales.', yearsShort: 'años', ineiRole: 'Proyectos geoinformáticos y resultados censales',
    ineiText: 'Automatización Python/SQL, validación de información, bases espaciales, servicios GeoServer y soporte a módulos web para proyectos de alcance nacional.',
    months: 'meses', consulting: 'CONSULTORÍA', photoRole: 'Fotogrametría y operación RPAS', photoText: 'Planificación y procesamiento con drones, GPS diferencial y producción de ortofotos, curvas de nivel y modelos 3D.',
    internships: 'Prácticas', internRole: 'Información territorial y soporte técnico', internText: 'Experiencia inicial en gestión territorial, datos geográficos y apoyo a procesos técnicos institucionales.',
    educationTitle: 'Aprender, experimentar, mejorar.', degree: 'Bachiller en Ingeniería Geográfica', specialization: 'Especialización en Ciencia de Datos', continuous: 'Formación continua',
    contactTitle: '¿Construimos algo útil con datos?', contactText: 'Estoy abierta a oportunidades remotas en GIS, análisis de datos, automatización y proyectos geoespaciales.', remote: 'Disponible para trabajo remoto', backTop: 'Volver arriba ↑'
  },
  en: {
    navProfile: 'Profile', navProjects: 'Projects', navExperience: 'Experience', navContact: 'Contact',
    available: 'Open to remote opportunities', hello: "Hi, I'm", role: 'Geographic Engineer · GIS & Data Analyst',
    heroIntro: 'I turn complex geospatial data into clear information, automated workflows, and solutions that support better decisions.',
    explore: 'Explore projects', contactMe: 'Contact me', years: 'years of experience', spatialView: 'Spatial viewer',
    observations: 'Observations', routes: 'Routes', coverage: 'Land-cover change',
    profileTitle: 'Where maps, code, and decisions meet.', profileText: 'I combine geographic engineering, data analysis, and automation to uncover patterns, improve data quality, and transform manual processes into reproducible workflows.',
    geoTitle: 'Geospatial thinking', geoText: 'Vector and raster analysis, cartography, coordinate systems, web publishing, and quality control.',
    automationTitle: 'Automation', automationText: 'Python, ArcPy, and GeoPandas to reduce repetitive work and build reliable processes.',
    dataTitle: 'Purposeful data', dataText: 'SQL, PostgreSQL/PostGIS, and validation rules to integrate, query, and report reliable information.', toolbox: 'Toolbox',
    projectsTitle: 'Projects connecting territory and data.', projectsText: 'Selected work in GIS automation, remote sensing, data science, and photogrammetry.', all: 'All', automation: 'Automation',
    deforestationTitle: 'Deforestation monitoring with Deep Learning', deforestationText: 'Temporal model to detect land-cover loss patterns in La Pampa, Madre de Dios.',
    cartographyTitle: 'Census cartography automation', cartographyText: 'Automated generation of maps, KML/KMZ files, validations, and reports for nationwide projects.',
    platformTitle: 'Geographic results web platform', platformText: 'Services, layers, and stored procedures to query, filter, and download validated information.',
    rpasTitle: 'High-resolution photogrammetry workflow', rpasText: 'Optimized RPAS image processing for elevation models and cartographic products.', viewCase: 'View case',
    experienceTitle: 'Experience building with real-world data.', yearsShort: 'years', ineiRole: 'Geoinformatics and census-results projects',
    ineiText: 'Python/SQL automation, data validation, spatial databases, GeoServer services, and web-module support for nationwide projects.',
    months: 'months', consulting: 'CONSULTING', photoRole: 'Photogrammetry and RPAS operations', photoText: 'Drone planning and processing, differential GPS, orthophotos, contour lines, and 3D models.',
    internships: 'Internships', internRole: 'Territorial information and technical support', internText: 'Early experience in land information management, geographic data, and institutional technical processes.',
    educationTitle: 'Learn, experiment, improve.', degree: "Bachelor's degree in Geographic Engineering", specialization: 'Data Science specialization', continuous: 'Continuous learning',
    contactTitle: 'Shall we build something useful with data?', contactText: 'I am open to remote opportunities in GIS, data analysis, automation, and geospatial projects.', remote: 'Available for remote work', backTop: 'Back to top ↑'
  }
};

const projectDetails = {
  deforestation: {
    tags: ['ConvLSTM', 'Sentinel-2', 'TensorFlow', 'Python'],
    es: { title: 'Detección y monitoreo de la deforestación', intro: 'Proyecto de ciencia de datos aplicado a La Pampa, Tambopata, para analizar cambios de cobertura mediante series temporales satelitales.', bullets: ['36 meses de observaciones entre 2019 y 2021.', '500 parches georreferenciados con cinco bandas por fecha.', 'Clasificación binaria y por intensidad de pérdida de cobertura.', 'Preparación de salidas compatibles con QGIS y mapas web.'] },
    en: { title: 'Deforestation detection and monitoring', intro: 'Data science project in La Pampa, Tambopata, analyzing land-cover change through satellite time series.', bullets: ['36 months of observations from 2019 to 2021.', '500 georeferenced patches with five bands per date.', 'Binary and intensity-based land-cover loss classification.', 'QGIS-ready outputs and interactive web maps.'] }
  },
  cartography: {
    tags: ['ArcPy', 'Python', 'ArcMap', 'KML/KMZ'],
    es: { title: 'Automatización cartográfica censal', intro: 'Flujos creados para reducir trabajo manual y estandarizar productos cartográficos utilizados por equipos de campo.', bullets: ['Generación programática de croquis, KML y KMZ.', 'Validaciones de datos requeridos, fechas, duplicados y referencias.', 'Consultas y reportes para sedes, distritos, personal y programación.', 'Soporte a entregables de proyectos estadísticos nacionales.'] },
    en: { title: 'Census cartography automation', intro: 'Workflows designed to reduce manual effort and standardize cartographic products used by field teams.', bullets: ['Programmatic generation of maps, KML, and KMZ.', 'Required-field, date, duplicate, and reference validations.', 'Queries and reports for offices, districts, staff, and scheduling.', 'Support for nationwide statistical-project deliverables.'] }
  },
  platform: {
    tags: ['GeoServer', 'PostgreSQL', 'PostGIS', 'SQL'],
    es: { title: 'Plataforma web de resultados geográficos', intro: 'Componentes GIS y de base de datos para consultar y publicar información estadística con dimensión territorial.', bullets: ['Publicación de capas y servicios geográficos.', 'Procedimientos almacenados para filtros y reportes descargables.', 'Validaciones para cargas de Excel y prevención de duplicados.', 'Integración de información histórica en PostgreSQL/PostGIS.'] },
    en: { title: 'Geographic results web platform', intro: 'GIS and database components for querying and publishing statistical information with a territorial dimension.', bullets: ['Geographic layer and service publishing.', 'Stored procedures for filters and downloadable reports.', 'Excel-upload validation and duplicate prevention.', 'Historical data integration in PostgreSQL/PostGIS.'] }
  },
  rpas: {
    tags: ['Metashape', 'RPAS', 'DEM', 'Python'],
    es: { title: 'Procesamiento fotogramétrico RPAS', intro: 'Flujo técnico para procesar imágenes aéreas de alta resolución con recursos de hardware limitados.', bullets: ['Alineación de 162 cámaras y control de calidad geométrica.', '67 236 puntos 3D válidos y error medio de reproyección de 0.12.', 'DEM de aproximadamente 4.34 cm por píxel.', 'Estrategia optimizada para un equipo con 8 GB de RAM.'] },
    en: { title: 'RPAS photogrammetric processing', intro: 'Technical workflow for processing high-resolution aerial imagery with constrained hardware resources.', bullets: ['Alignment of 162 cameras with geometric quality control.', '67,236 valid 3D points and 0.12 mean reprojection error.', 'DEM resolution of approximately 4.34 cm per pixel.', 'Workflow optimized for an 8 GB RAM workstation.'] }
  }
};

let currentLanguage = localStorage.getItem('portfolio-lang') || 'es';

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);
  $$('[data-i18n]').forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  $('#langToggle').textContent = lang === 'es' ? 'EN' : 'ES';
}

$('#langToggle').addEventListener('click', () => setLanguage(currentLanguage === 'es' ? 'en' : 'es'));

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light');
$('#themeToggle').textContent = document.body.classList.contains('light') ? '☾' : '☼';
$('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  $('#themeToggle').textContent = isLight ? '☾' : '☼';
});

$('#menuToggle').addEventListener('click', () => $('.nav').classList.toggle('open'));
$$('.nav a').forEach(link => link.addEventListener('click', () => $('.nav').classList.remove('open')));

window.addEventListener('scroll', () => $('#topbar').classList.toggle('scrolled', window.scrollY > 30));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
$$('.reveal').forEach(el => revealObserver.observe(el));

$$('.layer-toggle').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    $(`.layer[data-layer="${button.dataset.target}"]`).classList.toggle('active');
  });
});

$('#mapStage').addEventListener('pointermove', event => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  $('#lonValue').textContent = (-81.35 + x * 13.65).toFixed(4);
  $('#latValue').textContent = (-0.04 - y * 18.31).toFixed(4);
});

$$('.filter').forEach(button => {
  button.addEventListener('click', () => {
    $$('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    $$('.project-card').forEach(card => {
      const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
      card.classList.toggle('hidden', !matches);
    });
  });
});

const modal = $('#projectModal');
function openProject(id) {
  const data = projectDetails[id];
  const content = data[currentLanguage];
  $('#modalContent').innerHTML = `
    <div class="project-tags">${data.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
    <h2>${content.title}</h2>
    <p>${content.intro}</p>
    <ul>${content.bullets.map(item => `<li>${item}</li>`).join('')}</ul>`;
  modal.showModal();
}

$$('.project-card').forEach(card => {
  $('.open-project', card).addEventListener('click', event => { event.stopPropagation(); openProject(card.dataset.project); });
  card.addEventListener('dblclick', () => openProject(card.dataset.project));
  card.addEventListener('keydown', event => { if (event.key === 'Enter') openProject(card.dataset.project); });
});
$('#modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

window.addEventListener('pointermove', event => {
  const glow = $('#cursorGlow');
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

$('#year').textContent = new Date().getFullYear();
setLanguage(currentLanguage);

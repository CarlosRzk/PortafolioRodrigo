import React, { useState } from 'react';
import { Linkedin, Mail, Phone, Download, Award, Briefcase, GraduationCap, MapPin, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-900 z-50 border-b border-zinc-800 shadow-xl">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              TU NOMBRE
            </div>
            
            <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'sobre-mi', label: 'Sobre Mí' },
                { id: 'experiencia', label: 'Experiencia' },
                { id: 'proyectos', label: 'Proyectos' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap pb-1 ${
                    activeSection === item.id 
                      ? 'text-emerald-400' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            
            <button className="hidden lg:block px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105">
              Descargar CV
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-emerald-400 font-medium">Disponible para proyectos</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="block text-zinc-400 text-xl sm:text-2xl md:text-3xl mb-2">Hola, soy</span>
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Tu Nombre
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-zinc-400 mb-3 sm:mb-4">Ingeniero Civil</p>
              
              <p className="text-base sm:text-lg text-zinc-500 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Especializado en diseño estructural, gestión de proyectos y desarrollo de infraestructura sostenible con más de 10 años de experiencia.
              </p>

              <div className="flex items-center gap-2 sm:gap-3 text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                <span>La Paz, Bolivia</span>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-emerald-500/50 transition-all text-sm sm:text-base">
                  Hablemos
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-zinc-800 hover:bg-zinc-700 rounded-full font-semibold flex items-center justify-center gap-2 border border-zinc-700 transition-all text-sm sm:text-base">
                  <Download className="w-5 h-5" />
                  Ver CV
                </button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl border border-zinc-700 p-6 lg:p-8 shadow-2xl">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="text-emerald-400 text-sm font-semibold mb-2">PERFIL PROFESIONAL</div>
                      <div className="space-y-3 lg:space-y-4">
                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
                          <div>
                            <div className="font-semibold text-sm lg:text-base">+10 Años</div>
                            <div className="text-xs lg:text-sm text-zinc-500">Experiencia</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" />
                          <div>
                            <div className="font-semibold text-sm lg:text-base">+50 Proyectos</div>
                            <div className="text-xs lg:text-sm text-zinc-500">Completados</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
                          <div>
                            <div className="font-semibold text-sm lg:text-base">PMP Certified</div>
                            <div className="text-xs lg:text-sm text-zinc-500">Project Management</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-4">
                      <div className="text-sm text-zinc-400 mb-1">Especialización</div>
                      <div className="font-semibold text-emerald-400">Estructuras & Gestión</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-zinc-950">
        <div className="w-full">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                Ingeniero Civil con una sólida trayectoria en la planificación, diseño y ejecución de proyectos de infraestructura. 
                Mi experiencia abarca desde el diseño estructural hasta la gestión integral de obras civiles.
              </p>
              
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                Me apasiona crear soluciones innovadoras y sostenibles que impacten positivamente en la sociedad, 
                siempre manteniendo los más altos estándares de calidad y seguridad.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Diseño Estructural', 'Gestión de Proyectos', 'BIM', 'Sostenibilidad', 'Control de Calidad'].map((skill) => (
                  <span key={skill} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-800 border border-zinc-700 rounded-full text-xs sm:text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 hover:border-emerald-500/50 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-emerald-400">Software & Herramientas</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-zinc-400">
                  <div>• AutoCAD</div>
                  <div>• SAP2000</div>
                  <div>• Revit BIM</div>
                  <div>• ETABS</div>
                  <div>• MS Project</div>
                  <div>• Primavera P6</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-emerald-400">Certificaciones</h3>
                <div className="space-y-2 text-sm sm:text-base text-zinc-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>PMP - Project Management Professional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Registro Profesional CIABOL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Especialización en Estructuras</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="w-full">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Experiencia
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                role: "Gerente de Proyectos",
                company: "Constructora ABC S.A.",
                period: "2020 - Presente",
                description: "Liderazgo en la gestión integral de proyectos de construcción, coordinando equipos multidisciplinarios y asegurando el cumplimiento de cronogramas y presupuestos.",
                achievements: ["Gestión de proyectos por $5M+", "Reducción de costos del 15%", "Implementación de metodología BIM"]
              },
              {
                role: "Ingeniero Estructural Senior",
                company: "Consultoría XYZ",
                period: "2016 - 2020",
                description: "Diseño y cálculo estructural de edificaciones de mediana y gran altura, análisis sísmico y supervisión técnica de proyectos.",
                achievements: ["Diseño de +20 edificios", "Proyectos hasta 15 pisos", "Optimización estructural del 20%"]
              },
              {
                role: "Ingeniero Residente",
                company: "Constructora DEF",
                period: "2014 - 2016",
                description: "Supervisión directa de obras, control de calidad, coordinación con subcontratistas y reporte de avance de proyectos.",
                achievements: ["Supervisión de 10,000+ m²", "Cero accidentes graves", "Entrega anticipada de proyectos"]
              }
            ].map((job, index) => (
              <div 
                key={index} 
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 hover:border-emerald-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-emerald-400 transition-colors">{job.role}</h3>
                    <p className="text-emerald-400 font-semibold text-sm sm:text-base">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">{job.period}</span>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-zinc-400 mb-3 sm:mb-4">{job.description}</p>
                
                <div className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
                      <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-zinc-950">
        <div className="w-full">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Proyectos Destacados
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Edificio Corporativo Plaza Central", type: "Estructura de Concreto", area: "8,500 m²", status: "Completado" },
              { name: "Puente Vehicular Río Azul", type: "Infraestructura", area: "120 m", status: "Completado" },
              { name: "Complejo Residencial Los Pinos", type: "Vivienda", area: "12,000 m²", status: "En Ejecución" },
              { name: "Centro Comercial Norte", type: "Comercial", area: "15,000 m²", status: "Completado" },
              { name: "Hospital Regional Sur", type: "Salud", area: "6,800 m²", status: "Diseño" },
              { name: "Universidad Campus Este", type: "Educación", area: "20,000 m²", status: "Completado" }
            ].map((project, index) => (
              <div 
                key={index}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"></div>
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400/20 relative z-10" />
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-2 sm:px-3 py-1 rounded-full font-semibold ${
                      project.status === 'Completado' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : project.status === 'En Ejecución'
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'bg-zinc-700 text-zinc-400 border border-zinc-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">{project.name}</h3>
                  <p className="text-xs sm:text-sm text-emerald-400 mb-1">{project.type}</p>
                  <p className="text-xs sm:text-sm text-zinc-500 mb-3 sm:mb-4">Área: {project.area}</p>
                  
                  <button className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 hover:text-emerald-400 transition-colors">
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Trabajemos Juntos
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy disponible para consultoría, gestión de proyectos y colaboraciones profesionales.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a href="mailto:tu@email.com" className="group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-4 sm:p-6 transition-all">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2 sm:mb-3" />
              <div className="font-semibold mb-1 text-sm sm:text-base group-hover:text-emerald-400 transition-colors">Email</div>
              <div className="text-xs sm:text-sm text-zinc-500">ingeniero@ejemplo.com</div>
            </a>
            
            <a href="tel:+591" className="group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-4 sm:p-6 transition-all">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2 sm:mb-3" />
              <div className="font-semibold mb-1 text-sm sm:text-base group-hover:text-emerald-400 transition-colors">Teléfono</div>
              <div className="text-xs sm:text-sm text-zinc-500">+591 7XXXXXXX</div>
            </a>
            
            <a href="https://linkedin.com" className="group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-4 sm:p-6 transition-all">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2 sm:mb-3" />
              <div className="font-semibold mb-1 text-sm sm:text-base group-hover:text-emerald-400 transition-colors">LinkedIn</div>
              <div className="text-xs sm:text-sm text-zinc-500">linkedin.com/in/tunombre</div>
            </a>
          </div>

          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-xl hover:shadow-emerald-500/50 transition-all text-sm sm:text-base">
            Iniciar conversación
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 sm:py-8 text-center text-zinc-500 px-4">
        <p className="mb-2 text-xs sm:text-sm md:text-base">© 2025 Tu Nombre - Ingeniero Civil Profesional</p>
        <p className="text-xs sm:text-sm">Registro Profesional CIABOL N° XXXX</p>
      </footer>
    </div>
  );
}
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from '@/lib/constants'

export default function Portfolio() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<(typeof PORTFOLIO_PROJECTS)[0] | null>(null)

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory)

  const selectedIndex = selectedProject ? PORTFOLIO_PROJECTS.indexOf(selectedProject) : -1
  const nextProject = PORTFOLIO_PROJECTS[(selectedIndex + 1) % PORTFOLIO_PROJECTS.length]
  const prevProject = PORTFOLIO_PROJECTS[(selectedIndex - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length]

  return (
    <section id="portfolio" className="section-padding bg-surface dark:bg-surface-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <div className="eyebrow-text mb-4">Our Work</div>
          <h2 className="heading-lg mb-8">Featured Projects</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {PORTFOLIO_CATEGORIES.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'button-primary'
                    : 'bg-bg dark:bg-bg-dark text-text-primary dark:text-text-primary-dark border border-border dark:border-border-dark hover:border-accent-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(project)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-4xl w-full"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-white rounded-full hover:bg-gray-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
                  <button
                    onClick={() => setSelectedProject(prevProject)}
                    className="p-2 bg-white rounded-full hover:bg-gray-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </div>

                <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
                  <button
                    onClick={() => setSelectedProject(nextProject)}
                    className="p-2 bg-white rounded-full hover:bg-gray-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-4 text-white text-center">
                  <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                  <p className="text-gray-300">{selectedProject.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

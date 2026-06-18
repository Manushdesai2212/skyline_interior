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
                whileHover={{ x: 4, y: 4 }}
                whileTap={{ x: 6, y: 6 }}
                className={`px-6 py-2 transition-all duration-150 ${
                  activeCategory === category
                    ? 'button-primary'
                    : 'border-[3px] border-border bg-bg font-mono text-xs font-bold uppercase tracking-wider text-text-primary shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-sm dark:border-border-dark dark:bg-bg-dark dark:text-text-primary-dark'
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
                whileHover={{ x: 4, y: 4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden border-[3px] border-border shadow-lg dark:border-border-dark"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-80 w-full object-cover transition-transform duration-150 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 border-t-[3px] border-border bg-accent-secondary p-4 text-text-primary translate-y-full transition-transform duration-150 group-hover:translate-y-0 dark:border-border">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="font-mono text-xs font-bold uppercase">{project.category}</p>
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
                className="relative w-full max-w-4xl"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-auto w-full border-[3px] border-white"
                />
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="border-[3px] border-border bg-white p-2 text-text-primary shadow-lg transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-sm"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
                  <button
                    onClick={() => setSelectedProject(prevProject)}
                    className="border-[3px] border-border bg-white p-2 text-text-primary shadow-lg transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </div>

                <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
                  <button
                    onClick={() => setSelectedProject(nextProject)}
                    className="border-[3px] border-border bg-white p-2 text-text-primary shadow-lg transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-sm"
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

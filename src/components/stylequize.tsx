'use client'
 
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw, ArrowRight } from 'lucide-react'
 
type StyleId = 'minimalist' | 'contemporary' | 'elegant' | 'bohemian'
 
interface StyleInfo {
  name: string
  description: string
}
 
const STYLES: Record<StyleId, StyleInfo> = {
  minimalist: {
    name: 'Modern Minimalist',
    description:
      "You favor clean lines, a neutral palette, and rooms with room to breathe. Every piece you own earns its place.",
  },
  contemporary: {
    name: 'Warm Contemporary',
    description:
      'Earthy tones, natural textures, and organic shapes define your space — comfortable, grounded, and quietly elegant.',
  },
  elegant: {
    name: 'Classic Elegant',
    description:
      'Rich materials, traditional detailing, and refined finishes give your home a timeless, polished presence.',
  },
  bohemian: {
    name: 'Eclectic Bohemian',
    description:
      'Bold colors, mixed patterns, and pieces collected from everywhere make your space one-of-a-kind.',
  },
}
 
interface Question {
  question: string
  options: { label: string; style: StyleId }[]
}
 
const QUESTIONS: Question[] = [
  {
    question: 'Pick a color palette',
    options: [
      { label: 'Neutral whites & grays', style: 'minimalist' },
      { label: 'Terracotta, sage & cream', style: 'contemporary' },
      { label: 'Deep wood tones & gold accents', style: 'elegant' },
      { label: 'Jewel tones & bold prints', style: 'bohemian' },
    ],
  },
  {
    question: 'Pick a furniture vibe',
    options: [
      { label: 'Sleek & functional', style: 'minimalist' },
      { label: 'Natural wood & woven textures', style: 'contemporary' },
      { label: 'Carved details & plush upholstery', style: 'elegant' },
      { label: 'Mixed vintage & global pieces', style: 'bohemian' },
    ],
  },
  {
    question: 'Pick a weekend activity',
    options: [
      { label: 'Decluttering & organizing', style: 'minimalist' },
      { label: 'Gardening or pottery', style: 'contemporary' },
      { label: 'Antiquing or heritage tours', style: 'elegant' },
      { label: 'Thrifting or traveling', style: 'bohemian' },
    ],
  },
  {
    question: 'Pick a lighting style',
    options: [
      { label: 'Recessed, hidden lighting', style: 'minimalist' },
      { label: 'Warm pendant lights & candles', style: 'contemporary' },
      { label: 'Chandeliers & wall sconces', style: 'elegant' },
      { label: 'Colorful lanterns & fairy lights', style: 'bohemian' },
    ],
  },
]
 
export default function StyleQuiz() {
  const [step, setStep] = useState(0) // 0..QUESTIONS.length-1 = questions, QUESTIONS.length = result
  const [answers, setAnswers] = useState<StyleId[]>([])
 
  const isResult = step === QUESTIONS.length
 
  const handleAnswer = (style: StyleId) => {
    setAnswers((prev) => [...prev, style])
    setStep((s) => s + 1)
  }
 
  const handleRetake = () => {
    setAnswers([])
    setStep(0)
  }
 
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
 
  const resultStyleId: StyleId | null = isResult ? computeResult(answers) : null
  const resultStyle = resultStyleId ? STYLES[resultStyleId] : null
 
  return (
    <section id="style-quiz" className="section-padding bg-bg dark:bg-bg-dark">
      <div className="container-max max-w-2xl">
        <div className="text-center mb-10">
          <div className="eyebrow-text mb-4">A Little Fun</div>
          <h2 className="heading-lg mb-3">Find Your Style</h2>
          <p className="text-text-muted dark:text-text-muted-dark">
            Answer four quick questions and we&apos;ll tell you which design style fits your taste.
          </p>
        </div>
 
        {!isResult && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-text-muted dark:text-text-muted-dark mb-2">
              <span>
                Question {step + 1} of {QUESTIONS.length}
              </span>
              <span>{Math.round((step / QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="h-3 overflow-hidden border-[3px] border-border bg-surface dark:border-border-dark dark:bg-surface-dark">
              <motion.div
                className="h-full bg-accent-primary"
                initial={{ width: 0 }}
                animate={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        )}
 
        <AnimatePresence mode="wait">
          {!isResult ? (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="card-base"
            >
              <h3 className="text-xl font-semibold mb-6">{QUESTIONS[step].question}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {QUESTIONS[step].options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => handleAnswer(opt.style)}
                    className="border-[3px] border-border bg-surface px-4 py-3 text-left font-semibold shadow-lg transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:bg-accent-secondary hover:shadow-sm focus:outline-none focus-visible:ring-[3px] focus-visible:ring-accent-tertiary dark:border-border-dark dark:bg-surface-dark dark:hover:bg-accent-secondary dark:hover:text-text-primary"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="card-base text-center"
            >
              <div className="eyebrow-text mb-2">Your Style Is</div>
              <h3 className="heading-lg mb-4">{resultStyle?.name}</h3>
              <p className="text-text-muted dark:text-text-muted-dark mb-8 max-w-md mx-auto">
                {resultStyle?.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="button-primary inline-flex items-center justify-center gap-2"
                >
                  Get a Free Consultation for Your {resultStyle?.name} Space
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleRetake}
                  className="inline-flex items-center justify-center gap-2 border-[3px] border-border bg-surface px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-sm focus:outline-none focus-visible:ring-[3px] focus-visible:ring-accent-tertiary dark:border-border-dark dark:bg-surface-dark"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
 
function computeResult(answers: StyleId[]): StyleId {
  const tally: Partial<Record<StyleId, number>> = {}
  for (const a of answers) tally[a] = (tally[a] ?? 0) + 1
 
  let best: StyleId = answers[0]
  let bestCount = 0
  for (const key of Object.keys(tally) as StyleId[]) {
    const count = tally[key] ?? 0
    if (count > bestCount) {
      bestCount = count
      best = key
    }
  }
  return best
}
 

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const commands = [
'whoami',
'skills',
'experience',
'tools'
]


export default function Skills() {
const [output, setOutput] = useState([])
const [line, setLine] = useState(0)


useEffect(() => {
let mounted = true
async function run() {
for (let i = 0; i < commands.length && mounted; i++) {
const cmd = commands[i]
setOutput(prev => [...prev, { type: 'cmd', text: `> ${cmd}` }])
await new Promise(r => setTimeout(r, 700))
if (!mounted) break
if (cmd === 'whoami') {
setOutput(prev => [...prev, { type: 'res', text: 'Khushi Rathore - MERN Developer' }])
} else if (cmd === 'skills') {
setOutput(prev => [...prev, { type: 'res', text: 'JavaScript | React | Node | Express | MongoDB | Tailwind | Framer Motion' }])
} else if (cmd === 'experience') {
setOutput(prev => [...prev, { type: 'res', text: '1+ years building full-stack web apps, real-time systems, and MLP APIs' }])
} else {
setOutput(prev => [...prev, { type: 'res', text: 'VSCode | Git |  Vercel | Firebase' }])
}
await new Promise(r => setTimeout(r, 500))
}
}
run()
return () => { mounted = false }
}, [])


return (
<div className="terminal p-6 rounded-2xl mt-10 max-w-3xl mx-auto">
<div className="flex items-center gap-2 mb-4">
<span className="w-3 h-3 rounded-full bg-red-500" />
<span className="w-3 h-3 rounded-full bg-yellow-400" />
<span className="w-3 h-3 rounded-full bg-green-500" />
<div className="ml-auto text-xs text-gray-400">MERN · JavaScript · Frontend</div>
</div>
<div className="font-mono text-sm text-green-200">
{output.map((o, idx) => (
<motion.div key={idx} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className={o.type === 'cmd' ? 'text-green-300' : 'text-gray-200'}>
{o.text}
</motion.div>
))}
</div>
</div>
)
}
'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [introText, setIntroText] = useState('')
  const fullIntroText = "Greetings, welcome to my page. My name is Daksh Kaul, and I am an aspiring software developer/writer/musician specializing in back-end development."

  useEffect(() => {
    const typeWriter = (text: string, i = 0) => {
      if (i < text.length) {
        setIntroText(prev => prev + text.charAt(i))
        setTimeout(() => typeWriter(text, i + 1), 50)
      }
    }
    typeWriter(fullIntroText)
  }, [])

  const toggleProjectDetails = (id: string) => {
    const details = document.getElementById(id)
    if (details) {
      details.style.display = details.style.display === 'none' ? 'block' : 'none'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white font-mono">
      <header>
        <h1 className="text-4xl font-bold text-center border-b-2 border-white pb-4 mb-8">Daksh Kaul</h1>
        <nav className="mb-8">
          <ul className="flex justify-around">
            <li><a href="#intro" className="text-white hover:text-green-400">Intro</a></li>
            <li><a href="#skills" className="text-white hover:text-green-400">Skills</a></li>
            <li><a href="#education" className="text-white hover:text-green-400">Education</a></li>
            <li><a href="#accomplishments" className="text-white hover:text-green-400">Projects</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="intro" className="mb-12">
        <h2 className="text-2xl font-bold border-b border-white pb-2 mb-4">Introduction</h2>
        <p>{introText}</p>
        <p className="mt-4">I believe that the beauty code is often in its simplicity. I believe that if an application/service/website can deliver its information to the user in the fastest and simplest way possible, without any 'fuzz' or 'fluff' that may make the spreading of information harder or long-winded, it's truly a wonderful creation.</p>
      </section>
      
      <section id="skills" className="mb-12">
        <h2 className="text-2xl font-bold border-b border-white pb-2 mb-4">Skills</h2>
        <p>To boast these principles, I honed my skills in the following programming languages, distribution, and version control systems:</p>
        <ul className="list-none pl-0 mt-4">
          {['Python', 'C/C++', 'Rust', 'SQL', 'HTML/CSS/JS*', 'Git/Github', 'Word/Powerpoint/Excel', 'Linux: OpenSUSE TW, Arch, Ubuntu'].map((skill, index) => (
            <li key={index} className="mb-2">
              <span className="text-green-400 mr-2">&gt;</span>{skill}
              <div className="bg-gray-700 h-4 mt-1">
                <div className="bg-green-400 h-full" style={{width: `${Math.random() * 40 + 60}%`}}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <section id="education" className="mb-12">
        <h2 className="text-2xl font-bold border-b border-white pb-2 mb-4">Education</h2>
        <p>Not only have I burnt the midnight oil in my chosen field of expertise, but I have also concurrently worked hard to cultivate my knowledge of the greater academia.</p>
        <p className="mt-4">During my stay in high school within the IB (International Baccalaureate) program I studied:</p>
        <ul className="list-none pl-0 mt-4">
          {['Physics', 'Statistics', 'English Composition', 'Spanish', 'Computer Science', 'Digital Humanities (Digital Society)'].map((subject, index) => (
            <li key={index} className="mb-2"><span className="text-green-400 mr-2">&gt;</span>{subject}</li>
          ))}
        </ul>
      </section>
      
      <section id="accomplishments" className="mb-12">
        <h2 className="text-2xl font-bold border-b border-white pb-2 mb-4">Accomplishments</h2>
        <p>With this combined knowledge, I have developed many personal projects that display my equippedness for many 'small-scale' projects and 'full stack' applications that can scale to large quantities of user bases.</p>
        
        {[
          {
            title: 'smplfetch',
            description: 'A straightforward system info fetch script for Linux includes commonly used information for the user to display for debugging or 'aesthetic' purposes.'
          },
          {
            title: 'brsk',
            description: 'brsk (pronounced brisk) is a Linux shell written in Rust. This is my current personal project, but it is still in the heavy alpha stages. Some final features will be command parsing and execution, IO redirection, parallel processing, environment management, command substitution, scripting capabilities - utilizing a hand-rolled shell scripting language - and 'plugin extensibility.''
          },
          {
            title: 'ShowMyKeys',
            description: 'A keyboard visualizer/emulation software can be utilized to display keyboard combinations.'
          },
          {
            title: 'Typr',
            description: 'Typr is an interactive touch typing learning application designed to improve your typing skills and prevent RSI (Repetitive Strain Injury) by incrementally teaching each 'layer' of the keyboard via 'bite-sized' lessons to build mastery of the standard keyboard QWERTY layout.'
          }
        ].map((project, index) => (
          <div key={index} className="bg-gray-900 p-4 mb-4 border-l-4 border-green-400">
            <h3 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => toggleProjectDetails(`project-${index}`)}>{project.title}</h3>
            <p id={`project-${index}`} style={{display: 'none'}}>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}


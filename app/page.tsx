'use client'

import React from 'react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden">
      <h1 className="text-[8vw] font-bold text-center my-12" tabIndex={0}>DAKSH KAUL</h1>

      <div className="max-w-5xl mx-auto px-4 grid gap-8">
        {/* About Window */}
        <div className="border-2 border-white bg-black p-4">
          <div className="flex justify-between border-b-2 border-white pb-2 mb-4">
            <span>about.txt</span>
            <button className="px-2 border border-white hover:bg-white hover:text-black" aria-label="Close window">×</button>
          </div>
          <p className="mb-4">My name is Daksh Kaul, and I am an aspiring software developer/writer/musician specializing in back-end development.</p>
          <p>I believe that the beauty code is often in its simplicity. I believe that if an application/service/website can deliver its information to the user in the fastest and simplest way possible, without any &apos;fuzz&apos; or &apos;fluff&apos; that may make the spreading of information harder or long-winded, it&apos;s truly a wonderful creation.</p>
        </div>

        {/* Skills Window */}
        <div className="border-2 border-white bg-black p-4">
          <div className="flex justify-between border-b-2 border-white pb-2 mb-4">
            <span>skills.exe</span>
            <button className="px-2 border border-white hover:bg-white hover:text-black" aria-label="Close window">×</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Python',
              'C/C++',
              'Rust',
              'SQL',
              'HTML/CSS/JS*',
              'Git/Github',
              'Word/Powerpoint/Excel',
              'Linux: OpenSUSE TW, Arch, Ubuntu'
            ].map((skill, i) => (
              <div key={i} className="border border-white p-2 hover:bg-white hover:text-black transition-colors">
                &gt; {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Education Window */}
        <div className="border-2 border-white bg-black p-4">
          <div className="flex justify-between border-b-2 border-white pb-2 mb-4">
            <span>education.sys</span>
            <button className="px-2 border border-white hover:bg-white hover:text-black" aria-label="Close window">×</button>
          </div>
          <div className="space-y-2">
            {[
              'Physics',
              'Statistics',
              'English Composition',
              'Spanish',
              'Computer Science',
              'Digital Humanities (Digital Society)'
            ].map((subject, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="text-green-400">&gt;</span>
                <span>{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Window */}
        <div className="border-2 border-white bg-black p-4 mb-8">
          <div className="flex justify-between border-b-2 border-white pb-2 mb-4">
            <span>projects.dat</span>
            <button className="px-2 border border-white hover:bg-white hover:text-black" aria-label="Close window">×</button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'smplfetch',
                description: 'A straightforward system info fetch script for Linux',
                url: 'https://github.com/DriftingOtter/smplFetch'
              },
              {
                title: 'brsk',
                description: 'A Linux shell written in Rust with advanced features',
                url: 'https://github.com/DriftingOtter/brsk-shell'
              },
              {
                title: 'ShowMyKeys',
                description: 'Keyboard visualizer/emulation software',
                url: 'https://github.com/DriftingOtter/ShowMyKeys'
              },
              {
                title: 'Typr',
                description: 'Interactive touch typing learning application',
                url: 'https://github.com/DriftingOtter/Typr.GUI'
              }
            ].map((project, i) => (
              <div key={i} className="border border-white p-4 hover:bg-white hover:text-black transition-colors">
                <h3 className="text-lg font-bold mb-2">
                  <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


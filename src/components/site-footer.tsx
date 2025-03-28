"use client"

import React from "react"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "CV", href: "https://tranchinh2901.github.io/personal_information/Frontend_developer.pdf", isExternal: true },
]

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/tranchinh04/" },
  { name: "Github", href: "https://github.com/TranChinh2901" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ch%C3%ADnh-tr%E1%BA%A7n-vi%E1%BA%BFt-099370355/" },
  { name: "DevTo", href: "https://dev.to/tranchinh2901" },
 
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center gap-10 py-10 md:gap-16 md:py-16">
        <div className="flex w-full flex-col justify-between gap-10 md:flex-row">
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <ul className="flex flex-col gap-4">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <Link
          href="https://github.com/TranChinh2901/IamChinhs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground text-center text-sm"
        >
          © Created by Tran viet Chinh
        </Link>
      </div>
    </footer>
  )
}

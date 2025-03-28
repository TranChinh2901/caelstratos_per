"use client"

import React from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "CV", href: "https://tranchinh2901.github.io/personal_information/Frontend_developer.pdf", isExternal: true },
]

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8">
            <div className="border-primary flex h-8 w-14 items-center justify-center rounded-md border-2">
              <span className="font-sora text-lg font-bold">DEV</span>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex md:gap-6">
            {navItems.map((item) => (
              <li key={item.name} className="flex items-center">
                <Link
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}

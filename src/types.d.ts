export interface ItemLink {
  name?: string
  url: string
}

export interface ButtonProps {
  children: React.ReactNode
  handleClick?: () => void
  itemLink?: ItemLink
}

export interface Book {
  navigation: Navigation
  page: Page
}

export interface Navigation {
  home: string
  about: string
  contact: string
  blog: string
}

export interface Page {
  home: About
  about: About
}

export interface About {
  title: string
  description: string
}

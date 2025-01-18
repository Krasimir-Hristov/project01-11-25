export interface DarkModeProps {
  isDarkMode: boolean
}

export interface DarkModeNavbarProps {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

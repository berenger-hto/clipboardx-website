import { Button } from "./button"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    return <Button
        variant="ghost"
        size="lg"
        className="rounded-full px-8 text-lg font-medium"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        {theme === "dark" ? <Sun className="mr-3" size={24} /> : <Moon className="mr-3" size={24} />}
        {theme === "dark" ? "Oeil de jour" : "Oeil de nuit"}
    </Button>
}
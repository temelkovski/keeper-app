import React from "react"

export function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <div>
            <footer>
                <p>Copyright &copy; {currentYear}</p>
            </footer>
        </div>
    )
}
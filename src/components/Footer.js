import React from 'react'

const Footer = () => {
    var year = new Date().getFullYear()
    return (
        <div class="myFooter bg-light py-4 font-monospace text-muted"> <hr></hr>&copy; {year}  &bull; Site designed by biedronaa.</div>
    )
}

export default Footer
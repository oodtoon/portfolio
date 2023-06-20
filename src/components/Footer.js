import { Box } from "@mui/material"

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
    return (
        <footer className="footer-container">
            <Box>
                Brody portfolio
                <div>© {year} all rights reserved</div>
            </Box>
        </footer>
    )
}

export default Footer
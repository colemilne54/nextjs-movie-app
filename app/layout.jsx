import './globals.css'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head></head>
			<body className={`${montserrat.className}`}>
				<nav>
					<h1>logo</h1>
					<ul>
						<li><a href="/about">About</a></li>
						<li><a href="#">Sign up</a></li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	)
}

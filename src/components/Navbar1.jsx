import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./CSS/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h1>Portfo<span>lio.</span></h1>
			<nav ref={navRef}>
				<a href="#Home">Home</a>
				<a href="#About">About</a>
				<a href="#Skills">Skills</a>
				<a href="#Portfolio">Portfolio</a>
				<a href="#Contact">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
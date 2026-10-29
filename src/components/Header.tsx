import { BookButton } from "./BookButton";
import { Wordmark } from "./Wordmark";
export function Header() {
 return <header className="site-header"><div className="header-main"><a href="#top" aria-label="The Fix-It Shop home"><Wordmark /></a><nav aria-label="Primary"><a href="#katie">Our story</a><a href="#menu">Services</a><a href="#work">The details</a><a href="#visit">Visit</a></nav><BookButton placement="header" className="header-book">Book a visit</BookButton></div><nav className="mobile-nav" aria-label="Mobile navigation"><a href="#katie">Our story</a><a href="#menu">Services</a><a href="#work">The details</a><a href="#visit">Visit</a></nav></header>;
}

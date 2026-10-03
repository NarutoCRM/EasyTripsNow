import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCall from "./FloatingCall";
import CallPopup from "./CallPopup";

export default function Layout({ children, floating = true }) {
  return <div className="min-h-screen bg-white"><Navbar /><main>{children}</main><Footer />{floating && <><FloatingCall /><CallPopup /></>}</div>;
}

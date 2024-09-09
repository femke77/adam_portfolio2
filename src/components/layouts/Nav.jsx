import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Fab from "@mui/material/Fab";
import { useMediaQuery } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "react-avatar";
import Socials from "./Socials";

// TODO refactor this page to reduce repeated code

const styles = {
  up: {
    position: "fixed",
    left: "10px",
    bottom: "15px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  rightSocials: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3rem",
  },
};

export default function Nav() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 5,
    
      offset: -75,
      spy: true,
    });
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <>
      {isMobile ? (
        <>
          {location !== "Contact" ? (
            <div>
              <Button sx={{paddingTop: "25px"}} onClick={() => setOpenDrawer(true)}>
                <MenuIcon
                  size="large"
                  edge="start"
                  color="secondary"
                  aria-label="menu"
                  sx={{ position: "fixed", left: "20px" }}
                />
              </Button>
              <Drawer
                anchor="left"
                open={openDrawer}
                disableRestoreFocus
                onClose={() => setOpenDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "35%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "1.5rem",
                    overflow: "hidden",
                  },
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0",
                  }}
                >
                  {/* <img
                        src={Logo}
                        alt="Logo"
                        style={{ width: "120px", height: "auto" }}
                      /> */}
                  <Divider variant="center" color="#ffffff" />
                  <li>
                    {" "}
                    <Button sx={{ color: "black" }}>
                      <ScrollLink
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        onClick={() => setOpenDrawer(false)}
                      >
                        Home
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button sx={{ color: "black" }}>
                      <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        onClick={() => setOpenDrawer(false)}
                      >
                        About
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button sx={{ color: "black" }}>
                      <ScrollLink
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        onClick={() => setOpenDrawer(false)}
                      >
                        Projects
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button sx={{ color: "black" }}>
                      <RouterLink
                        to="/Contact"
                        onClick={() => setOpenDrawer(false)}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Contact
                      </RouterLink>
                    </Button>
                  </li>
                  <li>
                    <Socials
                      styles={styles.rightSocials}
                      placement={"right"}
                      color={"secondary"}
                    />
                  </li>
                </ul>
              </Drawer>
            </div>
          ) : (
            <div>
              <Button sx={{paddingTop: "25px"}} onClick={() => setOpenDrawer(true)}>
                <MenuIcon
                  size="large"
                  edge="start"
                  color="secondary"
                  aria-label="menu"
                  sx={{ position: "fixed", left: "20px" }}
                />
              </Button>
              <Drawer
                anchor="left"
                open={openDrawer}
                disableRestoreFocus
                onClose={() => setOpenDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "35%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "1.5rem",
                    overflow: "hidden",
                  },
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0",
                  }}
                >
                  {/* <img
                        src={Logo}
                        alt="Logo"
                        style={{ width: "120px", height: "auto" }}
                      /> */}
                  <Divider variant="center" color="#ffffff" />
                  <li>
                    {" "}
                    <Button
                      sx={{ color: "black" }}
                      onClick={() => goToPageAndScroll("intro") && setOpenDrawer(false)}
                    >
                      Home
                    </Button>
                  </li>
                  <li>
                    <Button
                      sx={{ color: "black" }}
                      onClick={() => goToPageAndScroll("about") && setOpenDrawer(false)}
                    >
                      About
                    </Button>
                  </li>
                  <li>
                    <Button
                      sx={{ color: "black" }}
                      onClick={() => goToPageAndScroll("projects") && setOpenDrawer(false)} 
                    >
                      Projects
                    </Button>
                  </li>
                  <li>
                    <Button sx={{ color: "black" }}>
                      <RouterLink
                        to="/Contact"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Contact
                      </RouterLink>
                    </Button>
                  </li>
                  <li>
                    <Socials
                      styles={styles.rightSocials}
                      placement={"right"}
                      color={"secondary"}
                    />
                  </li>
                </ul>
              </Drawer>
            </div>
          )}
        </>
      ) : (
        
        // Desktop Nav //
        <nav id="navigation" className="slide-right">
          <Avatar
            src="../../assets/projects/IMG_0698.jpg"
            alt="profile pic"
            name="Adam Mathis"
            size="80"
            style={{ padding: "10px", position: "fixed", top: "5" }}
            round={true}
          />
          <ul
            style={{
              display: "flex",
              rotate: "-90deg",
              transformOrigin: "left",
              position: "fixed",
              top: "30rem",
              left: "20px",
              paddingTop: "35px", //This moves the left side nav bar to the right, i.e. paddingLeft
            }}
          >
            {location !== "Contact" ? (
              <>
                <li>
                  {" "}
                  <Button sx={{ color: "black" }}>
                    <RouterLink
                      to="/Contact"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Contact
                    </RouterLink>
                  </Button>
                </li>
                <li>
                  <Button sx={{ color: "black" }}>
                    <ScrollLink
                      to="projects"
                      spy={true}
       
                    
                      duration={500}
                    >
                      Projects
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  <Button sx={{ color: "black" }}>
                    <ScrollLink
                      to="about"
                      spy={true}
         
                      offset={-75}
                      duration={500}
                    >
                      About
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  <Button sx={{ color: "black" }}>
                    <ScrollLink
                      to="intro"
                      spy={true}
          
                      offset={-75}
                      duration={500}
                    >
                      Home
                    </ScrollLink>
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Button sx={{ color: "black" }}>
                    <RouterLink
                      to="/Contact"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Contact
                    </RouterLink>
                  </Button>
                </li>
                <li>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => goToPageAndScroll("projects")}
                  >
                    Projects
                  </Button>
                </li>
                <li>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => goToPageAndScroll("about")}
                  >
                    About
                  </Button>
                </li>
                <li>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => goToPageAndScroll("home")}
                  >
                    Home
                  </Button>
                </li>
              </>
            )}
          </ul>
          <ScrollLink to="intro" spy={true} offset={-75} duration={500}>
            <Fab color="secondary" aria-label="up" style={styles.up}>
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollLink>
        </nav>
      )}
    </>
  );
}

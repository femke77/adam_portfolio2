import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import MenuIcon from "@mui/icons-material/Menu"
import Divider from "@mui/material/Divider"
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom"
import * as Scroll from "react-scroll"
import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"

export default function Nav() {
    const path = useLocation().pathname;
    const location = path.split("/")[1];
    const navigate = useNavigate();
    const scroller = Scroll.scroller;
    const goToPageAndScroll = async (selector) => {
      await navigate("/");
      await scroller.scrollTo(selector, {
        duration: 500,
        smooth: true,
        offset: -75,
        spy: true,
      });
    };
    const [openDrawer, setOpenDrawer] = useState(false);
    const isMobile = false;
    return (
        <> {isMobile ? (
            <>
              {location !== "Contact" ? (
                <div>
                  <Button onClick={() => setOpenDrawer(true)}>
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
                        overflow: "hidden"
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
                        <Button sx={{color:"black"}}>
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
                        <Button sx={{color:"black"}}>
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
                        <Button sx={{color:"black"}}>
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
                        <Button sx={{color:"black"}}>
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
                        {/* <RightSocial
                          styles={styles.rightSocials}
                          placement={"right"}
                          color={"secondary"}
                        /> */}
                      </li>
                    </ul>
                  </Drawer>
                </div>
              ) : (
                <div>
                  <Button onClick={() => setOpenDrawer(true)}>
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
                        overflow: "hidden"
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
                          sx={{color:"black"}}
                          onClick={() => goToPageAndScroll("home")}
                        >
                          Home
                        </Button>
                      </li>
                      <li>
                        <Button
                          sx={{color:"black"}}
                          onClick={() => goToPageAndScroll("about")}
                        >
                          About
                        </Button>
                      </li>
                      <li>
                        <Button
                          sx={{color:"black"}}
                          onClick={() => goToPageAndScroll("projects")}
                        >
                          Projects
                        </Button>
                      </li>
                      <li>
                        <Button sx={{color:"black"}}>
                          <RouterLink
                            to="/Contact"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Contact
                          </RouterLink>
                        </Button>
                      </li>
                      <li>
                        {/* <RightSocial
                          styles={styles.rightSocials}
                          placement={"right"}
                          color={"secondary"}
                        /> */}
                      </li>
                    </ul>
                  </Drawer>
                </div>
              )}
            </>
          ) : (
            <nav id="navigation">
              <ul
                style={{
                  display: "flex",
                  rotate: "-90deg",
                  transformOrigin: "left",
                  position: "fixed",
                  top: "36.5rem",
                  marginLeft: "20px",
                }}
              >
                {location !== "Contact" ? (
                  <>
                    <li>
                      {" "}
                      <Button sx={{color:"black"}}>
                      <RouterLink
                          to="/Contact"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Contact
                        </RouterLink>
                        
                      </Button>
                    </li>
                    <li>
                      <Button sx={{color:"black"}}>
                        <ScrollLink
                          to="projects"
                          spy={true}
                          smooth={true}
                          offset={-75}
                          duration={500}
                        >
                          Projects
                        </ScrollLink>
                      </Button>
                    </li>
                    <li>
                      <Button sx={{color:"black"}}>
                        <ScrollLink
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-75}
                          duration={500}
                        >
                          About
                        </ScrollLink>
                      </Button>
                    </li>
                    <li>
                      <Button sx={{color:"black"}}>
                      <ScrollLink
                          to="home"
                          spy={true}
                          smooth={true}
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
                      <Button
                        sx={{color:"black"}}
                        onClick={() => goToPageAndScroll("home")}
                      >
                        Home
                      </Button>
                    </li>
                    <li>
                      <Button
                        sx={{color:"black"}}
                        onClick={() => goToPageAndScroll("about")}
                      >
                        About
                      </Button>
                    </li>
                    <li>
                      <Button
                        sx={{color:"black"}}
                        onClick={() => goToPageAndScroll("projects")}
                      >
                        Projects
                      </Button>
                    </li>
                    <li>
                      <Button sx={{color:"black"}}>
                        <RouterLink
                          to="/Contact"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Contact
                        </RouterLink>
                      </Button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          )}
        </>
    )
}
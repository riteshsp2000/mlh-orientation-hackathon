import config from "../../blog.config"
import { MDXProvider } from "@mdx-js/react"
import { Box, Heading } from "theme-ui"
import Nav from "./Nav"
import Blurb from "../mdx/blurb.mdx"

const Header = (props) => (
  <MDXProvider>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '15px auto'}}>
      <img src={config.logo} alt={config.title} style={{width: '150px', height: 'auto', borderRadius: '7px', marginTop: 15, marginBottom: 15}} />
      <Nav />
    </div>
  </MDXProvider>
)

export default Header

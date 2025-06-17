import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import UnderConstruction from "../../static/img/under_construction.svg";

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <div style={{
        padding: "5rem 18%",
        fontSize: "1.2rem",
        backgroundColor: "rgba(255, 94, 20, 0.8)",
      }}>
        <h1>Theta Machines Documentation</h1>
        <p>Documenting our hardware, software, and everything in between.</p>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        padding: "50px",
      }}>
        <UnderConstruction width="80%" style={{maxWidth: "1000px"}}/>
      </div>
    </Layout>
  );
}

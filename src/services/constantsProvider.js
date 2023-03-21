let root = window.location.href.split("/")[2].split(".")[0]
if (root === "web3assetmanager" || root === "polytokensets") root = "www"
const base = process.env.REACT_APP_BASE ? 'https://polysets.local/api' : 'http://localhost:4000/api'
export const Constants = {
  BASE_URL: base,
  // BASE_URL: `http://localhost:4000/api`,
  RESEARCH_PATH: `https://${root}.${process.env.REACT_APP_BASE}`,
}

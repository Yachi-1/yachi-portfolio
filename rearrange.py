import re

with open("src/routes/RemitflowCaseStudy.jsx", "r") as f:
    content = f.read()

# Define the section comment markers
markers = {
    "journey": "{/* ── JOURNEY MAPPING ── */}",
    "competitive": "{/* ── COMPETITIVE ANALYSIS ── */}",
    "ux": "{/* ── UX STRATEGY & DECISIONS ── */}",
    "flow": "{/* ── AI INTEGRATION & FLOW ── */}",
    "edge": "{/* ── EDGE CASES ── */}",
    "design": "{/* ── DESIGN SYSTEM ── */}",
    "hifi": "{/* ── HIGH FIDELITY ── */}",
    "closing": "{/* ── CLOSING ── */}"
}

# Find the indices of each marker
indices = {}
for k, v in markers.items():
    idx = content.find(v)
    if idx != -1:
        indices[k] = idx

# Determine the end of each block by looking at the next section in the file order
# Current order: journey -> competitive -> ux -> flow -> edge -> design -> hifi -> closing
blocks = {}
blocks["journey"] = content[indices["journey"]:indices["competitive"]]
blocks["competitive"] = content[indices["competitive"]:indices["ux"]]
blocks["ux"] = content[indices["ux"]:indices["flow"]]
blocks["flow"] = content[indices["flow"]:indices["edge"]]
blocks["edge"] = content[indices["edge"]:indices["design"]]
blocks["design"] = content[indices["design"]:indices["hifi"]]
blocks["hifi"] = content[indices["hifi"]:indices["closing"]]

# Assemble the new order
new_order = [
    "ux",
    "competitive",
    "journey",
    "design",
    "hifi",
    "flow",
    "edge"
]

new_middle = ""
for k in new_order:
    new_middle += blocks[k]

# Stitch back
final_content = content[:indices["journey"]] + new_middle + content[indices["closing"]:]

with open("src/routes/RemitflowCaseStudy.jsx", "w") as f:
    f.write(final_content)

print("Rearrangement complete")

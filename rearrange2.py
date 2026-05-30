import re

with open("src/routes/RemitflowCaseStudy.jsx", "r") as f:
    content = f.read()

markers = {
    "journey": "{/* ── JOURNEY MAPPING ── */}",
    "design": "{/* ── DESIGN SYSTEM ── */}",
    "hifi": "{/* ── HIGH FIDELITY ── */}",
    "flow": "{/* ── AI INTEGRATION & FLOW ── */}",
    "edge": "{/* ── EDGE CASES ── */}",
    "closing": "{/* ── CLOSING ── */}"
}

indices = {k: content.find(v) for k, v in markers.items()}

blocks = {}
blocks["journey"] = content[indices["journey"]:indices["design"]]
blocks["design"] = content[indices["design"]:indices["hifi"]]
blocks["hifi"] = content[indices["hifi"]:indices["flow"]]
blocks["flow"] = content[indices["flow"]:indices["edge"]]
blocks["edge"] = content[indices["edge"]:indices["closing"]]

# Fix backgrounds to ensure alternation
# Design System currently has no bg (it is padding: ..., borderTop: ...)
# We want it to have bgAlt.
blocks["design"] = blocks["design"].replace(
    'padding: isMobile ? "60px 4vw" : "100px 6vw", borderTop:',
    'padding: isMobile ? "60px 4vw" : "100px 6vw", background: theme.bgAlt, borderTop:'
)

# High Fidelity currently has bgAlt.
# We want it to have no background.
blocks["hifi"] = blocks["hifi"].replace(
    'background: theme.bgAlt, ',
    ''
)

# Assemble new order
new_order = ["journey", "flow", "design", "hifi", "edge"]

new_middle = "".join(blocks[k] for k in new_order)

final_content = content[:indices["journey"]] + new_middle + content[indices["closing"]:]

with open("src/routes/RemitflowCaseStudy.jsx", "w") as f:
    f.write(final_content)

print("Rearrangement complete")

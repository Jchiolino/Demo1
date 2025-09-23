# Dialogue & Interaction Demo (RPG Maker MV)
# Made by Kitt/rapidrecharge

This demo showcases custom dialogue behavior and interaction systems in RPG Maker MV, built for my programming portfolio.  
Focus is on event logic and a custom JavaScript plugin that extends the base engine a bit.

---

## Features
- Letter-by-letter dialogue with custom text speed
- Per-line speed control via escape code `\ts[n]`
- Branching dialogue with `Show Choices`
- Conditional item rewards (Potion NPC)
- Event-driven NPC reactions (movement + sound + balloons)

---

## NPC Index
Each NPC in the demo represents a specific feature:

1. Basic Talker (Kid on Bed)
   - Single textbox with pauses and typing effect.
   - Demonstrates custom plugin logic with changing text speeds.

2. Choices NPC (Purple hair)
   - Player is prompted with Yes/No choice.  
   - Different responses per branch.
   - Small walking cycle.
   - Demonstrates text size changes.

3. Potion NPC
   - Jumps to new position when first talked to.
   - Demonstrates interlinked event logic.
   - Includes balloon icon + sound effect from basic talker upon jump.
   - Grants a Potion if you don’t have one.  
   - Conditional re-talk if Potion is already in inventory.

4. Info NPC
   - Gives short explanation of NPC actions via multi-line conversation.
   - Demonstrates player name, multi-choice options, but stays clear and concise.

---

## Custom Plugin
TypewriterSpeed.js
- Global control of text speed (`DefaultSpeed` parameter).  
- New escape code: `\ts[n]`  
- Adjusts speed mid-line (e.g. `\ts[4]` slower, `\ts[0]` default).  
- Resets per message to default.

---

## How to Run
1. Open in RPG Maker MV.  
2. Start on map: House 01.  
3. Interact with NPCs.

---

## Screenshots & GIFs

GIFs are included in the repo folder.

---

## Next Steps
This is Demo 1/4 of my RPG Maker portfolio. Future demos will include:  
- Inventory system  
- NPC AI + interactions  
- Simple combat mockup  

Stay tuned!

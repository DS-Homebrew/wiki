# Contributing to the DS-Homebrew wiki

Table of contents:
- [Style guidelines](#Style-guidelines)
  - [Markdown](#Markdown)
  - [File sizes](#File-sizes)
  - [English](#English)

# Style guidelines
These are the general guidelines for writing wiki content. They aren't hard rules so you can be loose with them, but try to keep a consistent style throughout the wiki and especially within each page. Feel free to suggest changes or things to add that aren't specified.

The Markdown and file sizes sections apply to all languages, though Crowdin takes care of Markdown automatically. The English section is specific to English, but feel free to make pull requests adding similar guidelines for other languages if you want.

## Markdown
- Bullet lists should use `-`
- Numbered lists should use `1.` for all items
- Italic should use `*` (`*italic*`)
- Bold should use `**` (`**bold**`)
- Headings should generally start at level 3 (`### Heading`)
   - 2 can be used for major sections, but not at the start of pages as there's already the page title
   - FAQ pages start at 4 (since they have longer titles)
- Generally avoid `<br>` and just put an extra newline
- When something with a colon is bold or italic, the colon should be included (`**Thing:**`)
- Indentation should be either 3 spaces (2 is weird with number lists)
   - HTML indentation should be tabs, but in a markdown file either's fine
- Always use relative links to other pages so that it stays on the same translation

## File sizes
Because the decimal base units for file sizes are ambiguous which they actually are, using the binary base units is generally preferred unless something is a clean size in the decimal units. (ex. 500,000 bytes = 500 kB, 512,000 bytes = 500 KiB, 294,966 bytes = (about) 288 KiB)

Note: Windows uses binary units but labels them incorrectly. macOS uses the decimal units, labeled correctly, and Linux programs usually label them correctly, but you might want to check if labels them with the decimal units.

Binary:
- `KiB` is 1,024 (2^10) bytes
- `MiB` is 1,048,576 (2^20) bytes
- `GiB` is 1,073,741,824 (2^30) bytes
- etc

Decimal:
- `kB` is 1,000 (10^3) bytes
- `KB` is incorrect, don't use it outside of quotes
- `MB` is 1,000,000 (10^6) bytes
- `GB` is 1,000,000,000 (10^9) bytes
- etc

## English
- Page titles are in title case, everything else should be normal
- For lists of 3 or more things, the serial comma (oxford comma) should be used ("this, that, and those")
- Items in a bullet/numbered list should not have periods
   - For multiple sentences in a single bullet item, all but the last sentence should have periods. Try to avoid this though, you can probably either use a subitem, shorten the phrase, or shouldn't be using a bullet list
- Units should be separated from their number by a space ("8 GiB", "67 MHz")
- Plain quotes and apostrophes should be used, Jekyll will convert them to the fancy ones (`"This thing"`, not `“This thing”`)
- When separating two single words slashes should not have a space ("Nintendo DS Phat/Lite"), when separating two phrases they should have spaces ("On the TWiLight Menu++ splash / right after the Nintendo DSi splash")
- Unless otherwise specified, American English spellings and spelling rules should be used
- Avoid using pronouns for the wiki (ex. "the troubleshooting page", not "our troubleshooting page". "it is recommended", not "we recommend")

### Specific spellings
- "SD card" is not a proper noun, don't capitalize "card"
- "Wi-Fi" should be spelled as such, not "Wifi" or "WiFi"
- "Flashcart" should be used for Slot-2 (GBA) flashcarts
- "Flashcard" should be used for Slot-1 (DS) flashcards
- "Cartridge" should be be used for standard GBA cartridges
- "Game Card" should be capitalized

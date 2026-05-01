# LW Alliance Helper website — project context

Public-facing GitHub Pages site for **LW Alliance Helper** (the
Discord bot). Hosted at <https://lw-alliance-helper.github.io>.

**This file carries context across chat sessions.** New chats in this
repo auto-load this. Companion repo: `../lw-alliance-helper-bot` (the
bot itself) — has its own `CLAUDE.md` with bot-side conventions.

---

## Working agreement

- **Solo project.** Push directly to `main`. Always fast-forward
  merge. No PRs unless explicitly asked.
- **Commit messages:** use HEREDOC, end with the
  `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`
  trailer.
- **Never amend** — always make a new commit.
- GitHub Pages auto-rebuilds on push to `main`. No build step.

---

## Repo layout

| File | Role |
|---|---|
| `index.html` | Landing page. Hero, feature overview, day-to-day quick reference table, troubleshooting. Includes the auto-updating alliance-count badge. |
| `setup.html` | Step-by-step setup guide. Inviting the bot, sharing the Sheet, walking through each `/setup_*` wizard. |
| `commands.html` | Every slash command grouped by feature (📣 Events, 🚂 Train, 🎂 Birthdays, ⚔️ DS, 🏜️ CS, 📋 Survey, 📈 Growth, 💎 Member Roster Sync, 🔧 Utilities). |
| `pricing.html` | Free vs Premium comparison. Plan cards + full feature comparison table + Premium-only features. |
| `privacy.html` / `terms.html` | Legal. |
| `assets/` | Logo, premium icon, `nav.js`, `stats.json` (alliance count). |
| `styles.css` | All styling. |

`stats.json` is updated daily by `stats_publisher.py` in the bot repo
via the GitHub Contents API.

---

## Conventions

### Content principles

- **Mirror the bot's reality.** When the bot adds a slash command or
  changes a wizard step, both `commands.html` and `setup.html` need
  to reflect it. Don't let docs drift.
- **End-user audience.** `index.html` / `setup.html` /
  `commands.html` / `pricing.html` are written for alliance leaders
  (the customers), not developers.
- **Every public mention of a feature or command should be
  consistent.** If `setup.html` says a wizard has 8 steps, the
  bot's wizard prompts must say "Step X of 8" — not 7.
- **Feature gating is shown explicitly.** Premium-only features
  carry the 💎 prefix. Free-tier capabilities are unmarked.

### When the bot ships a change

The bot's `CHANGELOG.md` is the source of truth for *what shipped*.
After a feature lands in the bot:

1. Check `commands.html` — does any command name, description, or
   gating line need updating?
2. Check `setup.html` — does any wizard step description need
   updating? (Step counts especially.)
3. Check `index.html` — does the feature appear in the day-to-day
   quick-reference table?
4. Check `pricing.html` — does the free/premium split need
   adjusting?
5. Skip cosmetic-only bot changes. Only update for behaviour or
   surface changes the user can see.

---

## Recent shipped highlights

| Commit | What |
|---|---|
| `799f00e` | Wizard step for alliance-customisable DM bodies (Train, Birthdays, DS reminder) |
| `b5b569a` | Catch up: added Member Roster Sync section, `/cancel` to troubleshooting, Reference IDs note |
| `b85be98` | Typography polish + alliance count badge relocation |
| `7241af8` | Privacy + Terms cover roster sync, DMs, Premium |

Total content: ~600 lines across the 4 main pages.

---

## Strategic notes

These mirror the bot repo's `CLAUDE.md`:

- **English only.** No localisation work until/unless the bot
  signals it (non-English alliances installing but not converting).
- **Pricing language:** single Premium tier at $4.99/mo. The
  pricing page calls out that this is via Discord App Subscriptions.
  Don't draft copy for tiers that don't exist.
- **Attribution footer feature** (a planned post-first-customer
  bot feature where public posts get a small "Sent via LW Alliance
  Helper" credit): when this ships in the bot, mention it on
  `setup.html` so leadership knows it's there + how to turn it off.

---

## Cross-repo coordination

When a change requires both repos:

1. Ship the bot change first (with tests passing).
2. Update the website to match.
3. Two separate commits, two separate fast-forward merges, two
   separate `push` calls.
4. The website always lags slightly — that's fine because GitHub
   Pages is rebuilt on push but the bot deploy on Railway happens
   on its own cycle.

For pure-website changes (typography, layout, copy polish), no bot
coordination needed.

---

## Status snapshot

Pre-launch. Pages are up and current as of `799f00e`. Bot is in
pre-launch readiness too — see `../lw-alliance-helper-bot/CLAUDE.md`.

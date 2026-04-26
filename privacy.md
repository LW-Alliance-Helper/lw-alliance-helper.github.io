---
layout: default
title: Privacy Policy — Alliance Helper
---

# Privacy Policy

*Last updated: April 2026*

This Privacy Policy explains what information Alliance Helper (the "Bot") collects, how it is used, and how it is stored. By adding Alliance Helper to your Discord server and using its features, you agree to this policy.

---

## Who We Are

Alliance Helper is operated as a Discord bot for Last War alliance leadership teams. If you have questions about this policy, you can reach us through the [Alliance Helper GitHub organization](https://github.com/LW-Alliance-Helper).

---

## What Information We Collect

Alliance Helper collects only the information necessary to provide its features. This includes:

**From Discord:**
- Discord server (guild) IDs — used to store per-server configuration settings
- Discord user IDs — used to match members to their rows in your Google Sheet
- Discord display names — used in survey notifications and birthday announcements
- Discord channel and role IDs — stored as part of your server's configuration

**From your Google Sheet (submitted by your members):**
- Any data your members submit through the survey feature (e.g. squad powers, profession, game statistics). The specific fields depend on the questions you configure.
- Birthday data, if you configure birthday tracking and have that information in your sheet

**Configuration data:**
- Your Google Sheet ID
- Your server's configured timezone, channels, roles, and feature settings

---

## What We Do Not Collect

- We do not collect passwords, payment information, or personal contact details
- We do not read any Discord messages beyond what is typed in response to an active bot prompt
- We do not access any Google Sheet data beyond the tabs and columns you configure the bot to use
- We do not track member activity, online status, or behaviour

---

## How Information Is Used

Information collected by Alliance Helper is used solely to provide the bot's features:

- Server configuration data is used to route commands, post announcements, and personalise the bot's behaviour to your server
- Discord user IDs and display names are used to match survey submissions to the correct row in your sheet and to @mention members in birthday announcements where a Discord ID is available
- Google Sheet data is read and written only in response to commands run by your leadership team or automated tasks you have configured

We do not use your data for advertising, analytics, or any purpose beyond operating the bot.

---

## How Information Is Stored

**Server configuration** is stored in a private SQLite database hosted on Railway (our hosting provider). This database is accessible only to the bot and is not shared with any third parties.

**Member data** (survey responses, birthday information, squad powers, etc.) is stored in **your own Google Sheet**, not in our database. We write to your sheet on your behalf when commands are run, but we do not retain copies of that data.

**Google Sheet access** is granted by you when you share your sheet with the bot's service account during setup. You can revoke this access at any time by removing the service account from your sheet's sharing settings.

---

## Data Sharing

We do not sell, trade, or share your data with any third parties, with the following exceptions:

- **Railway** — our hosting provider stores server configuration data as described above. Railway's privacy policy applies to their infrastructure.
- **Google** — survey responses and other data written to your sheet are subject to Google's terms of service for Google Sheets.
- **Discord** — the bot operates within Discord's platform and is subject to Discord's terms of service and privacy policy.

---

## Data Retention

Server configuration data is retained for as long as your server uses the bot. If you run `/setup_reset` or remove the bot from your server, your configuration data can be deleted upon request.

Member data in your Google Sheet is entirely under your control. We do not retain copies of it.

---

## Your Rights

You have the right to:
- Request a copy of the configuration data we hold for your server
- Request deletion of your server's configuration data
- Revoke the bot's access to your Google Sheet at any time

To make any of these requests, open an issue at [github.com/LW-Alliance-Helper](https://github.com/LW-Alliance-Helper).

---

## Changes to This Policy

We may update this policy from time to time. The date at the top of this page reflects when it was last updated. Continued use of Alliance Helper after changes are made constitutes acceptance of the updated policy.

---

[← Back to Home](./)

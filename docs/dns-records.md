# DNS records — cmykompany.com

The complete DNS zone for the domain: **website on GitHub Pages** + **email on
Fastmail**. Recreate **all** of these at Hover after the registrar transfer
completes (Part 3 of the migration).

> **Bulk paste?** Hover's DNS editor adds records **one at a time** — there's no
> zone-file paste box in the standard panel. Use the tables below (ordered for
> quick entry). A **BIND zone file** is at the bottom in case Hover's importer —
> or a Hover support request — will bulk-load it.

Conventions:
- **Host `@`** = the root/apex (`cmykompany.com`). Hover may show this as blank
  or `@` — that's the root.
- CNAME/MX targets are **hostnames only** — no `https://`, no paths, no port.
  A trailing dot (`…fmhosted.com.`) is fine if Hover adds one.
- **TTL**: leave at Hover's default (usually 1 hr / 3600s).

---

## 1 · Website — GitHub Pages

| Type  | Host | Priority | Value                 |
|-------|------|----------|-----------------------|
| A     | @    | —        | 185.199.108.153       |
| A     | @    | —        | 185.199.109.153       |
| A     | @    | —        | 185.199.110.153       |
| A     | @    | —        | 185.199.111.153       |
| AAAA  | @    | —        | 2606:50c0:8000::153   |
| AAAA  | @    | —        | 2606:50c0:8001::153   |
| AAAA  | @    | —        | 2606:50c0:8002::153   |
| AAAA  | @    | —        | 2606:50c0:8003::153   |
| CNAME | www  | —        | cmykompany.github.io  |

The GitHub Pages custom domain also relies on the repo's `CNAME` file (already
committed = `cmykompany.com`) — nothing extra to do at Hover for that beyond the
records above.

## 2 · Email — Fastmail (essential)

| Type  | Host             | Priority | Value                                        |
|-------|------------------|----------|----------------------------------------------|
| MX    | @                | 10       | in1-smtp.messagingengine.com                 |
| MX    | @                | 20       | in2-smtp.messagingengine.com                 |
| TXT   | @                | —        | `v=spf1 include:spf.messagingengine.com ?all`|
| CNAME | fm1._domainkey   | —        | fm1.cmykompany.com.dkim.fmhosted.com         |
| CNAME | fm2._domainkey   | —        | fm2.cmykompany.com.dkim.fmhosted.com         |
| CNAME | fm3._domainkey   | —        | fm3.cmykompany.com.dkim.fmhosted.com         |

## 3 · Email — recommended (DMARC)

| Type | Host   | Value                                                  |
|------|--------|--------------------------------------------------------|
| TXT  | _dmarc | `v=DMARC1; p=none; rua=mailto:Chris@CMYKompany.com`    |

Start at `p=none` (monitor only). Tighten to `quarantine` then `reject` later,
once you've confirmed legit mail passes.

## 4 · Preserve (Bluesky / AT Protocol handle verification)

| Type | Host     | Value                                     |
|------|----------|-------------------------------------------|
| TXT  | _atproto | `did=did:plc:qobd4v7bpwv5aeiqozcdgh6b`    |

Carry this over only if you still use the Bluesky handle; otherwise it can be
dropped.

## 5 · Optional — Fastmail SRV (mail-app auto-configuration)

Not required for send/receive — these just let mail apps auto-discover settings.
**Copy the exact set from Fastmail → Settings → Domains → cmykompany.com**, which
is authoritative. For reference, the "enabling" records are:

| Type | Host              | Priority | Weight | Port | Target             |
|------|-------------------|----------|--------|------|--------------------|
| SRV  | _submission._tcp  | 0        | 1      | 587  | smtp.fastmail.com  |
| SRV  | _imaps._tcp       | 0        | 1      | 993  | imap.fastmail.com  |
| SRV  | _pop3s._tcp       | 0        | 1      | 995  | pop.fastmail.com   |
| SRV  | _carddavs._tcp    | 0        | 1      | 443  | carddav.fastmail.com |
| SRV  | _caldavs._tcp     | 0        | 1      | 443  | caldav.fastmail.com  |

---

## Verify after the domain lands at Hover

1. **Website:** `https://cmykompany.com` and `https://www.cmykompany.com` both
   load and are secure.
2. **GitHub Pages:** repo → Settings → Pages shows the domain valid; keep
   **Enforce HTTPS** on.
3. **Email:** Fastmail → Settings → Domains → cmykompany.com shows **all green**;
   send + receive a test message.
4. Don't let Squarespace stop serving DNS before Hover's zone is live — rebuild
   these records promptly once the domain arrives.

---

## BIND zone file (for import, if available)

```dns
$TTL 3600
; --- Website: GitHub Pages ---
@                 IN A     185.199.108.153
@                 IN A     185.199.109.153
@                 IN A     185.199.110.153
@                 IN A     185.199.111.153
@                 IN AAAA  2606:50c0:8000::153
@                 IN AAAA  2606:50c0:8001::153
@                 IN AAAA  2606:50c0:8002::153
@                 IN AAAA  2606:50c0:8003::153
www               IN CNAME cmykompany.github.io.
; --- Email: Fastmail ---
@                 IN MX 10 in1-smtp.messagingengine.com.
@                 IN MX 20 in2-smtp.messagingengine.com.
@                 IN TXT   "v=spf1 include:spf.messagingengine.com ?all"
fm1._domainkey    IN CNAME fm1.cmykompany.com.dkim.fmhosted.com.
fm2._domainkey    IN CNAME fm2.cmykompany.com.dkim.fmhosted.com.
fm3._domainkey    IN CNAME fm3.cmykompany.com.dkim.fmhosted.com.
_dmarc            IN TXT   "v=DMARC1; p=none; rua=mailto:Chris@CMYKompany.com"
; --- Bluesky handle (preserve if still used) ---
_atproto          IN TXT   "did=did:plc:qobd4v7bpwv5aeiqozcdgh6b"
; --- Optional: Fastmail SRV (verify against Fastmail's Domains page) ---
_submission._tcp  IN SRV 0 1 587 smtp.fastmail.com.
_imaps._tcp       IN SRV 0 1 993 imap.fastmail.com.
_pop3s._tcp       IN SRV 0 1 995 pop.fastmail.com.
_carddavs._tcp    IN SRV 0 1 443 carddav.fastmail.com.
_caldavs._tcp     IN SRV 0 1 443 caldav.fastmail.com.
```

*Last verified against the live Squarespace zone + GitHub Pages defaults during
the migration. If Fastmail's Domains page shows different DKIM/SRV values, trust
Fastmail's page.*

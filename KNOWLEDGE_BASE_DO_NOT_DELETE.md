# 🔐 AL ALIS WEBSITE - PRODUCTION SERVER KNOWLEDGE BASE
## ⚠️ CRITICAL INFORMATION - DO NOT DELETE ⚠️

**Last Updated:** January 12, 2026
**Maintained By:** Development Team

---

## 📋 TABLE OF CONTENTS
1. [Project Overview](#project-overview)
2. [Local Development](#local-development)
3. [Server Access & Credentials](#server-access--credentials)
4. [SSH Configuration](#ssh-configuration)
5. [Server Architecture](#server-architecture)
6. [Domain & SSL Setup](#domain--ssl-setup)
7. [Deployment Process](#deployment-process)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Important File Locations](#important-file-locations)

---

## 🎯 PROJECT OVERVIEW

### Al Alis Website
- **Type:** Corporate/Retail Website
- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS
- **Domain:** https://www.alalistrading.com
- **Status:** ✅ LIVE
- **Repository:** https://github.com/riyazrazak94/alalis-website

### Company Info
- **Company:** Al Alis Building Materials & Electricals
- **Phone:** +974 4486 4702
- **WhatsApp:** +974 3132 3393
- **Email:** sales@alalistrading.com
- **Location:** Omar bin Al Khattab Street, Madinat Khalifa South 34, Doha, Qatar

---

## 💻 LOCAL DEVELOPMENT

### Local Project Directory
```
d:\AlAlis\alalis-website\
```

### Local Development Commands
```powershell
# Navigate to project
cd "d:\AlAlis\alalis-website"

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start
```

---

## 🖥️ SERVER ACCESS & CREDENTIALS

### Hetzner Cloud Server
- **Provider:** Hetzner
- **Server IP:** `157.180.32.249`
- **OS:** Ubuntu 24.04 LTS (Noble)
- **Management Portal:** https://robot.hetzner.com/
- **Username:** `K1162238625`
- **Password:** `Aqdar@77181769`

### CyberPanel (Web Hosting Control Panel)
- **URL:** https://157.180.32.249:8090
- **Username:** `admin`
- **Password:** `OzllV8vYt4qStEaQ`
- **Purpose:** Manage websites, SSL certificates, email, DNS

### GitHub Repository
- **Repository:** https://github.com/riyazrazak94/alalis-website
- **Clone (HTTPS):** https://github.com/riyazrazak94/alalis-website.git

### Server SSH Access
- **Username:** `root`
- **IP:** `157.180.32.249`
- **Port:** `22` (default)
- **Authentication:** SSH Key (passwordless) or root password

---

## 🔑 SSH CONFIGURATION

### Local SSH Keys Location (Windows)
```
C:\Users\user\.ssh\
├── hetzner_root          # Private key for Hetzner server (MAIN KEY)
├── hetzner_root.pub      # Public key
└── config                # SSH configuration
```

### SSH Connection
```powershell
# Connect via PowerShell
& "C:\Windows\System32\OpenSSH\ssh.exe" -i "$env:USERPROFILE\.ssh\hetzner_root" root@157.180.32.249
```

---

## 🏗️ SERVER ARCHITECTURE

### Open Ports (Relevant)
| Port | Service | Purpose |
|------|---------|---------|
| 22 | SSH | Server administration |
| 80 | nginx | HTTP (redirects to HTTPS) |
| 443 | nginx | HTTPS websites |
| 3004 | PM2 (Node.js) | **Al Alis Website** (Next.js Application) |
| 8090 | CyberPanel | Control panel interface |

### Web Server Configuration
- **nginx:** Reverse proxies to Node.js app on port 3004
- **PM2:** Process manager keeping the app alive
- **Let's Encrypt:** SSL certificates

### Al Alis Server Details
- **App Directory:** `/home/alalistrading.com/public_html`
- **PM2 Process Name:** `alalis`
- **PM2 Port:** 3004

---

## 🌐 DOMAIN & SSL SETUP

### Domain: alalistrading.com / www
- **DNS:** A record pointing to `157.180.32.249`
- **SSL Certificate:** Managed via CyberPanel (Let's Encrypt)

### Nginx Configuration Template
*Location: `/home/alalistrading.com/public_html/.next_nginx` (for reference)*

```nginx
server {
    server_name alalistrading.com www.alalistrading.com;

    location / {
        proxy_pass http://127.0.0.1:3004; # Port 3004
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🚀 DEPLOYMENT PROCESS

### 1. Initial Setup (One-Time)
Run these commands on the server via SSH:
```bash
# Create directory structure (if not done via CyberPanel)
# Assuming CyberPanel created user 'alalistrading.com'

# Clone Repo
cd /home/alalistrading.com/public_html
git init
git remote add origin https://github.com/riyazrazak94/alalis-website.git
git pull origin main

# Install & Build
npm install
npm run build

# Start with PM2
pm2 start npm --name "alalis" -- start -- -p 3004
pm2 save
```

### 2. Routine Deployment (from Windows)
```powershell
# 1. Commit and push changes
git add .
git commit -m "Update"
git push origin main

# 2. Deploy to server
& "C:\Windows\System32\OpenSSH\ssh.exe" -i "$env:USERPROFILE\.ssh\hetzner_root" root@157.180.32.249 "cd /home/alalistrading.com/public_html && git pull origin main && npm install && npm run build && pm2 restart alalis"
```

---

## 🛠️ TROUBLESHOOTING

### App not reachable
1. **Check PM2:** `pm2 list` (Ensure 'alalis' is online)
2. **Check Logs:** `pm2 logs alalis`
3. **Check Nginx:** `systemctl status nginx`

### SSL Issues
- Use CyberPanel interface to Issue/Renews SSL.

---

## 📂 IMPORTANT FILE LOCATIONS

- **App Root:** `/home/alalistrading.com/public_html`
- **PM2 Logs:** `~/.pm2/logs/`

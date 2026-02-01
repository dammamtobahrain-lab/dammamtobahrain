# Dammam to Bahrain Taxi - Website Setup

## ✅ **Your Domain**
- **Website:** dammamtobahrain.com
- **Email:** dammamtobahrain@gmail.com

---

## 📧 **Email System (ACTIVE)**
Your booking form is fully functional and sends emails to `dammamtobahrain@gmail.com` using **Resend**.

### Current Configuration:
- **Service:** Resend API
- **API Key:** `re_CqZHpJQe_ELXEvb4ifnQhJw6XERrN9XAQ`
- **From Address:** `onboarding@resend.dev` (Resend's default sender)
- **To Address:** `dammamtobahrain@gmail.com`

### Email Addresses in Use:
- `booking@dammamtobahrain.com` (displayed on website)
- `info@dammamtobahrain.com` (contact page)
- `corporate@dammamtobahrain.com` (corporate inquiries)
- `privacy@dammamtobahrain.com` (privacy policy)

**Note:** These emails are currently for display only. To make them functional, you need to:
1. Set up email forwarding with your domain provider (e.g., ImprovMX, Cloudflare Email Routing)
2. Forward all `@dammamtobahrain.com` emails to `dammamtobahrain@gmail.com`

---

## 💾 **Database (ACTIVE)**
Your bookings are saved to **Supabase**.

### Database Details:
- **Project:** supabase-indigo-queen
- **Project ID:** iqmpstetmarfrzoibyby
- **URL:** https://iqmpstetmarfrzoibyby.supabase.co

### Bookings Table Structure:
```sql
Table: bookings
- id (UUID, primary key)
- created_at (timestamp)
- full_name (text)
- phone (text)
- pickup_city (text)
- dropoff_city (text)
- vehicle_type (text)
- notes (text)
- status (text, default: 'pending')
```

### Access Your Data:
1. Go to: https://supabase.com/dashboard
2. Select project: `supabase-indigo-queen`
3. Click "Table Editor" → "bookings"

---

## 🚀 **Deployment Checklist**

### Before Going Live:
1. **Domain Setup:**
   - Point `dammamtobahrain.com` to your hosting (Vercel/Netlify)
   - Add DNS records for email forwarding

2. **Email Forwarding:**
   - Set up forwarding for all `@dammamtobahrain.com` addresses
   - Test by sending email to `booking@dammamtobahrain.com`

3. **Resend Verification (Optional):**
   - Verify your domain in Resend dashboard
   - Change `from` address from `onboarding@resend.dev` to `booking@dammamtobahrain.com`

4. **WhatsApp Number:**
   - Update the WhatsApp link in `src/app/page.js` (currently: `966500000000`)
   - Replace with your actual number

5. **Test Booking Form:**
   - Submit a test booking
   - Check email arrives at `dammamtobahrain@gmail.com`
   - Verify data appears in Supabase

---

## 📱 **Contact Information to Update**

Search and replace these placeholder numbers:
- WhatsApp: `966500000000` → Your actual number
- Phone numbers in footer/contact pages

---

## 🔐 **Security Notes**

### Current Setup:
- Resend API key is hardcoded in `/src/app/api/send-email/route.js`
- Supabase keys are hardcoded (this is OK for anon key)

### For Production (Recommended):
Move sensitive keys to `.env.local`:
```env
RESEND_API_KEY=re_CqZHpJQe_ELXEvb4ifnQhJw6XERrN9XAQ
ADMIN_EMAIL=dammamtobahrain@gmail.com
```

Then update the API route to use:
```javascript
const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
```

---

## 🌐 **SEO & Sitemap**

Your sitemap is configured at: `/sitemap.js`
- Base URL: `https://dammamtobahrain.com`
- Auto-generated for all pages
- Accessible at: `https://dammamtobahrain.com/sitemap.xml`

---

## 📝 **Next Steps**

1. ✅ Booking form works (emails + database)
2. ⏳ Set up email forwarding for `@dammamtobahrain.com`
3. ⏳ Update WhatsApp number
4. ⏳ Deploy to production (Vercel recommended)
5. ⏳ Point domain DNS to hosting
6. ⏳ Test everything live

---

## 🆘 **Support**

If you need help:
- Email issues: Check Resend dashboard
- Database issues: Check Supabase logs
- Website issues: Check browser console (F12)

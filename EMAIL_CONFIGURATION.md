# ✅ BTCD Foundation Email Configuration

## Email Addresses Implemented

### Primary Contact Emails
1. **support@btcd.foundation** - General inquiries, support, partnerships, careers
2. **admin@btcd.foundation** - Administration and management

## Where Emails Are Featured

### 1. ✅ Contact Page ([src/pages/Contact.tsx](src/pages/Contact.tsx))
- **Email Card Section**: Displays both support and admin emails prominently
- **Partnerships Button**: Links to support@btcd.foundation
- **Careers Button**: Links to support@btcd.foundation
- **FAQ Section**: References support@btcd.foundation for developer partnerships

### 2. ✅ Footer ([src/components/Footer.tsx](src/components/Footer.tsx))
- **Contact Section**: Both emails are displayed with clickable mailto links
- Visible on every page of the website

### 3. ✅ Submit Work/Careers Page ([src/pages/SubmitWork.tsx](src/pages/SubmitWork.tsx))
- Email form submission instructions mention support@btcd.foundation
- Form opens email client with both addresses

## Form Submission Configuration

### All Forms Send To BOTH Emails
All form submissions (Contact form, Submit Work form, etc.) automatically send to:
- **TO**: support@btcd.foundation
- **CC**: admin@btcd.foundation

This ensures both departments receive all inquiries and submissions.

### Modified Files:
1. **[src/lib/emailUtils.ts](src/lib/emailUtils.ts)** - Email utility functions
   - Updated to use BTCD Foundation emails
   - Both emails included in CC field automatically
   - Exports: `SUPPORT_EMAIL`, `ADMIN_EMAIL`, `WEBSITE_EMAIL`

## How It Works

### Contact Form Submission Flow:
```
User fills contact form
       ↓
Clicks "Send Message"
       ↓
Opens email client with:
  - TO: support@btcd.foundation
  - CC: admin@btcd.foundation
  - Subject: Contact Form: [Subject]
  - Body: Form data formatted
       ↓
User sends email
       ↓
Both support and admin receive the email
```

### Submit Work Form Flow:
```
User fills job application
       ↓
Clicks "Submit Application"
       ↓
Opens email client with:
  - TO: support@btcd.foundation
  - CC: admin@btcd.foundation
  - Subject: Job Application: [Role] - [Name]
  - Body: Application data + attachment instructions
       ↓
User attaches files and sends
       ↓
Both support and admin receive the application
```

## Email Display Locations

### Contact Page
```
┌─────────────────────────────────────────┐
│  📧 Email                               │
│                                         │
│  General Inquiries & Support:          │
│  support@btcd.foundation               │
│                                         │
│  Administration:                       │
│  admin@btcd.foundation                 │
│                                         │
│  ℹ️ All form submissions are sent to   │
│     both addresses automatically        │
└─────────────────────────────────────────┘
```

### Footer (Every Page)
```
┌─────────────────────────────────────────┐
│  Contact                               │
│                                         │
│  📧 support@btcd.foundation            │
│  📧 admin@btcd.foundation              │
└─────────────────────────────────────────┘
```

### Partnership & Careers Cards
```
┌─────────────────────────────────────────┐
│  🤝 Looking to Partner?                │
│                                         │
│  We're always interested in strategic  │
│  partnerships...                       │
│                                         │
│  [support@btcd.foundation]             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  💼 Join Our Team                      │
│                                         │
│  We're building the future of          │
│  finance...                            │
│                                         │
│  [support@btcd.foundation]             │
└─────────────────────────────────────────┘
```

## Email Features

### ✅ Implemented Features
- [x] Both emails featured prominently on Contact page
- [x] Both emails in footer (visible on all pages)
- [x] Both emails receive all form submissions (via CC)
- [x] Clickable mailto links throughout the site
- [x] Clear indication that both addresses receive submissions
- [x] Professional email formatting in forms
- [x] Timestamp included in all submissions
- [x] Organized form data presentation

### Email Types Handled
1. **General Contact Inquiries** → support@btcd.foundation (+ CC: admin)
2. **Job Applications** → support@btcd.foundation (+ CC: admin)
3. **Partnership Requests** → support@btcd.foundation
4. **Support Questions** → support@btcd.foundation
5. **Administrative Matters** → admin@btcd.foundation

## Technical Details

### Email Utility Functions

**File**: [src/lib/emailUtils.ts](src/lib/emailUtils.ts)

```typescript
// Primary contacts
const SUPPORT_EMAIL = 'support@btcd.foundation';
const ADMIN_EMAIL = 'admin@btcd.foundation';

// Main function - sends to both
openEmailClient(formData, subject, formType)
// Opens: mailto:support@btcd.foundation?cc=admin@btcd.foundation&...

// For job applications with attachments
openEmailWithInstructions(formData, subject, formType, instructions)
// Same as above + attachment instructions in body
```

### Form Data Format
All form submissions include:
```
Form Submission: [Form Type]

==================================================

Name: [User's Name]
Email: [User's Email]
Subject: [Subject]
Message: [Message]
... (other fields)

==================================================

Submitted on: [Date and Time]
```

## Testing Checklist

After deployment, verify:

- [ ] **Contact Page**
  - [ ] Both emails display correctly
  - [ ] Both emails are clickable (mailto links work)
  - [ ] Info text about auto-CC is visible
  
- [ ] **Footer**
  - [ ] Both emails display on all pages
  - [ ] Mailto links work correctly
  
- [ ] **Contact Form**
  - [ ] Submit opens email client
  - [ ] TO field has support@btcd.foundation
  - [ ] CC field has admin@btcd.foundation
  - [ ] Form data is formatted correctly
  
- [ ] **Submit Work Form**
  - [ ] Submit opens email client
  - [ ] Both addresses in recipient fields
  - [ ] Attachment instructions included
  - [ ] Form data formatted properly

## Email Management Recommendations

### For Support Team (support@btcd.foundation)
- Primary inbox for all inquiries
- Receives all form submissions
- Handles: general questions, partnerships, careers, support

### For Admin Team (admin@btcd.foundation)
- Receives CC of all submissions for oversight
- Can handle administrative matters directly
- Backup in case support misses something

### Suggested Email Filters/Rules
1. **Job Applications**: Filter by subject "Job Application:" 
2. **Contact Forms**: Filter by subject "Contact Form:"
3. **Partnerships**: Filter by body content "partnership"

## Benefits of This Setup

✅ **Redundancy**: Both teams receive all submissions - nothing gets missed
✅ **Transparency**: Admin team has visibility on all communications
✅ **Flexibility**: Users can email either address directly
✅ **Professional**: Dedicated BTCD Foundation domain emails
✅ **User-Friendly**: Clear display of contact options throughout site

## Files Modified

1. ✅ [src/lib/emailUtils.ts](src/lib/emailUtils.ts)
   - Updated email constants
   - Modified mailto link generation
   - Added CC functionality

2. ✅ [src/pages/Contact.tsx](src/pages/Contact.tsx)
   - Updated email display section
   - Changed partnership email
   - Changed careers email
   - Updated FAQ

3. ✅ [src/pages/SubmitWork.tsx](src/pages/SubmitWork.tsx)
   - Updated email reference in instructions

4. ✅ [src/components/Footer.tsx](src/components/Footer.tsx)
   - Updated contact email display
   - Made emails clickable

## Next Steps

After deployment:
1. **Set up email accounts** at your email provider
   - support@btcd.foundation
   - admin@btcd.foundation

2. **Test email reception**
   - Fill out contact form
   - Verify both addresses receive the email

3. **Configure email forwarding** (optional)
   - Forward to team members as needed

4. **Set up auto-responders** (recommended)
   - Acknowledge receipt within minutes
   - Set expectations for response time

5. **Monitor incoming emails**
   - Check both inboxes regularly
   - Respond within 24-48 hours

---

**Status**: ✅ Complete
**Date**: January 1, 2026
**All form submissions now go to both BTCD Foundation email addresses**

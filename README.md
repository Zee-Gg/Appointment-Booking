# Doctor Portfolio & Appointment Booking Website

A modern, professional, and responsive portfolio website designed for medical professionals. This project features a clean user interface, appointment booking functionality, and easy-to-manage content.

##  Features

-   **Modern Design:** Built with **Next.js 15** and **Tailwind CSS 4** for a sleek, responsive look on all devices.
-   **Appointment Booking:** Integrated booking modal for patients to easily schedule appointments.
-   **Contact Form:** Functional contact form for direct patient inquiries.
-   **Email Notifications:** Powered by **Resend** to send booking requests and messages directly to your email.
-   **Dynamic Content:** All text content (Services, Reviews, Bio, etc.) is separated into data files (`src/lib/data`) for easy updates without touching code.
-   **Interactive UI:** Smooth animations and interactive elements using React and Lucide Icons.
-   **Sections:**
    -   **Hero:** Professional introduction with call-to-action.
    -   **Journey:** Education, experience, and achievements.
    -   **Services:** List of medical services provided.
    -   **Health Tips:** Section for sharing medical advice.
    -   **Philosophy:** Doctor's care philosophy.
    -   **Reviews:** Patient testimonials carousel.
    -   **Contact:** Clinic information and message form.

##  Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Email Service:** [Resend](https://resend.com/)

##  Project Structure

```
src/
├── app/
│   ├── api/            # API routes (e.g., email sending)
│   ├── components/     # Reusable UI components (Navbar, Hero, etc.)
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main landing page
├── lib/
│   └── data/           # Content data files (easy to edit)
│       ├── contact.ts
│       ├── hero.ts
│       ├── services.ts
│       └── ...
```

##  Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd doctor-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add your Resend API key to enable email functionality:

```env
RESEND_API_KEY=re_123456789
```

> **Note:** You need to sign up at [Resend](https://resend.com/) to get an API key.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Customization

To customize the website for a different doctor:

1.  Go to `src/lib/data/`.
2.  Edit the files (e.g., `hero.ts`, `services.ts`, `contact.ts`) with the new information.
3.  Replace images in the code/assets as needed.

##  Build for Production

To create an optimized production build:

```bash
npm run build
```



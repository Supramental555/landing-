---
import "@fontsource/inter/variable.css";
import Compatibility from "~/components/compatibility.astro";
import Features from "~/components/features.astro";
import Footer from "~/components/footer.astro";
import Header from "~/components/header.astro";
import Intro from "~/components/intro.astro";
import Splash from "~/components/splash.astro";
import "~/styles/index.css";

const { generator, site } = Astro;
const image = new URL("close-up-man-selling-crops-from-his-garden.jpg", site);
const description =
  "Rural Business Hub,  Creat pentru a oferi suport locuitorilor din zonele rurale in promovarea afacerilor lor.";
---

<!DOCTYPE html>
<html lang="en" class="h-full motion-safe:scroll-smooth" data-theme="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <meta name="generator" content={generator} />

    <title>Astro Landing Page</title>
    <meta name="description" content={description} />

    <!-- social media -->
    <meta property="og:title" content="Astro" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={site} />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- initialize theme -->
    <script is:inline>
      const themeSaved = localStorage.getItem("theme");

      if (themeSaved) {
        document.documentElement.dataset.theme = themeSaved;
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
      }

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          if (!localStorage.getItem("theme")) {
            document.documentElement.dataset.theme = event.matches
              ? "dark"
              : "light";
          }
        });
    </script>
  </head>
  <body
    class="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"
  >
    <Header />
    <Splash />
    <div class="space-y-24 px-8 py-32">
      <Intro />
      <Features />
      <Compatibility />
      <Showcase />
    </div>
    <Footer />
  </body>
</html>

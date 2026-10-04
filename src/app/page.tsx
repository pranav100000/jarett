import { Contact } from "@/components/contact";
import { EducationList } from "@/components/education-list";
import { ExperienceList } from "@/components/experience-list";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WritingList } from "@/components/writing-list";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <Section id="experience" label="Experience">
          <ExperienceList roles={profile.experience} />
        </Section>
        <Section id="education" label="Education">
          <EducationList degrees={profile.education} />
        </Section>
        {profile.publications.length > 0 && (
          <Section id="writing" label="Selected writing">
            <WritingList items={profile.publications} />
          </Section>
        )}
        <Section id="contact" label="Contact">
          <Contact />
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

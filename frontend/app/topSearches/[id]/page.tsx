// app/about/page.tsx

import { debug } from 'console';
import { Metadata } from 'next';
import PaginationBottom from '@/components/PaginationBottom';
// import { useSearchParams } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export const metadata: Metadata = {
  title: 'PP | Top 10 Searches',
  description: 'Learn about Phantom Pyli, the curious researcher behind the blogs.',
};
// const res = await fetch('http://localhost:4000/trends');
//   const items = await res.json();
export default async function Top10Searches(params: any) {
  // const searchParams = useSearchParams();
  // const currentPage = parseInt(searchParams.get('page') || '1', 10);
  // const itemsPerPage = 12;
  const id = params.params.id;
  const currentPage = parseInt(params.searchParams.page || '1', 10);
 

  const  result = [
  {
    "Title": "India Marks Independence Day with Nationwide Celebrations",
    "Description": "Across the country, citizens celebrated India's Independence Day with parades, cultural programs, and flag hoisting ceremonies.",
    "Date": "2025-08-15",
    "Source": "Nation Times",
    "Link": "https://www.nationtimes.in/india-independence-day-2025"
  },
  {
    "Title": "New Documentary Explores the Lives of Indian Coolies",
    "Description": "A recently released documentary sheds light on the historical struggles and contributions of Indian indentured laborers known as coolies.",
    "Date": "2025-08-12",
    "Source": "Heritage Chronicle",
    "Link": "https://www.heritagechronicle.com/coolie-documentary"
  },
  {
    "Title": "Australia Triumphs Over South Africa in Thrilling ODI",
    "Description": "Australia secured a hard-fought victory against South Africa in the latest one-day international match.",
    "Date": "2025-08-10",
    "Source": "Cricket Global",
    "Link": "https://www.cricketglobal.com/australia-vs-south-africa-odi"
  },
  {
    "Title": "Google Photos Introduces AI-Powered Editing Tools",
    "Description": "Google Photos has launched new AI features aimed at simplifying complex photo editing tasks for users.",
    "Date": "2025-08-08",
    "Source": "Tech Horizon",
    "Link": "https://www.techhorizon.com/google-photos-ai-tools"
  },
  {
    "Title": "Production Begins on 'War 2' Starring Hrithik Roshan",
    "Description": "Filming has officially started for the much-anticipated Bollywood action sequel 'War 2'.",
    "Date": "2025-08-05",
    "Source": "Cinema Today",
    "Link": "https://www.cinematoday.in/war-2-production-starts"
  },
  {
    "Title": "भारत का स्वतंत्रता दिवस समारोह देशभर में मनाया गया",
    "Description": "देशभर में भारत का स्वतंत्रता दिवस झंडारोहण और सांस्कृतिक कार्यक्रमों के साथ मनाया गया।",
    "Date": "2025-08-15",
    "Source": "राष्ट्रीय समाचार",
    "Link": "https://www.rashtriyasamachar.in/bharat-ka-swatantrata-diwas-2025"
  },
  {
    "Title": "India Independence Day 1947 Remembered on Historic Milestone",
    "Description": "Communities across India held remembrance events to honor the country's first Independence Day in 1947.",
    "Date": "2025-08-14",
    "Source": "History Now",
    "Link": "https://www.historynow.in/india-independence-day-1947"
  },
  {
    "Title": "Leaders Share Vision for Independence Day 2025",
    "Description": "National leaders addressed the nation outlining progress and future goals on the occasion of Independence Day 2025.",
    "Date": "2025-08-15",
    "Source": "Daily Nation",
    "Link": "https://www.dailynation.in/independence-day-2025-speech"
  },
  {
    "Title": "PSG Secures Victory Against Tottenham in Pre-Season Friendly",
    "Description": "Paris Saint-Germain defeated Tottenham Hotspur in a competitive pre-season clash.",
    "Date": "2025-08-09",
    "Source": "Football World Report",
    "Link": "https://www.footballworldreport.com/psg-vs-tottenham-friendly"
  },
  {
    "Title": "WSG Tirol Faces Heavy Defeat to Real Madrid",
    "Description": "Real Madrid showcased their dominance in a convincing win over WSG Tirol.",
    "Date": "2025-08-07",
    "Source": "Euro Sports Daily",
    "Link": "https://www.eurosportsdaily.com/wsg-tirol-vs-real-madrid"
  },
  {
    "Title": "Orlando City and Inter Miami Play Out Intense Draw",
    "Description": "Orlando City and Inter Miami ended their MLS clash with a high-energy draw.",
    "Date": "2025-08-06",
    "Source": "US Soccer Bulletin",
    "Link": "https://www.ussoccerbulletin.com/orlando-city-vs-inter-miami"
  },
  {
    "Title": "West Indies Clinch Series Against Pakistan",
    "Description": "The West Indies secured a series win over Pakistan after a tense final match.",
    "Date": "2025-08-11",
    "Source": "Caribbean Cricket News",
    "Link": "https://www.caribbeancricketnews.com/west-indies-vs-pakistan"
  },
  {
    "Title": "Liverpool Beats Crystal Palace in Premier League Opener",
    "Description": "Liverpool started their Premier League season with a solid win over Crystal Palace.",
    "Date": "2025-08-04",
    "Source": "Premier Football Times",
    "Link": "https://www.premierfootballtimes.com/crystal-palace-vs-liverpool"
  },
  {
    "Title": "PSG Announces New Midfielder Signing",
    "Description": "Paris Saint-Germain confirmed the signing of a new midfielder ahead of the upcoming season.",
    "Date": "2025-08-03",
    "Source": "Paris Football Journal",
    "Link": "https://www.parisfootballjournal.com/psg-new-signing-2025"
  },
  {
    "Title": "AFC Champions League Quarterfinal Lineup Finalized",
    "Description": "The last teams have secured their spots in the AFC Champions League quarterfinals.",
    "Date": "2025-08-13",
    "Source": "Asian Football Weekly",
    "Link": "https://www.asianfootballweekly.com/afc-champions-league-quarters"
  },
  {
    "Title": "Barcelona Beats Como in Friendly Match",
    "Description": "Barcelona secured a comfortable victory over Como in a pre-season friendly.",
    "Date": "2025-08-02",
    "Source": "La Liga Insider",
    "Link": "https://www.laligainsider.com/barcelona-vs-como-2025"
  },
  {
    "Title": "Chelsea and Milan End in Stalemate",
    "Description": "Chelsea and AC Milan played out a goalless draw in their friendly encounter.",
    "Date": "2025-08-01",
    "Source": "Football Europa",
    "Link": "https://www.footballeuropa.com/chelsea-vs-milan-2025"
  },
  {
    "Title": "DL13 Lottery Result Announced",
    "Description": "The DL13 state lottery department has released the latest winning numbers.",
    "Date": "2025-08-14",
    "Source": "Lottery News Desk",
    "Link": "https://www.lotterynewsdesk.com/dl13-lottery-result-2025"
  },
  {
    "Title": "Premier League 2025 Season Underway",
    "Description": "The 2025 Premier League season kicked off this week with a series of exciting matches.",
    "Date": "2025-08-03",
    "Source": "UK Sports Express",
    "Link": "https://www.uksportsexpress.com/premier-league-2025-start"
  },
  {
    "Title": "Teaser Released for 'JSK' Movie",
    "Description": "The makers of 'JSK' unveiled the first teaser, sparking excitement among fans.",
    "Date": "2025-08-12",
    "Source": "Bollywood Updates",
    "Link": "https://www.bollywoodupdates.in/jsk-movie-teaser"
  },
  {
    "Title": "LaLiga Season 2025-26 Fixtures Announced",
    "Description": "The official schedule for the LaLiga 2025-26 season has been released by the league.",
    "Date": "2025-08-05",
    "Source": "Spanish Football News",
    "Link": "https://www.spanishfootballnews.com/laliga-2025-fixtures"
  },
  {
    "Title": "Actor Upendra Announces New Film Project",
    "Description": "Kannada actor Upendra revealed plans for his upcoming directorial venture.",
    "Date": "2025-08-06",
    "Source": "Sandalwood Daily",
    "Link": "https://www.sandalwooddaily.com/upendra-new-film-2025"
  },
  {
    "Title": "Calicut University Results Declared",
    "Description": "Calicut University has announced the latest examination results for various courses.",
    "Date": "2025-08-09",
    "Source": "Campus Chronicle",
    "Link": "https://www.campuschronicle.in/calicut-university-results-2025"
  },
  {
    "Title": "Inter Defeats Monza in Serie A Opener",
    "Description": "Inter Milan began their Serie A campaign with a convincing win over Monza.",
    "Date": "2025-08-03",
    "Source": "Serie A Times",
    "Link": "https://www.serieatimes.com/monza-vs-inter-2025"
  },
  {
    "Title": "Real Madrid Secures Late Win in LaLiga Match",
    "Description": "Real Madrid earned a dramatic late victory in their latest LaLiga fixture.",
    "Date": "2025-08-11",
    "Source": "Madrid Sports News",
    "Link": "https://www.madridsportsnews.com/real-madrid-laliga-2025"
  }
];
 const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResults = result.slice(startIndex, startIndex + itemsPerPage);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const paginatedResults = result.slice(startIndex, startIndex + itemsPerPage);

  return (
  <ul className="rows flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-32 vbox w-full">
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-4xl"
      defaultValue="item-1"
    >
      {paginatedResults.map((item, index) => (
        <AccordionItem key={index} value={`item-${0 + index + 1}`}>
          <AccordionTrigger className="text-base sm:text-lg font-bold font-sans">
            {item.Title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{item.Description}</p>
            <small>{item.Date} | {item.Source}</small>
            <a href={item.Link} target="_blank" rel="noopener noreferrer">Read more</a>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
      <PaginationBottom items={result}/>
   
  </ul>
);
}

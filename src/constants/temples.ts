export interface Distillery {
  name: string;
  location: string;
  established: string;
  signature: string;
  description: string;
  bgClass: string;
  color: string;
}

export const DISTILLERIES: Distillery[] = [
  {
    name: "The Dalmore",
    location: "Highlands, Scotland",
    established: "1839",
    signature: "Twelve-point stag, sherry cask masters",
    description:
      "Where the Mackenzie family shaped whisky history. Their stills have flat tops and wide necks—unique in Scotland—creating that rich, heavy style. The current manager's family has worked here for four generations. Four.",
    bgClass: "bg-dalmore",
    color: "from-amber-900/30",
  },
  {
    name: "Yamazaki",
    location: "Kyoto, Japan",
    established: "1923",
    signature: "Mizunara oak, zen precision",
    description:
      "Japan's first malt distillery, hidden in a bamboo forest. The water runs through ancient rock, filtered by nature. Their Mizunara casks—made from 200-year-old oaks—add sandalwood and coconut you'll find nowhere else on Earth.",
    bgClass: "bg-yamazaki",
    color: "from-emerald-900/30",
  },
  {
    name: "Buffalo Trace",
    location: "Frankfort, Kentucky",
    established: "1792",
    signature: "Warehouse H, single barrel legends",
    description:
      "The oldest continuously operating distillery in America. They've never stopped—not during Prohibition (they made 'medicinal' whiskey), not during war, not ever. Walk into Warehouse H and the ghost of Colonel E.H. Taylor is still there, checking barrels.",
    bgClass: "bg-buffalo-trace",
    color: "from-amber-500/30",
  },
  {
    name: "Bushmills",
    location: "Antrim, Northern Ireland",
    established: "1608",
    signature: "Triple distillation, 415 years of water from Saint Columb's Rill",
    description:
      "The world's oldest licensed whiskey distillery. King James I granted the license in 1608, and they've been making whiskey on the same spot ever since. The water still comes from the same tributary—Saint Columb's Rill—filtered through ancient basalt.",
    bgClass: "bg-bushmills",
    color: "from-blue-900/30",
  },
];

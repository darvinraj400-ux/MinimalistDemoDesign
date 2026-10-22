export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: number;
  type: string;
  location: string;
  area: string;
  status: string;
  materials: string[];
  heroImage: ProjectImage;
  images: ProjectImage[];
  description: string;
  rationale: string;
  drawings: string[];
}

// Image URLs from generation
const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/cf64aebe-6f22-4829-8051-1b09adf73523/_result.png",
  p1: "https://image.qwenlm.ai/generated-images/c22ef9fa-0b30-453a-9a49-63b7ae2cbf7e/_result.png",
  p2: "https://image.qwenlm.ai/generated-images/0719dfbe-4ea2-4645-8c55-2ea0f20ff1f0/_result.png",
  p3: "https://image.qwenlm.ai/generated-images/d8aacec9-23a9-4e33-8e02-8816da5b89a9/_result.png",
  p4: "https://image.qwenlm.ai/generated-images/4295171e-7476-40d6-8b35-b33e789d189a/_result.png",
  p5: "https://image.qwenlm.ai/generated-images/96d41a04-a89f-4d0c-80ef-28131660ebbb/_result.png",
  p6: "https://image.qwenlm.ai/generated-images/29e08ecc-e8ef-4852-b3b2-9260d7580d43/_result.png",
  studio: "https://image.qwenlm.ai/generated-images/9a4a4e03-13d5-4aa6-9ae3-4c75fd9c9dbb/_result.png",
};

export { IMG };

// Import SVG drawings for gallery variety
import { createArchitecturalSVG } from "./drawings";

const DRAWING = {
  plan: createArchitecturalSVG(0),
  section: createArchitecturalSVG(1),
  elevation: createArchitecturalSVG(2),
  detail: createArchitecturalSVG(3),
};

export const projects: Project[] = [
  {
    id: "house-of-light",
    title: "House of Light",
    subtitle: "A dwelling shaped by the path of the sun",
    year: 2024,
    type: "Residential",
    location: "Kyoto, Japan",
    area: "185 m²",
    status: "Completed",
    materials: ["Exposed concrete", "Hinoki cypress", "Low-iron glass", "Blackened steel"],
    heroImage: {
      src: IMG.p1,
      alt: "House of Light — exterior view showing concrete volumes and courtyard",
      caption: "Exterior view, south elevation"
    },
    images: [
      { src: IMG.p1, alt: "House of Light exterior", caption: "South elevation at dusk" },
      { src: DRAWING.plan, alt: "Floor plan drawing", caption: "Ground floor plan" },
      { src: DRAWING.section, alt: "Section drawing", caption: "Section through courtyard" },
      { src: DRAWING.detail, alt: "Construction detail", caption: "Wall section detail" }
    ],
    description: "House of Light is a single-family residence organized around a central courtyard that captures and redirects natural light deep into the plan. The house is composed of three concrete volumes arranged in a pinwheel configuration, each serving a distinct programmatic zone while maintaining visual and spatial continuity.",
    rationale: "The client requested a home that would age gracefully and connect its inhabitants to the rhythms of the day and season. We positioned the primary living spaces to track the sun's arc from east to west, with the courtyard serving as a temporal marker — its light conditions shift hour by hour, making time visible within the domestic interior.",
    drawings: ["Floor plan", "Section A-A", "East elevation", "Courtyard detail"]
  },
  {
    id: "grain-silo-conversion",
    title: "Grain Silo Conversion",
    subtitle: "Industrial heritage transformed into communal living",
    year: 2024,
    type: "Adaptive Reuse",
    location: "Rotterdam, Netherlands",
    area: "2,400 m²",
    status: "Completed",
    materials: ["Weathering steel", "Reclaimed brick", "Cast iron", "Polished concrete"],
    heroImage: {
      src: IMG.p2,
      alt: "Grain Silo Conversion — exterior showing industrial structure with new insertions",
      caption: "North facade with new residential insertions"
    },
    images: [
      { src: IMG.p2, alt: "Grain Silo exterior", caption: "North elevation" },
      { src: DRAWING.section, alt: "Section through silos", caption: "Section A-A through silo cylinders" },
      { src: DRAWING.plan, alt: "Floor plan", caption: "Typical floor plan" },
      { src: DRAWING.elevation, alt: "Elevation study", caption: "South elevation" }
    ],
    description: "Six decommissioned grain silos have been converted into twelve residential units within a shared communal framework. The intervention preserves the raw industrial character of the existing structure while inserting precise domestic volumes that float within the silo cylinders, maintaining a visible gap between old and new.",
    rationale: "Adaptive reuse is an act of cultural memory. Rather than erasing the building's industrial past, we chose to make it legible — the new residential insertions are deliberately distinct from the host structure, creating a dialogue between epochs. The communal spaces occupy the interstitial zones between silos, encouraging the kind of chance encounter that defines urban life.",
    drawings: ["Site plan", "Section through silos", "Unit typology", "Facade detail"]
  },
  {
    id: "field-house",
    title: "Field House",
    subtitle: "Dwelling at the edge of agricultural landscape",
    year: 2023,
    type: "Residential",
    location: "Somerset, England",
    area: "220 m²",
    status: "Completed",
    materials: ["Rammed earth", "Oak", "Zinc", "Flint"],
    heroImage: {
      src: IMG.p3,
      alt: "Field House — long horizontal form in rural landscape",
      caption: "West elevation from the meadow"
    },
    images: [
      { src: IMG.p3, alt: "Field House exterior", caption: "Landscape approach" },
      { src: DRAWING.plan, alt: "Ground plan", caption: "Ground floor plan — 38m linear dwelling" },
      { src: DRAWING.section, alt: "Long section", caption: "Long section showing landscape relationship" },
      { src: DRAWING.detail, alt: "Wall construction", caption: "Rammed earth wall detail" }
    ],
    description: "Field House is a linear dwelling that stretches 38 meters across a Somerset meadow, its rammed earth walls drawn from the site's own geology. The house is organized as a sequence of threshold conditions — from enclosed to open, from dark to light — that mediate between the body and the vast agricultural landscape.",
    rationale: "The site demanded humility. Set within a landscape of extraordinary horizontal extent, the house refuses to compete with its surroundings. Instead, it extends the land's own logic — the walls are literally made from the field, the roof plane mirrors the horizon, and the building's proportion echoes the long barns that have shaped this region for centuries.",
    drawings: ["Ground plan", "Long section", "Wall construction detail", "Roof plan"]
  },
  {
    id: "warehouse-no-7",
    title: "Warehouse No. 7",
    subtitle: "A former printing works reborn as artist studios",
    year: 2023,
    type: "Adaptive Reuse",
    location: "Berlin, Germany",
    area: "1,800 m²",
    status: "Completed",
    materials: ["Steel frame", "Polished concrete", "Glass block", "Black steel"],
    heroImage: {
      src: IMG.p4,
      alt: "Warehouse No. 7 — industrial building with new glass additions",
      caption: "Courtyard facade with new studio insertions"
    },
    images: [
      { src: IMG.p4, alt: "Warehouse exterior", caption: "Courtyard elevation" },
      { src: DRAWING.elevation, alt: "Courtyard elevation drawing", caption: "Courtyard elevation — existing and proposed" },
      { src: DRAWING.plan, alt: "Floor plan", caption: "Ground floor plan — studio units" },
      { src: DRAWING.detail, alt: "Junction detail", caption: "Steel and glass block junction" }
    ],
    description: "Warehouse No. 7 transforms a 1920s printing works into twelve artist studios and a shared exhibition space. The intervention is deliberately minimal — new elements are inserted as independent objects within the existing shell, preserving the raw quality of the original structure while providing the environmental performance required for contemporary use.",
    rationale: "Artists need space that doesn't prescribe how they work. We maintained the warehouse's inherent flexibility — high ceilings, deep floor plates, abundant natural light from the north-facing sawtooth roof — and added only what was strictly necessary: thermal insulation within the roof, a new services core, and partition walls that can be reconfigured without damaging the original fabric.",
    drawings: ["Floor plan — ground", "Floor plan — upper", "Section B-B", "Services strategy"]
  },
  {
    id: "concrete-garden",
    title: "Concrete Garden",
    subtitle: "Domestic landscape within an urban boundary wall",
    year: 2022,
    type: "Residential",
    location: "Mexico City, Mexico",
    area: "310 m²",
    status: "Completed",
    materials: ["Board-formed concrete", "Volcanic stone", "Copper", "Teak"],
    heroImage: {
      src: IMG.p5,
      alt: "Concrete Garden — courtyard house with lush vegetation",
      caption: "Central garden view from covered terrace"
    },
    images: [
      { src: IMG.p5, alt: "Concrete Garden exterior", caption: "Garden courtyard" },
      { src: DRAWING.plan, alt: "Site plan", caption: "Site plan — courtyard organization" },
      { src: DRAWING.section, alt: "Garden section", caption: "Section through garden and living spaces" },
      { src: DRAWING.elevation, alt: "Planting plan", caption: "Courtyard planting strategy" }
    ],
    description: "Concrete Garden is a courtyard house that turns inward, creating a private landscape within the dense urban fabric of Colonia Roma. The house is organized as a series of concrete frames that contain gardens of varying scales — from a single tree in the entry court to the expansive central garden that forms the heart of the home.",
    rationale: "In a city of extraordinary density and noise, the house offers refuge through introversion. The concrete walls are not barriers but frames — each opening is calibrated to compose a specific view, to control light quality, and to create microclimates that support different species of planting. The garden is not decoration; it is the primary architectural element.",
    drawings: ["Site plan", "Garden section", "Concrete frame detail", "Planting plan"]
  },
  {
    id: "signal-station",
    title: "Signal Station",
    subtitle: "Coastal observation post and visitor center",
    year: 2022,
    type: "Cultural",
    location: "Cornwall, England",
    area: "145 m²",
    status: "Completed",
    materials: ["Cor-ten steel", "Concrete", "Timber", "Glass"],
    heroImage: {
      src: IMG.p6,
      alt: "Signal Station — angular form on coastal cliff",
      caption: "East elevation from coastal path"
    },
    images: [
      { src: IMG.p6, alt: "Signal Station exterior", caption: "Coastal approach" },
      { src: DRAWING.section, alt: "Section through cliff", caption: "Section showing relationship to cliff geology" },
      { src: DRAWING.detail, alt: "Cladding detail", caption: "Cor-ten steel cladding junction" },
      { src: DRAWING.elevation, alt: "Structural strategy", caption: "Structural diagram — double skin" }
    ],
    description: "Signal Station is a small visitor center and observation point positioned on the Cornwall coast. The building's angular form references both the geological strata of the cliff face and the maritime signal stations that once dotted this coastline. It serves as both destination and threshold — the end of the coastal path and the beginning of understanding this landscape.",
    rationale: "The building must withstand extreme weather while remaining open and inviting. We developed a double-skin strategy: an outer layer of Cor-ten steel that weathers to match the cliff color, and an inner layer of insulated timber that creates a warm, protected interior. Between the skins, a ventilated cavity manages moisture and thermal performance.",
    drawings: ["Plan", "Section through cliff", "Cladding detail", "Structural strategy"]
  }
];

export const projectTypes = [...new Set(projects.map(p => p.type))];
export const projectYears = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);

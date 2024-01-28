import translation from "./i18n/en.json" assert { type: "json" };

type Translation = typeof translation;

type State = {
  translation: Translation;
  lang: "fr" | "en";
  dark: boolean;
};

type Money = {
  amount: number;
  currency: string;
};

type Image = {
  url: string;
  alt: string;
};

type ProductPriceRange = {
  start: { gross: Money };
};

type List<T> = {
  edges: T[];
};

type ProductVariant = {
  id: string;
  pricing: {
    price: {
      gross: Money;
    };
  };
  name: string;
  quantityAvailable: number;
};

type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: {
    name: string;
  };
  thumbnail: Image | null;
  media: Image[];
  variants: ProductVariant[];
  pricing: {
    priceRange: ProductPriceRange;
  };
};

export type { State, Translation, Product, Image, Money, List };

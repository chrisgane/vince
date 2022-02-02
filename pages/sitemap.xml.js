import { baseUrl } from "utils/general";

const Sitemap = () => null;

export const getServerSideProps = async ({ res }) => {
    // static pages
    const staticPages = [
        { slug: "" },
        { slug: "about" },
        { slug: "work" },
        { slug: "contact" },
        { slug: "privacy-policy" },
        { slug: "terms" },
    ];

    // portfolio posts
    const portfolioItemsRes = await fetch(`${baseUrl}portfolio?per_page=100`);
    const portfolioItems = await portfolioItemsRes.json();
    const portfolioRecords = portfolioItems.map((item) => {
        return { slug: "work/" + item.slug, updatedAt: item.modified };
    });

    // categories pages
    const portfolioCategoriesRes = await fetch(`${baseUrl}categories`);
    const portfolioCategories = await portfolioCategoriesRes.json();

    const portfolioCategoriesRecords = portfolioCategories
        .filter((item) => item.slug !== "uncategorized")
        .map((item) => {
            return { slug: "work/category/" + item.slug };
        });

    const date = new Date().toISOString();
    const domain = "https://vince.co.uk/";

    const allPages = staticPages
        .concat(portfolioRecords)
        .concat(portfolioCategoriesRecords);

    if (res) {
        res.setHeader("Content-Type", "text/xml");
        res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages.map((page) => {
            return `<url>
<loc>${domain}${page.slug}</loc>
<lastmod>${page.updatedAt ? page.updatedAt : date}</lastmod>
</url>`;
        })}
    </urlset>`);
        res.end();
    }
    return {
        props: {},
    };
};

export default Sitemap;

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { domain } from "utils/general";

const SeoTags = ({
    metaTitle = "Vince",
    metaDescription,
    metaImage = `${domain}vince-sm.png`,
}) => {
    const router = useRouter();
    const url = domain + router.asPath;

    return (
        <Head>
            <title>{metaTitle}</title>
            {metaDescription && (
                <meta name="description" content={metaDescription} />
            )}
            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={metaTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            {metaDescription && (
                <meta property="og:description" content={metaDescription} />
            )}
            {metaImage && <meta property="og:image" content={metaImage} />}
            <meta property="og:site_name" content="Vince" />
        </Head>
    );
};

export default SeoTags;

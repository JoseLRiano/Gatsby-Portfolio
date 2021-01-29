import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export const Seo = ({ description, keywords, title, image, url, author}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description;
                const metaTitle = title || data.site.siteMetadata.title;
                const metaAuthor = author || data.site.siteMetadata.author;
                const metaUrl = url || data.site.siteMetadata.url;
                const metaImage = image || data.site.siteMetadata.image;
                const metaKeywords = keywords || ["Web Developer", "Front End Developer", "Software Developer", "Jose Riano", "Jose L Riano"];
                return(
                    <Helmet 
                        title={metaTitle}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            },
                            {
                                property: `og:image`,
                                content: metaImage,
                            },
                            {
                                property: `og:url`,
                                content: metaUrl,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary_large_image`,
                            },
                            {
                                name: `twitter:creator`,
                                contetn: metaAuthor,
                            },
                            {
                                name: `twitter:title`,
                                conten: metaTitle,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                            {
                                name: `twitter:image`,
                                content: metaImage,
                            }
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `),
                            } : []
                        )
                        }
                        >
                            <title>{metaTitle}</title>
                            <meta name="title" content={metaDescription} />
                        </Helmet>
                )

            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title,
                description,
                author,
                image
            }
        }
    }
`
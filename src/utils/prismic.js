import prismic from "@prismicio/client";

const apiUrl = "https://anton-presentation.prismic.io/api/v2";

export const client = prismic.client(apiUrl);

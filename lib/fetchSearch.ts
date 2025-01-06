import axios from 'axios';
import { load } from 'cheerio';

export interface Product {
    title: string;
    price: string;
    image: string | undefined;
    link: string | undefined;
}

async function fetchSearch(searchTerm: string): Promise<Product[]> {
    // Convert the search term into a URL-friendly format
    searchTerm = searchTerm.split(' ').join('+');
    const baseURL = `https://www.pcstudio.in/page/{pageNumber}/?s=${searchTerm}&post_type=product&dgwt_wcas=1`;

    // Store all products extracted
    let allProducts: Product[] = [];
    let pageNumber = 1;
    let hasMorePages = true;

    // Continue fetching data from subsequent pages
    while (hasMorePages) {
        const url = baseURL.replace("{pageNumber}", pageNumber.toString());
        const response = await axios.get(url);
        const $ = load(response.data);

        // Extract product details
        const products: Product[] = $('.woo-entry-inner').map((_, element) => {
            const title = $(element).find('.title a span').attr('title') || 
                          $(element).find('.title a span').text() || 
                          $(element).find('.title a').text();
            const price = $(element).find('.price ins .woocommerce-Price-amount').text().trim();
            const image = $(element).find('.woo-entry-image-main').attr('src');
            const link = $(element).find('.woocommerce-LoopProduct-link').attr('href');

            return { title, price, image, link };
        }).get();

        // Add extracted products to the list
        allProducts = [...allProducts, ...products];

        // Check if there's a next page by looking for the 'next' button or page
        hasMorePages = $('.next').length > 0;
        pageNumber++;
    }

    console.log('Extracted Products:', allProducts);


    return allProducts;
}

export default fetchSearch;

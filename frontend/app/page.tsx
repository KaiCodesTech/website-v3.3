import { client } from '../client';
import imageUrlBuilder from '@sanity/image-url';

function urlFor(source: any) {
  return builder.image(source);
}


const builder = imageUrlBuilder(client);

async function sanityData() {
  const projects = await client.fetch(`*[_type == "project"]`);
  const display = await client.fetch(`*[_type == "display"]`);
  const greeting = await client.fetch(`*[_type == "greeting"]`);

  return {
    projects,
    display,
    greeting
  };
}

export default async function Page() {

}

export interface TOCItem {
  id: string;
  title: string;
}

export function processBlogContent(content: string): { processedContent: string; toc: TOCItem[] } {
  const toc: TOCItem[] = [];
  
  // Regex to find h3 tags and add ids
  const processedContent = content.replace(/<h3[^>]*>(.*?)<\/h3>/g, (match, title) => {
    // Create a slug from the title
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
      .trim()
      .replace(/\s+/g, '-'); // Replace spaces with hyphens
      
    toc.push({ id, title });
    
    // Return the h3 with id
    return `<h3 id="${id}" class="text-2xl font-serif text-white mb-4 mt-8 scroll-mt-24 relative pl-4 border-l-4 border-primary">${title}</h3>`;
  });

  return { processedContent, toc };
}

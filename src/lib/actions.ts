"use server";



export async function getBibleVersions() {
        const response = await fetch(
            "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json"
          );
          if (response.ok) {
            const responseBody = await response.json();
            return responseBody;
          } 
}


export async function getChapter(formData: FormData) {
  try {
    const book = formData.get('book');
    const chapter = formData.get('chapter');
    const verse = formData.get('verse');
    const version = formData.get('version');
    const search = formData.get('search');
  
      const response = await fetch(
          `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json`
        );
      
          const responseBody = await response.json();
          return responseBody;
      
  } catch (error) {
    return { status: "nok", message: "Failed to get chapter." };
  }
 
}

export async function getVerse(formData: FormData) {
  try {
    const book = formData.get('book');
  const chapter = formData.get('chapter');
  const verse = formData.get('verse');
  const version = formData.get('version');
  const search = formData.get('search');
  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json`
  );
  const responseBody = await response.json();
        return responseBody;
  } catch (error) {
    return { status: "nok", message: "Failed to get verse." };
  }
  
   
      // if (response.ok) {
        
      // } 
}

export async function getSearch(formData: FormData) {
  try {
    const search = formData.get("search");
    const response = await fetch(
      `https://bible-go-api.rkeplin.com/v1/search?query=${search}`
      );
      
        const responseBody = await response.json();
        return responseBody;
      
  } catch (error) {
    return { status: "nok", message: "Failed to get response." };
  }
 
  
}
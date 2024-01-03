const key = process.env.NEXT_PUBLIC_API_KEY

export async function getHeadlines(category) {
  let url
  category ?
    url = `https://newsapi.ai/api/v1/minuteStreamArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22categoryUri%22%3A%22dmoz%2F${category}%22%7D%2C%7B%22lang%22%3A%22eng%22%7D%5D%7D%7D&apiKey=${key}`
  : url = `https://newsapi.ai/api/v1/minuteStreamArticles?query=%7B%22%24query%22%3A%7B%22lang%22%3A%22eng%22%7D%7D&apiKey=${key}`
  
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw {
        message: "Failed to fetch records",
        statusText: res.statusText,
        status: res.status
      }
    }
    const data = await res.json()
    return data.recentActivityArticles.activity

  } catch (error) {
    
    console.error("Error fetching headlines:", error)
    return [] // Return an empty array in case of an error
  
  }
}

export async function getDetail(id) {
  let url = `https://newsapi.ai/api/v1/article/getArticle?articleUri=${id}&resultType=info&apiKey=${key}`  
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw {
        message: "Failed to fetch records",
        statusText: res.statusText,
        status: res.status
      }
    }
    const data = await res.json()
    const uri = String(id)
    return data[uri].info

  } catch (error) {
    
    console.error("Error fetching headlines:", error)
    return [] // Return an empty array in case of an error
  
  }
}

export async function getArticles(query) {
  let url = `https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22keyword%22%3A%22${query}%22%2C%22keywordSearchMode%22%3A%22simple%22%7D%2C%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIndia%22%7D%2C%7B%22lang%22%3A%22eng%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%7D%7D&resultType=articles&articlesSortBy=rel&apiKey=${key}`  
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw {
        message: "Failed to fetch records",
        statusText: res.statusText,
        status: res.status
      }
    }
    const data = await res.json()
    return data.articles.results

  } catch (error) {
    
    console.error("Error fetching headlines:", error)
    return [] // Return an empty array in case of an error
  
  }
}



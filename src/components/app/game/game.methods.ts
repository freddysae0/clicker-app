type QuotesResponse = {
    donald_quotes: string[]
}

export const getDonaldQuotes = async (): Promise<string[]> => {
    let res: Response = new Response;
    let data: QuotesResponse = {donald_quotes: []}
    try {
      res = await fetch("/api/quotes")
      data = await res.json()
    } catch (error) {
      console.log(error);
    }
    return data.donald_quotes
  }
const { randomQuote } = require("donald-quotes-trump");
export async function GET() {

    const tenQuotes = await Promise.all(
        Array.from({ length: 10 }, () => randomQuote() as string)
    );



    return Response.json({ donald_quotes: tenQuotes });
}



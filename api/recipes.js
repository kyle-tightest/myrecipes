let recipes = [];
let nextId = 1;

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(recipes);
  } else if (req.method === 'POST') {
    let body = req.body;
    // Vercel may not parse JSON automatically for API routes
    if (!body || typeof body !== 'object') {
      try {
        body = JSON.parse(req.body);
      } catch {
        return res.status(400).json({ message: 'Invalid JSON' });
      }
    }
    const { name, ingredients, instructions } = body;
    const newRecipe = { id: nextId++, name, ingredients, instructions };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
